Create database InternTaskCyb;
use InternTaskCyb;

Create table Courses (sno int primary key,cname varchar(20),des varchar(50),duration int);

Create table Student (id int primary key,
					course int ,
                    sname varchar(20),
                    email varchar(255),
                    phone varchar(10),
                    FOREIGN KEY (course) REFERENCES Courses(sno)
                    );

            