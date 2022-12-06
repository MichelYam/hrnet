import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

type props = {
    departements: {
        value: string,
        label: string
    }[],
    states: {
        value: string,
        label: string
    }[]
}

const Index = ({ departements, states }: props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor='first-name'>First Name</FormLabel>
                <FormInput type="text" id='first-name' required />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='last-name'>Last Name</FormLabel>
                <FormInput type="text" id='last-name' required />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='date-of-birth'>Date of Birth</FormLabel>
                {/* <FormInput type="text" id='first-name' required /> */}
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='start-date'>Start Date</FormLabel>
                {/* <FormInput type="text" id='first-name' required /> */}
            </FormControl>
            <FormFieldSet>
                <FormFieldLengend>Adress</FormFieldLengend>
                <FormControl>
                    <FormLabel htmlFor='street'>Street</FormLabel>
                    <FormInput type="text" id='street' required />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <FormInput type="text" id='city' required />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='state'>State</FormLabel>
                    <Select id="state" options={states} />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='zip-code'>Zip Code</FormLabel>
                    <FormInput type="number" id='zip-code' required />
                </FormControl>
            </FormFieldSet>
            <FormControl>
                <FormLabel htmlFor='departments'>Department</FormLabel>
                <Select id='departments' options={departements} />
            </FormControl>
            <FormControl>
                <FormInput type="submit" id='submit' />
            </FormControl>
        </Form>
    )
}

export default Index


const Form = styled.form`
`;
const FormControl = styled.div`
`;
const FormLabel = styled.label`
`;
const FormInput = styled.input`
`;
const FormFieldSet = styled.fieldset`
`;
const FormFieldLengend = styled.legend`
`;
