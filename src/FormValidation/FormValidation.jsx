import { useState } from "react";
import { object, string, ref } from "yup";

function SignupForm() {
  const [formErrors, setFormErrors] = useState({});

  let userSchema = object({
    username: string().required("check this out"),
    password: string().required(),
    email: string().required().email("Please provide a valid format"),
    confirmPassword: string().oneOf([ref("password")], "Passwords must match"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    try {
      await userSchema.validate(formData, { abortEarly: false });
    } catch (error) {
      const errors = error.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setFormErrors(errors);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
          {formErrors.username && <p>{formErrors.username}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
          {formErrors.email && <p>{formErrors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
          {formErrors.password && <p>{formErrors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" />
          {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
