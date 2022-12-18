import * as Yup from 'yup'

const RegistrationSchema = Yup.object({
    firstName: Yup.string()
        .required("required")
        .min(3, "too short")
        .max(50, "too long"),
    lastName: Yup.string()
        .required("required")
        .min(3, "too short")
        .max(50, "too long"),
    phone: Yup.string()
        .required("required")
        .min(10, "to short")
        .max(10, "too long"),
    email: Yup.string()
        .required("required")
        .email("Invalid email"),
    password: Yup.string()
        .required("required")
        .min(7, "too short")
        .max(50, "too long"),
    confirmPassword: Yup.string()
        .required("required")
        .min(7, "too short")
        .max(50, "too long")
        .oneOf([Yup.ref('password'),null], "Password must match"),
    })
export default RegistrationSchema;