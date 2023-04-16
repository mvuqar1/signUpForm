import React from 'react';
import "./Form.css";
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function Form() {
  const SignupSchema = Yup.object().shape({
    name:Yup.string()
    // .required("Name is Required")
    .min(4, "Name is too short - should be 4 chars minimum")
    .max(125, 'Too Long!'),

    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string()
      // .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
    repeatPassword: Yup.string()
      // .required("Confirm password is required")
      .oneOf([Yup.ref('password')]),
  
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword:'',
    },
    onSubmit: values => {
      console.log(formik.values)
    },
    validationSchema: SignupSchema
  });



  return (
    <div  className='container'>
      
        <div className="form-wrapper">
          
          <form className="signup-form" onSubmit={formik.handleSubmit} style={{position:'relative'}}>
            <h1>Create Account</h1>
            <div className="social-media">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <p>or use your email for registration</p>
            <div className="input-group">
              {formik.errors.name && <p className='err'>{formik.errors.name}</p>}
              <i className="fas fa-user"></i>
              <input name='name' type="text" placeholder="Name" className='relativ'
              onChange={formik.handleChange}
              value={formik.values.name}
              />
            </div>
  
            <div className="input-group">
              {formik.errors.email && <p className='err'>{formik.errors.email}</p>}
              <i className="fas fa-envelope"></i>
              <input name='email' type="email" placeholder="Email" className='relativ'
              onChange={formik.handleChange}
              value={formik.values.email}
              />
            </div>
            <div className="input-group">
              {formik.errors.password && <p className='err'>{formik.errors.password}</p>}
              <i className="fas fa-lock"></i>
              <input name='password' type="password" placeholder="Password" className='relativ'
              onChange={formik.handleChange}
              value={formik.values.password}
              />
            </div>
            <div className="input-group">
              {formik.errors.repeatPassword && <p className='err'>Password doesn't match</p>}
              <i className="fas fa-lock"></i>
              <input name='repeatPassword' type="password" placeholder="Confirm password" className='relativ'
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              />
            </div>
            <button  type="submit" >Sign Up</button>
          </form>
        </div>
      </div>
  );
}
