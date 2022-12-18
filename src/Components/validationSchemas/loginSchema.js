import * as Yup from 'yup';

const logInValidation = Yup.object({
    email: Yup.string()
        .required("required")
        .email("Invalid email"),
    password: Yup.string()
        .required("required")
        .min(3, "too short")
        .max(20, 'too long'),
})
export default logInValidation;