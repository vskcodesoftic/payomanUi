import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function SignupPage() {
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
      <div class="nav">
        <div class="container mt-2 mb-2">
            <div class="row">
                <div class="col-md-12 nav-link text-white">
                <a href="Sidebar"><i class="fa fa-arrow-left mr-3" /></a>
                    Sign Up
                </div>
            </div>
        </div>
    </div>

    <div class="container signup-container">
       <div class="row">
          <div class="col-md-12">
            <form action="/action_page.php " class="mt-3">
                <div class="form-group">
                    <input type="text" class="form-control input-box" id="fname" placeholder="Full Name" name="fname" />
               </div>
               <div class="form-group">
                    <input type="text" class="form-control input-box" id="businessname" placeholder="Business name" name="businessnamemail" />
               </div> 
               <div class="form-group">
                <select name="omr" id="" class="form-control input-box">
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
               <div class="form-group">
                 <input type="text" class="form-control input-box" id="phone" placeholder="Phone" name="Phone" />
               </div> 
               <div class="form-group">
                 <input type="email" class="form-control input-box" id="email" placeholder="Email" name="email" />
               </div> 
               <div class="form-group">
                 <input type="password" class="form-control input-box" id="password" placeholder="Password" name="password" />
               </div> 
               <div class="form-group">
                 <input type="password" class="form-control input-box" id="cpassword" placeholder="Re-type Password" name="cpassword" />
               </div> 
               <div class="form-group form-check ">
                <label class="form-check-label mb-3">
                  <input class="form-check-input" type="checkbox" />  I Agree to the <a href=""><u>Terms and conditions</u></a>
                </label>
              </div>
               <div class="form-group">
                   <input type="submit" class="form-control success-btn"  value="Register" placeholder="Sing in" />
               </div>
            </form>
          </div>
       </div>
    </div>
</main>
    </div>
  )
}
