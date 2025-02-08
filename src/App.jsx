// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Form from './components/Form'
// import { useState } from 'react'
// import Carousel from './components/Carousel'
// import Message from './components/Message.jsx'

// function App() {

//   const[displayForm,changeDisplayValue] = useState(true);
//   function formHandler(){
//     changeDisplayValue(!displayForm);
//   }
//   return (
//     <div className="wrapper w-screen">  
//       <button className=" fixed rotate-[270deg] bg-beige-800 rounded-md font-semibold py-2 px-4 -right-8 bottom-[45%] text-white" onClick={formHandler} >Admission Enquiry</button>
//       <div className=''>
//         <Message/>  
//       </div>
//       <div className='sticky top-0'>
//         <Navbar />
//       </div>
//       <div className="-z-20">
//         <Carousel/>
//       </div>
//       <div className='fixed top-0'>
//         <Form displayForm = {displayForm} changeDisplayValue = {changeDisplayValue} formHandler = {formHandler}/>
//       </div>
//       <Routes>
//         <Route path='/' />
//       </Routes>
//       <Home/>
//     </div>
//   )
// }

// export default App


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home.jsx'
import Form from './components/Form';
import { useState } from 'react';
import Carousel from './components/Carousel';
import Message from './components/Message.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function App() {

  const [displayForm, changeDisplayValue] = useState(true);

  function formHandler() {
    changeDisplayValue(!displayForm);
  }

  return (
    <div className="wrapper w-screen min-h-screen">
      {/* Admission Enquiry Button */}
      <button 
        className="fixed rotate-[270deg] block xl:hidden bg-beige-800 rounded-md font-semibold py-2 px-4 -right-10 bottom-[20%] sm:-right-3 sm:bottom-[25%] md:-right-3 md:bottom-[30%] text-white transition-all ease-in-out duration-300 z-[20]"
        onClick={formHandler}
      >
        Admission Enquiry
      </button>
      
      {/* Message Component */}
      <div className=''>
        <Message />
      </div>
      
      {/* Navbar */}
      <div className='sticky top-0 z-[1]'>
        <Navbar formHandler={formHandler} />
      </div>

      {/* Form Component */}
      <div className='fixed top-0 z-20'>
        <Form displayForm={displayForm} changeDisplayValue={changeDisplayValue} formHandler={formHandler} />
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      {/* <Home /> */}
      {/* <div>
        <About/>
      </div> */}
    </div>
  );
}

export default App;



// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Form from './components/Form';
// import { useState } from 'react';
// import Message from './components/Message';

// function App() {
//   const [displayForm, setDisplayForm] = useState(false);

//   return (
//     <div className="wrapper min-w-screen min-h-screen relative overflow-x-hidden">
//       {/* Admission Enquiry Button */}
//       <button 
//         className="fixed rotate-[-90deg] bg-beige-800 rounded-md font-semibold py-2 px-4 right-4 bottom-20 text-white transition-all ease-in-out duration-300 z-20"
//         onClick={() => setDisplayForm(!displayForm)}
//       >
//         Admission Enquiry
//       </button>
      
//       <Message />

//       <div className='sticky top-0'>
//         <Navbar />
//       </div>

//       <div className='fixed top-0 z-[70]'>
//         <Form displayForm={displayForm} setDisplayForm={setDisplayForm} />
//       </div>
      
//       <Routes>
//         <Route path='/' element={<Home />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
