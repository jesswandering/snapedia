// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import axios from 'axios';

// const SignupPage = () => {
//     const navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3001/auth/signup', formData);
//             localStorage.setItem("user", JSON.stringify(response.data))
//             navigate("/home")
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//             />
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default SignupPage;