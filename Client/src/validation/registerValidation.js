const registerValidation = (values) => {
  if (Object.values(values).some((x) => x == "")) {
    throw new Error("Fields are required!");
  }
  if (values.username.length < 3) {
    throw new Error("Username must be at least 3 characters long!");
  }
  if (values.password !== values.repassword) {
    throw new Error("Password doesn't match!");
  }
  if (values.password.length < 3) {
    throw new Error("Password must be at least 3 characters long!");
  }
  if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    throw new Error("Email is not valid");
  }
};
export default registerValidation;