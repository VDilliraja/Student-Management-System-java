import React, { useEffect, useState } from 'react'
import { createStudent, getStudent, updateStudent } from '../Services/StudentService'
import { useNavigate, useParams } from 'react-router-dom'                           // implementing the Navigate to list students page after form submission done.


const StudentComponent = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {rollno} = useParams();

    const [errors,setErrors]=useState({                                  // object attributes to hold the validation errors with respect to state variables.
        firstname: '',
        lastname:'',
        email:''
    })

    const navigator=useNavigate();

    useEffect(() => {
        
        if(rollno){
            getStudent(rollno).then((response) => {
                setFirstName(response.data.firstname);
                setLastName(response.data.lastname);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }

    }, [rollno])

    function handleFirstName(e)                                         // passing event has a parameter 
    {
        setFirstName(e.target.value);
    }
    function handleLastName(e)
    {
        setLastName(e.target.value);
    }
    function handleEmail(e)
    {
        setEmail(e.target.value);
    }

    function saveOrUpdateStudent(e)
    {
        e.preventDefault();

        if(validateForm())                                                               // calling the javascript function
        {
            const student={firstname,lastname,email}
            console.log(student)

            if(rollno)
            {
                updateStudent(rollno, student).then((response) => {
                    console.log(response.data);
                    navigator('/students');
                }).catch(error => {
                    console.error(error);
                })
            } 
            else
            {
                 //creation of (createStudent) from StudentService and it needs to import at top.
                 createStudent(student).then((response) => {
                 console.log(response.data);
                 navigator('/students')                      // it will navigate to the ListStudentComponent
                }).catch(error => {
                    console.error(error);
                })
             }
         } 
    }
    function validateForm()
    {
        let valid = true;
        const errorsCopy = {...errors}                           // to copy the errors obj(state var) into the errors copy.
        
        if(firstname.trim())
        {
            errorsCopy.firstname='';
        }
        else{
            errorsCopy.firstname='First name is required';
            valid=false;
        }

        if(lastname.trim())
        {
            errorsCopy.lastname='';
        }
        else{
            errorsCopy.lastname='Last name is required';
            valid=false;
        }

        if(email.trim())
        {
            errorsCopy.email='';
        }
        else{
            errorsCopy.email='Email is required';
            valid=false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle()                                            // changing the pagetitles with respect to the corresponding pages.
    {
        if(rollno)
        {
            return <h2 className='text-center'>Update Student</h2>
        }
        else{
            return <h2 className='text-center'>Add Student</h2>
        }
    }

  return (
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()                                             // dynamically add the page titles.
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input type='text' placeholder='Enter Student first name' name='firstName' value={firstname} className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} onChange={handleFirstName}/>    {/* passing the firstname(state variable name) to the value property */}
                                {errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input type='text' placeholder='Enter Student last name' name='lastName' value={lastname} className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} onChange={handleLastName}/>   
                                {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>} 
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input type='email' placeholder='Enter email' name='email' value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`} onChange={handleEmail}/>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            
                            <button className='btn btn-success' onClick={saveOrUpdateStudent}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
)
}
export default StudentComponent