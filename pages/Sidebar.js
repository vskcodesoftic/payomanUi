import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function SideBarPage() {
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
     
        }
    
        const openNav = () => {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "250px";
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

      <div id="mySidebar" class="sidebar">
    <div class="mb-2">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}><i class="fa fa-arrow-left mr-2 ml-2"></i> Dashboard</a>
    </div>
    <div class="row logo-raw code-scaner-container mb-4">
        <div class="col-md-12">
           <div class="col-md-12 text-center logo-column-2 pt-3">
               <img src="images/logo.svg" alt="" />
           </div>
        </div>
        <div class="col-md-12">
            <div class="col-md-12 text-center logo-column">
                <img src="images/qrcode.png" alt="" class="img-fluid" />
           </div>
        </div>
    </div>
    <div class="links ">
        <div class="container "> 
            <div class="row">
               <div class="col-md-12 mt-4">
                <div class=" " id="collapsibleNavbar">
                    <ul class="navbar-nav">
                      <li class="nav-item mt-3 ">
                        <Link href="/"><a class="nav-link active " ><i class="fas fa-home mr-3"></i> Dashboard <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li class="nav-item mt-3">
                      <Link href="/Profile"><a class="nav-link" ><i class="fas fa-user mr-3"></i> Profile <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li class="nav-item mt-3">
                      <Link href="/BankDetail"><a class="nav-link"><i class="fas fa-bank mr-3"></i> Bank Details <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                       
                      <li class="nav-item mt-3">
                      <Link href="/ReceivedAmount"><a class="nav-link" ><i class="fas fa-money mr-3"></i> Received Amounts <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li class="nav-item mt-3">
                      <Link href="/ChangePassword"><a class="nav-link" ><i class="fas fa-key mr-3"></i> Change Password <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li>    
                      <li class="nav-item mt-3">
                      <Link href="/Privacy"><a class="nav-link" ><i class="fas fa-lock mr-3"></i> Privacy and Security <i class="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li class="nav-item mt-3">
                      <Link href="/Support"><a class="nav-link" ><i class="fas fa-headphones mr-3"></i> Support <i class="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                    <li class="nav-item mt-3">
                    <Link href="/"><a class="nav-link" href="#"><i class="fas fa-user mr-3"></i> Logout  <i class="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                    <li class="nav-item mt-3">
                        <hr class="float-left" />
                        <p class="text-center">@Copyright PayOman , Design And Develeope By <span >Codesoftic Tech PVT LTD.</span></p>
                    </li>
                    </ul>
                  </div>
               </div>
            </div>
        </div>
    </div>
</div>



    
                <div id="main">
                    <div class="openbtn" onClick={openNav} >☰ &nbsp;&nbsp;Dashboard</div>  
                    <div class="container">
                       <div class="row">
                          <div class='col-md-12'>
                              <div class="wallet-card text-white mt-3 text-center pb-5">
                                  <p class="pt-3 pb-5 ">Wallet</p>
                                  <h6>Error OMR</h6>
                              </div>
                          </div>
                       </div>
                       <div class="row text-center mt-5" >
                       <div class="col-md-12">
                          <button class="received-money-button pt-1 pb-1 pr-3 pl-3">Received Transection</button>
                      </div>
                  </div>

                </div>
       
   <div class="container">
     <div class="row row pt-3 pb-3 mt-3" >
        <div class="col-sm-12">
           <p class="float-left"><i class='fa fa-check-circle fa-lg'> Received to </i></p>
           <p class="text-right" >$312</p>    
        </div>
        <div class="col-sm-12">
          <p class="float-left">ABC Company</p>
       </div>
       <div class="col-sm-12">
          <p class="float-left">03-09-2021 | 11:10 AM</p>
          <p class="text-right" >+91 8579213649</p>    
       </div>
     </div>

     <div class="row row pt-3 pb-3 mt-3" >
        <div class="col-sm-12">
          <p class="float-left"><i class='fa fa-check-circle fa-lg'> Received to </i></p>
          <p class="text-right" >$312</p>    
        </div>
        <div class="col-sm-12">
          <p class="float-left">ABC Company</p>
       </div>
       <div class="col-sm-12">
         <p class="float-left">03-09-2021 | 11:10 AM</p>
         <p class="text-right" >+91 8579213649</p>    
       </div>
      </div>

      <div class="row row pt-3 pb-3 mt-3" >
        <div class="col-sm-12">
          <p class="float-left"><i class='fa fa-check-circle fa-lg'> Received to </i></p>
          <p class="text-right" >$312</p>    
        </div>
        <div class="col-sm-12">
          <p class="float-left">ABC Company</p>
       </div>
       <div class="col-sm-12">
         <p class="float-left">03-09-2021 | 11:10 AM</p>
         <p class="text-right" >+91 8579213649</p>    
       </div>
      </div>

      <div class="row row pt-3 pb-3 mt-3" >
        <div class="col-sm-12">
          <p class="float-left"><i class='fa fa-check-circle fa-lg'> Received to </i></p>
          <p class="text-right" >$312</p>    
        </div>
        <div class="col-sm-12">
          <p class="float-left">ABC Company</p>
       </div>
       <div class="col-sm-12">
         <p class="float-left">03-09-2021 | 11:10 AM</p>
         <p class="text-right" >+91 8579213649</p>    
       </div>
      </div>
      
    </div>
  </div> 
</main>
    </div>
  )
}
