import React, {useEffect, useState} from 'react'
import { listStudents } from '../Services/StudentService'
import { deleteStudent } from '../Services/StudentService';
import { useNavigate } from 'react-router-dom';

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);

    const navigator = useNavigate();

useEffect(() => {
    getAllStudents();
   
}, [])

function getAllStudents()
{
    listStudents().then((response) => {
         setStudents(response.data);             // written a logic, to get a response of the REST API and store the data in (students) state variable
      })
      .catch(error => {
         console.error(error);
      });
}
function addNewStudent()
{
    navigator('/addstudent')
}

function updateStudent(rollno)
{
    navigator(`/updatestudent/${rollno}`)                               // passing student rollno dynamically(use backtics symbol not single quotes)
}

function deleteStudent(rollno)
{
    console.log(rollno);

    deleteStudent(rollno).then((response) => {
        getAllStudents();
    }).catch(error => {
        console.error(error);
    })
}

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Students</h2>
        <button className='btn btn-primary mb-2'onClick={addNewStudent}>Add Student</button>              {/* creating Addstudent button*/}
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Rollno</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => (
                        <tr key={student.rollno}>
                        <td>{student.rollno}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=> updateStudent(student.rollno)}>Update</button>
                            <button className='btn btn-danger' onClick={()=> deleteStudent(student.rollno)} style={{marginLeft:'10px'}}>Delete</button>
                        </td>
                        </tr> ))
                }
            </tbody>
        </table>
    </div>
  )
}
export default ListStudentComponent