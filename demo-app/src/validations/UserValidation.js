import * as Yup from "yup";

export const userSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First Name is Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name is Required"),
  email: Yup.string()
    .email("Email is invalid")
    .matches(
      /^[a-zA-Z0-9]+@miraclesoft\.com$/,
      "Email must match company domain"
    )
    .required("Email is required"),
  phone: Yup.number()
    .typeError("Enter a valid phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
