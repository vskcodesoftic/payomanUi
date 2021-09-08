import Head from 'next/head'
import { useState , useRef } from 'react';

import { useRouter } from 'next/router'

import { signIn } from 'next-auth/client';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthForm = () => {
    const emailInputRef = useRef('')
    const passwordInputRef = useRef('')
  
    const [isLogin, setIsLogin] = useState(true);
    
     const router = useRouter()
  
    async function submitHandler(event){
        event.preventDefault();
     
       const enteredEmail = emailInputRef.current.value;
       const entredPassword = passwordInputRef.current.value ;
     
       //optional  add validtion
     
       
          //log user in
       const result = await signIn('credentials' , {
            redirect :false,
            email : enteredEmail,
            password : entredPassword
          });
     

          if(!result.error){
            toast.success(`Login sucessfull`)

            router.replace('/dashboard');
          }
      
          if(result.error){
            toast.warn(`Login failed ${result.error}`)
             return;
          }
          console.log(result)
        
      }
     
    return (
        <div>
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
      <div className="banner" >
      <div className="container">
          <div className="row">
              <div className="col-md-12 flex justify-center mt-3">
                   <img src="images/logo.svg" alt="" />
              </div>
          </div>
      </div>
   </div> 
   <ToastContainer />
   <div className="container forn-container " > 
       <form  className="form-sec p-3 mt-3" onSubmit={submitHandler}>
           <h4 className="text-center mb-4">SIGN IN</h4>
           <div className="form-group">
               <input type="email" className="form-control input-box" id="email" placeholder="Email" ref={emailInputRef} />
          </div>
          <div className="form-group">
               <input type="password" className="form-control input-box" id="pwd" placeholder="Password" ref={passwordInputRef} />
          </div> 
          <div className="form-group">
              <input type="submit" className="form-control success-btn"  value="Sign in" placeholder="Sing in" />
          </div>
          <p className="text-center mb-4 mt-5  forgot-sec"><a href="forgotpassword.html">Forgot Password ?</a></p>
          <div className="signup-btn text-center">
              <button className="btn btn-link"><a href="/signup">Sign Up</a></button>
          </div>
       </form>
   </div>
      </main>
    </div>
 
        </div>
    )
}



export  default  AuthForm;