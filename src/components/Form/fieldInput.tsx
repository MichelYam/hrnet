import React from 'react'

type Prop = {
    label: string
    type: string
    classInput: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const fieldInput = ({ label, type, handleChange, classInput }: Prop) => {
    return (
        <input id={label} className={classInput} type={type} onChange={(event) => handleChange(event)} required />
    )
}

export default fieldInput

{/* <div className='form-group col-md-4'>
<label htmlFor='city'>City</label>
<input className='form-control' type="text" id='city' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmployee({
        ...newEmployee,
        city: e.target.value
    })
}} required />
</div> */}