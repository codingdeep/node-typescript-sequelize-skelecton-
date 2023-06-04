import {object, string, TypeOf} from "zod";


const UserValidation = object({
    body: object({
        firstName: string({required_error: 'First Name is required'}).min(1, {message: "Please enter a valid first name"}),
        lastName: string({required_error: 'Last Name is required'}).min(1, {message: 'Please enter a valid last name'}),
        emailAddress: string({required_error: 'Email address is required'}).email('Please enter your valid email address'),
        password: string({required_error: 'Password is required'}).min(6, 'Password is too short - should be at least 8 chars'),
        confirmPassword: string({required_error: 'Confirm password is required'})
    }).refine(data => data.password === data.confirmPassword, {message: 'Password doesn\'t match', path: ['password']})
})

export type UserInputType = Omit<TypeOf<typeof UserValidation>, 'id'>
export default UserValidation;

