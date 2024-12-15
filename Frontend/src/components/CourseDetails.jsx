import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseDetails() {
    const [courses, setCourses] = useState([]);
    const [Students, setStudents] = useState([])
    // const [delS, setDels] = useState(0);
    const [loading, setLoading] = useState(true); // Track loading state

    const getDetails = async () => {
        setLoading(true);
        try {
            const [coursesResponse, studentsResponse] = await Promise.all([
                axios.get('http://localhost:8000/api/courses/'),
                axios.get('http://localhost:8000/api/students/')
            ]);
            
            // Update state with the data
            setCourses(coursesResponse.data);
            setStudents(studentsResponse.data);
            
            console.log("Courses Data:", coursesResponse.data);
            console.log("Students Data:", studentsResponse.data);

        } catch (error) {
            console.error("Error fetching data:", error);
            alert('Failed to fetch data. Please try again later.');
        } finally {
            setLoading(false); 
        }
    };

    const handleDel = async (del) =>{
        try {
            
            const response = await axios.delete(`http://localhost:8000/api/students/${del}/`);
            
            if (response.status === 204) {
                setStudents(prevStudents => prevStudents.filter(student => student.id !== del));
                // alert('Student deleted successfully!');
            } else {
                alert('Failed to delete student.');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('Error deleting student. Please try again later.');
        }
    };

    useEffect(() => {
        getDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        
        <div className="my-3 mx-3  bg-body-secondary">

            <div className="pt-4 d-flex justify-content-between align-items-center">
            <h2 className='text-center text-uppercase fw-bolder font-monospace fs-2 mx-4 '>Course Wise Student Info</h2>
            <button className='btn btn-success flex-end mx-4'>Add Course</button>
            </div>
            <div className="accordion p-1" id="accordionExample">
            {courses.map((course, index) => {
                    const enrolledStudents = Students.filter(student => String(student.course) === String(course.sno));

                    return (
                        <div className="accordion-item m-3" key={course.id || index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded="false"  
                                    aria-controls={`collapse${index}`}
                                >
                                    {course.cname}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <div className="d-flex flex-column mb-3">
                                        <strong>{course.cname}</strong>
                                        <span>Description: {course.des || "No description available."}</span>
                                        <span>Duration: {course.duration + " Months" || "No duration available."}</span>
                                    </div>
                                    
                                    <div className="d-flex flex-column">
                                        <strong>Students Details</strong>
                                        {/* Check if there are students for the current course */}
                                        {enrolledStudents.length > 0 ? (
                                            <table className="table table-bordered mt-3">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {enrolledStudents.map(student => (
                                                        <tr key={student.id}>
                                                            
                                                            <td>{student.sname}</td>
                                                            <td>{student.email}</td>
                                                            <td>{student.phone}</td>
                                                            <td>
                                                                <button className="btn btn-info btn-sm me-2">Edit</button>
                                                                <button className="btn btn-danger btn-sm" onClick={()=>{handleDel(student.id)}}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        ) : (
                                            
                                            <p className="alert alert-secondary" role="alert">No students enrolled in this course.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CourseDetails;
