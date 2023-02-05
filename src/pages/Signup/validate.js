import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    name: Yup.string().required("last name is required"),
    surname: Yup.string().required("last name is required"),
    email: Yup.string()
        .email()
        .required("Email is required"),
    password: Yup.string()
        .min(8, "password must be 8 characters at least")
        .matches("^[a-zA-Z0-9!@#$&()-`.+,/\"]*$")
        .required("Password is required"),
    password2: Yup.string()
        .when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    phone: Yup.string()
        .required("Phone number is required"),
    agree: Yup.boolean(true)
            .required()
})
