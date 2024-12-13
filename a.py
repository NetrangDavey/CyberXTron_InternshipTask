import os

def find_null_bytes_in_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.py'):  # Only check Python files
                file_path = os.path.join(root, file)
                with open(file_path, 'rb') as f:
                    content = f.read()
                    if b'\x00' in content:
                        print(f"Null byte found in: {file_path}")

# Replace with your project directory
find_null_bytes_in_files('C:/Users/Vishal Davey/Desktop/Internship Task CyberXTron/Backend')
