import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
      <div className="banner" >
      <div className="container">
          <div className="row">
              <div className="col-md-12 flex justify-center mt-3">
                   <img src="images/logo.svg" alt="" />
              </div>
          </div>
      </div>
   </div> 
   <div className="container forn-container " > 
       <form action="sidebar.html" className="form-sec p-3 mt-3">
           <h4 className="text-center mb-4">SIGN IN</h4>
           <div className="form-group">
               <input type="email" className="form-control input-box" id="email" placeholder="Email" name="email" />
          </div>
          <div className="form-group">
               <input type="password" className="form-control input-box" id="pwd" placeholder="Password" name="pswd" />
          </div> 
          <div className="form-group">
              <input type="submit" className="form-control success-btn"  value="Sign in" placeholder="Sing in" />
          </div>
          <p className="text-center mb-4 mt-5  forgot-sec"><a href="forgotpassword.html">Forgot Password ?</a></p>
          <div className="signup-btn text-center">
              <button className="btn btn-link"><a href="signup.html">Sign Up</a></button>
          </div>
       </form>
   </div>
      </main>
    </div>
  )
}
