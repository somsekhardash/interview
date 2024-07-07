import { object, string, number } from "yup";
import { useState, useReducer } from "react";

const phoneRegex = /^\+?(1-9)(1-9)(7,14)$/;

const FormSchema = object({
  name: string().required("Please provide a value"),
  age: number()
    .required("Please provide a value")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  phone: string().matches(phoneRegex, "Enter a valid mobile number"),
  gender: string().required("Please select a gender"),
  country: string().required("Please select a country"),
});

export default function FormValidation2() {
  const [error, setError] = useState({});

  const [state, dispatch] = useReducer((fState, action) => {
    return {
        ...fState,
        ...action,
    }
  }, {
    name: '',
    age: null,
    phone: '',
    gender: '',
    country: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
};

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const check = Object.fromEntries(formData);
    try {
      await FormSchema.validate(check, { abortEarly: false });
      setError({});
    } catch (error) {
      const check = error.inner.reduce((acc, node) => {
        acc[node.path] = node.message;
        return acc;
      }, {});
      setError(check);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup Form</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={state.name} onChange={handleChange}/>
          {error.name && <span className="error">{error.name}</span>}
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={state.age} onChange={handleChange} />
          {error.age && <span className="error">{error.age}</span>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="string" id="phone" name="phone" value={state.phone} onChange={handleChange}/>
          {error.phone && <span className="error">{error.phone}</span>}
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={state.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {error.gender && <span className="error">{error.gender}</span>}
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <select id="country" name="country"  value={state.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
          {error.country && <span className="error">{error.country}</span>}
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}





// import { object, string, number } from 'yup';
// import { useState } from "react";

// // Regular expression for validating phone numbers (allowing international formats)
// const phoneRegex = /^\+?[1-9]\d{9,14}$/;

// // Yup validation schema
// const FormSchema = object({
//     name: string().required("Please provide a value"),
//     age: number().required("Please provide a value").positive("Age must be positive").integer("Age must be an integer"),
//     phone: string().matches(phoneRegex, "Enter a valid mobile number"),
//     gender: string().required("Please select a gender"),
//     country: string().required("Please select a country"),
// });

// // Component to display validation errors
// // eslint-disable-next-line react/prop-types
// const ErrorMessage = ({ message }) => {
//     return (
//         <span className='error' role="alert" aria-live="assertive">
//             {message}
//         </span>
//     );
// };

// export default function FormValidation2() {
//     const [errors, setErrors] = useState({}); // State to hold form validation errors

//     const submitForm = async (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
//         const formData = new FormData(e.target); // Get form data
//         const formValues = Object.fromEntries(formData); // Convert FormData to a plain object
//         try {
//             await FormSchema.validate(formValues, { abortEarly: false }); // Validate form data against schema
//             setErrors({}); // Clear errors if validation passes
//             console.log("Form submitted successfully", formValues);
//         } catch (validationError) {
//             const errorMessages = validationError.inner.reduce((acc, node) => {
//                 acc[node.path] = node.message; // Set error message for each invalid field
//                 return acc;
//             }, {});
//             setErrors(errorMessages); // Update the error state with the validation errors
//         }
//     };

//     const resetForm = (e) => {
//         e.target.reset(); // Reset form fields
//         setErrors({}); // Clear all errors
//     };

//     return (
//         <div className="signup-form">
//             <h2>Signup Form</h2>
//             <form onSubmit={submitForm} onReset={resetForm}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input type="text" id="name" name="name" />
//                     {errors.name && <ErrorMessage message={errors.name} />} {/* Display error if present */}
//                 </div>
//                 <div>
//                     <label htmlFor="age">Age:</label>
//                     <input type="number" id="age" name="age" />
//                     {errors.age && <ErrorMessage message={errors.age} />} {/* Display error if present */}
//                 </div>
//                 <div>
//                     <label htmlFor="phone">Phone Number:</label>
//                     <input type="tel" id="phone" name="phone" />
//                     {errors.phone && <ErrorMessage message={errors.phone} />} {/* Display error if present */}
//                 </div>
//                 <div>
//                     <label htmlFor="gender">Gender:</label>
//                     <select id="gender" name="gender">
//                         <option value="">Select Gender</option>
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                     {errors.gender && <ErrorMessage message={errors.gender} />} {/* Display error if present */}
//                 </div>
//                 <div>
//                     <label htmlFor="country">Country:</label>
//                     <select id="country" name="country">
//                         <option value="">Select Country</option>
//                         <option value="usa">USA</option>
//                         <option value="canada">Canada</option>
//                         <option value="uk">UK</option>
//                         <option value="australia">Australia</option>
//                     </select>
//                     {errors.country && <ErrorMessage message={errors.country} />} {/* Display error if present */}
//                 </div>
//                 <button type="submit">Signup</button>
//                 <button type="reset">Reset</button>
//             </form>
//         </div>
//     );
// }



