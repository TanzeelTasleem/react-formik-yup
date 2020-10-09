import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import FormStepper from'./components/stepper'
export default function App() {
  // const formik =useFormik({
  //   initialValues : {
  //     name :"",
  //     email : ""
  //   },
  //   onSubmit:(values)=>{
  //     console.log(values)
  //   },
  //   validationSchema: Yup.object({
  //     name : Yup.string()
  //            .required("name field is required")
  //            .max(20 , "20 alphabates limit"),
  //     email : Yup.string()
  //             .required("email is required")
  //             .email("enter valid email")
  //   })
    // validate:(values)=>{
    //     const error = {};
    //     if(!values.name){
    //       error.name = "input name field"
    //     }
    //     if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    //       error.email = "input email feild"
    //     }
    //     return error
    // }
  // })
  return (
    <div>
      <FormStepper/>
      {/* <Formik
       initialValues={{
         name : "",
         email : ""
       }}
       onSubmit ={(values)=>{
          console.log(values)
       }}
       validationSchema={
         Yup.object({
          name : Yup.string()
          .required("name field is required")
          .max(20 , "20 alphabates limit"),
           email : Yup.string()
           .required("email is required")
           .email("enter valid email")
         })
       }
      > 
      {
          (formik)=> (
            <Form>
                <Field  name ="name"/>
                <ErrorMessage name="name"/>
                <Field name="email"/>
                <ErrorMessage name="email"/>
                <button type="submit">submit</button>
            </Form>
          //   <form onSubmit={formik.handleSubmit}>
          //   <label>Name:</label>
          //  <input id="name" value={formik.values.name} onChange={formik.handleChange} type ="text"/>
          //     {formik.errors.name && <p>{formik.errors.name}</p>}
          //  <label>Email:</label>
          //  <input id="email" {...formik.getFieldProps("email")} type ="text"/>
          //      {formik.errors.email && <p>{formik.errors.email}</p>}
          //  <button type="submit">submit</button>
          // </form>
          )
      }

      </Formik> */}
    </div>
  );
}
