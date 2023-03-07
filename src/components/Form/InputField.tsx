import React from 'react'

type InputFieldProps = {
    label: string
    type: string
    name: string;
    classInput: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField = ({ label, type, name, handleChange, classInput }: InputFieldProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input className={classInput} name={name} id={name} type={type} onChange={(event) => handleChange(event)} required />
        </div>
    )
}

export default InputField