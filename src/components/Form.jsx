import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { RxCross2 } from "react-icons/rx";
import './Form.css'
import { toast } from 'react-hot-toast';
// import { ToastBar } from 'react-hot-toast';

const Form = (props) => {
  const[enquiryData,setEnquiryData] = useState({
    fullName : "",
    email : "",
    contact : "",
    message : ""
  })

  const [error,setError] =useState({})

  const validationSchema = Yup.object({
    fullName : Yup.string().required("Full name is Required"),
    email : Yup.string().required("Email is required").email("Invalid email format"),
    contact : Yup.string("Only numbers required").matches(/^\d{10}$/,"Phone number must be 10 digits").required("Number is required")
  })

  function changeHandler(e){
    const {name,value}= e.target;
    setEnquiryData({...enquiryData,[name]:value})

    if (error[name]) {
      setError({ ...error, [name]: undefined });
    }
  }

  async function submitHandler(e){
    e.preventDefault()
    try {
      await validationSchema.validate(enquiryData,{abortEarly:false})
      // toast.success("Form Submitted")
      toast.success("Form Submitted")
      console.log("Form Submitted",enquiryData);
      props.changeDisplayValue(!props.displayForm)
      setEnquiryData({fullName:"",email:"",contact:"",message:""})
      props.formHandler()

    } catch (error) {
      // console.log(error.inner);
      const newErrors ={}
      error.inner.forEach((err)=>{  
        newErrors[err.path] =`${err.message}`;
      })
      setError(newErrors)
      toast.error("Error in submitting Form")
    }
  }

  

  return (
    <div className={`form-wrapper bg-black/[60%] overlay flex h-full w-full justify-center items-center transition-transform ${props.displayForm ? "scale-100" : " scale-0"} `}>
      <div className="form-component w-[350px] p-6 min-h-[450px] bg-beige-100 relative rounded-[1rem] c overflow-hidden ">
        <div className='triangle '></div>
        <div className='flex items-center justify-between mb-4 z-10 mt-8'>
          <h2 className='text-center w-[100%] font-bold text-2xl z-10'>Admission Enquiry ?</h2>
          <RxCross2 className='text-2xl z-10 cursor-pointer' onClick={() => props.formHandler()}/>
        </div>
        <p className='text-center'>Discuss about Course & Fee Structure</p>

        <form className='flex flex-col justify-between items-center w-[100%] min-h-[320px] mt-[1rem] z-50 gap-y-4 ' action="" onSubmit={submitHandler}>
          <div className='firstName w-full z-10'>
            <input className='w-full p-2 ' type="text" name='fullName' value={enquiryData.fullName} placeholder='Enter Your Name' onChange={changeHandler} />
            {error.fullName&& <div className="error">{error.fullName}</div> }
          </div>

          <div className='email w-full z-10'>
            <input className='w-full p-2 ' type="email" name="email" id="email" value={enquiryData.email} placeholder='Enter Your E-mail' onChange={changeHandler} />
            {error.email&& <div className="error">{error.email}</div> }
          </div>
          <div className="contact w-full z-10">
            <input className='w-full p-2 ' type="text" name="contact" id="contact" value={enquiryData.contact} placeholder='Enter Your Mobile Number' onChange={changeHandler} />
            {error.contact&& <div className="error">{error.contact}</div> }
          </div>
          <div className="text-section w-full">
            <textarea name="message" id="message"placeholder='Leave Your Message' value={enquiryData.message} onChange={changeHandler} className='w-full p-2'></textarea>
          </div>
          <div className='w-full flex justify-center z-10'>
            <button className=' mt-6 bg-transparent hover:bg-red-900 text-red-950 font-semibold hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded'>Get a Call Back!</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form




// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { RxCross2 } from "react-icons/rx";

// const Form = ({ displayForm, setDisplayForm }) => {
//   const [enquiryData, setEnquiryData] = useState({ fullName: "", email: "", contact: "" });
//   const [errors, setErrors] = useState({});

//   const validationSchema = Yup.object({
//     fullName: Yup.string().required("Full name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     contact: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Number is required"),
//   });

//   const handleChange = (e) => {
//     setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
//     if (errors[e.target.name]) {
//       setErrors({ ...errors, [e.target.name]: undefined });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await validationSchema.validate(enquiryData, { abortEarly: false });
//       console.log("Form Submitted", enquiryData);
//       setDisplayForm(false);
//     } catch (error) {
//       const newErrors = {};
//       error.inner.forEach((err) => {
//         newErrors[err.path] = `*${err.message}`;
//       });
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-position ${displayForm ? "auto" : "hidden"}`}>
//       <div className="bg-beige-100 p-6 rounded-lg shadow-md w-80 font-semibold">
//         <div className='flex justify-between items-center'>
//           <h2 className='text-2xl font-bold'>Admission Enquiry</h2>
//           <RxCross2 className='cursor-pointer text-2xl' onClick={() => setDisplayForm(false)} />
//         </div>
//         <form onSubmit={handleSubmit} className={`flex flex-col justify-between gap-y-4 min-h-[320px] transition-transform ${displayForm ? "scale-100" : "scale-0"}`}>
//           <input type="text" name='fullName' placeholder='Full Name' className='w-full p-2 border' onChange={handleChange} />
//           {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName}</p>}
//           <input type="email" name='email' placeholder='Email' className='w-full p-2 border' onChange={handleChange} />
//           {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
//           <input type="text" name='contact' placeholder='Contact' className='w-full p-2 border' onChange={handleChange} />
//           {errors.contact && <p className='text-red-500 text-sm'>{errors.contact}</p>}
//           <button type='submit' className='bg-blue-500 text-white w-full py-2 rounded'>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
