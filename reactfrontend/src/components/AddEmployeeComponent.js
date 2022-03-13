import React, { useState } from 'react'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId}
        console.log(employee);
    }

  return (
    <div>
        <br/><br/>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3'>
                <h2 className='text-center'>Add New Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name : </label>
                            <input
                                type="text"
                                placeholder='Enter first name'
                                name='firstName'
                                className='form-control'
                                value = {firstName}
                                onChange = {(e) => setFirstName(e.target.value )}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name : </label>
                            <input
                                type="text"
                                placeholder='Enter last name'
                                name='lastName'
                                className='form-control'
                                value = {lastName}
                                onChange = {(e) => setLastName(e.target.value )}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Email ID : </label>
                            <input
                                type="text"
                                placeholder='Enter email id'
                                name='emailId'
                                className='form-control'
                                value = {emailId}
                                onChange = {(e) => setEmailId(e.target.value )}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={(e) => saveEmployee(e)}>Add</button>
                    </form>
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}

export default AddEmployeeComponent
