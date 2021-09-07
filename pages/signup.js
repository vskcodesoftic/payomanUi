import { useRef } from 'react';

import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { signIn } from 'next-auth/client';
async function createUser(fullname, businessname, countrycode, phonenumber, email , password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({fullname, businessname, countrycode, phonenumber, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    toast.warn(`signup failed ${data.message}`);
    throw new Error(data.message || 'Something went wrong!');
  }

  toast.success("signup sucessfull");

  return data;
}

function signupPage() {
  const emailInputRef = useRef('')
  const passwordInputRef = useRef('')
  const fullNameInputRef = useRef('')
  const countrycodeInputRef = useRef('')
  const phoneInputRef = useRef('')
  const businessNameInputRef = useRef('')
  const retypepasswordInputRef = useRef('')

   const router = useRouter()


  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

 async function submitHandler(event){
   event.preventDefault();

  const enteredEmail = emailInputRef.current.value;
  const entredPassword = passwordInputRef.current.value ;
  const entredFullname = fullNameInputRef.current.value;
  const entredPhoneNumber = phoneInputRef.current.value;
  const enteredBusinessName = businessNameInputRef.current.value;
  const enteredcuntryCode = countrycodeInputRef.current.value;
  const entredretypepassword = retypepasswordInputRef.current.value;


  if (entredPassword !== entredretypepassword) {

    toast.warn("Passwords don't match");
    return;
  }

  //optional  add validtion

  
     try {
    const result = await  createUser(entredFullname,enteredBusinessName , enteredcuntryCode, entredPhoneNumber ,enteredEmail , entredPassword);
    console.log(result)
     }catch(err){
      console.log(err)
     }
   
 }




  return (
    <div >
      <Head>
        <title>Payoman</title>
        <meta name="description" content="Siva" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
       
       
      </Head>

      <main>
      <div className="nav">
        <div className="container mt-2 mb-2">
            <div className="row">
                <div className="col-md-12 nav-link text-white">
                <a href="Sidebar"><i className="fa fa-arrow-left mr-3" /></a>
                    Sign Up
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />

    <div className="container signup-container">
       <div className="row">
          <div className="col-md-12">
          <form onSubmit={submitHandler}>     
                     <div className="form-group">
                    <input type="text" className="form-control input-box" id="fname" placeholder="Full Name" ref={fullNameInputRef} />
               </div>
               <div className="form-group">
                    <input type="text" className="form-control input-box" id="businessname" placeholder="Business name"  ref={businessNameInputRef} />
               </div> 
               <div className="form-group">
                <select name="omr" id="" className="form-control input-box"ref={countrycodeInputRef} >
                   <option value="OMR(+968)">OMR(+968)</option>
                   <option value="AF(+93)">AF(+93)</option>
                   <option value="AX(+358)">AX(+358)</option>
                   <option value="AO(+244)">AO(+244)</option>
                   <option value="AG(+1268)">AG(+1268)</option>
                   <option value="AR(+54)">AR(+54)</option>
                   <option value="AM(+374)">AM(+374)</option>
                   <option value="AZ(+297)">AZ(+297)</option>
                   <option value="BD(+880)">BD(+880</option>
                   <option value="OMR(+968)">OMR(+968)</option>
                   <option value="AF(+93)">AF(+93)</option>
                   <option value="AX(+358)">AX(+358)</option>
                   <option value="AO(+244)">AO(+244)</option>
                   <option value="AG(+1268)">AG(+1268)</option>
                   <option value="AR(+54)">AR(+54)</option>
                   <option value="AM(+374)">AM(+374)</option>
                   <option value="AZ(+297)">AZ(+297)</option>
                   <option value="BD(+880)">BD(+880</option>
                </select>
          </div> 
               <div className="form-group">
                 <input type="text" className="form-control input-box" id="phone" placeholder="Phone" ref={phoneInputRef} />
               </div> 
               <div className="form-group">
               <input type='email'  className="form-control input-box" id='email' ref={emailInputRef} placeholder="email" required />
               </div> 
               <div className="form-group">
               <input type='password'  className="form-control input-box" id='password' ref={passwordInputRef}  placeholder="password" required />
               </div> 
               <div className="form-group">
                 <input type="password" className="form-control input-box" id="cpassword" ref={retypepasswordInputRef} placeholder="Re-type Password" name="cpassword" />
               </div> 
               <div className="form-group form-check ">
                <label className="form-check-label mb-3">
                  <input className="form-check-input" type="checkbox" />  I Agree to the <a href=""><u>Terms and conditions</u></a>
                </label>
              </div>
               <div className="form-group">
                   <button  className="form-control"  > Submit </button>
               </div>
            </form>
          </div>
       </div>
    </div>
</main>
    </div>
  )
}

export default signupPage;