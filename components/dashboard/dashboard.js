import React from 'react'
import Head from 'next/head'
import { useState , useRef } from 'react';

import { useRouter } from 'next/router'

import { signIn , useSession , signOut} from 'next-auth/client';
import Link from 'next/link';

export const Dashboard = () => {
    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
     
        }
    
        const openNav = () => {
            document.getElementById("mySidebar").style.width = "100%";
            document.getElementById("main").style.marginLeft = "250px";
          }
          
          const logOutHandler = async () => {
            signOut();
         }
    
         const [session , loading ] = useSession()    
    return (
        <div>
                  <div>
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

       <div>

             <div id="main">
                    <div className="openbtn" onClick={openNav} >☰ &nbsp;&nbsp;Dashboard</div>  
                    <div className="container">
                       <div className="row">
                          <div className='col-md-12'>
                              <div className="wallet-card text-white mt-3 text-center pb-5">
                                  <p className="pt-3 pb-5 ">Wallet</p>
                                  <h6>Error OMR</h6>
                              </div>
                          </div>
                       </div>
                       <div className="row text-center mt-5" >
                       <div className="col-md-12">
                          <button className="received-money-button pt-1 pb-1 pr-3 pl-3">Received Transection</button>
                      </div>
                  </div>
                  <div className="row text-center mt-5">
                     
                 </div>
                </div>
 
   <div className="container">
     <div className="row row pt-3 pb-3 mt-3" >
        <div className="col-sm-12">
           <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
           <p className="text-right">$312</p>    
        </div>
        <div className="col-sm-12">
          <p className="float-left">ABC Company</p>
       </div>
       <div className="col-sm-12">
          <p className="float-left">03-09-2021 | 11:10 AM</p>
          <p className="text-right" >+91 8579213649</p>    
       </div>
     </div>

     <div className="row row pt-3 pb-3 mt-3" >
        <div className="col-sm-12">
          <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
          <p className="text-right">$312</p>    
        </div>
        <div className="col-sm-12">
          <p className="float-left">ABC Company</p>
       </div>
       <div className="col-sm-12">
         <p className="float-left">03-09-2021 | 11:10 AM</p>
         <p className="text-right" >+91 8579213649</p>    
       </div>
      </div>

      <div className="row row pt-3 pb-3 mt-3" >
        <div className="col-sm-12">
          <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
          <p className="text-right">$312</p>    
        </div>
        <div className="col-sm-12">
          <p className="float-left">ABC Company</p>
       </div>
       <div className="col-sm-12">
         <p className="float-left">03-09-2021 | 11:10 AM</p>
         <p className="text-right" >+91 8579213649</p>    
       </div>
      </div>

      <div className="row row pt-3 pb-3 mt-3" >
        <div className="col-sm-12">
          <p className="float-left"><i className='fa fa-check-circle fa-lg'> Received to </i></p>
          <p className="text-right">$312</p>    
        </div>
        <div className="col-sm-12">
          <p className="float-left">ABC Company</p>
       </div>
       <div className="col-sm-12">
         <p className="float-left">03-09-2021 | 11:10 AM</p>
         <p className="text-right" >+91 8579213649</p>    
       </div>
      </div>
      
    </div>
  </div> 

     
  <div id="mySidebar" className="sidebar">
    <div className="mb-2">
        <a href="#" className="closebtn" onClick={closeNav}><i className="fa fa-arrow-left mr-2 ml-2"></i> Dashboard</a>
    </div>
    <div className="row logo-raw code-scaner-container mb-4">
        <div className="col-md-12">
           <div className="col-md-12 text-center logo-column-2 pt-3">
               <img src="images/logo.svg" alt=" " />
           </div>
        </div>
        <div className="col-md-12">
            <div className="col-md-12 text-center logo-column">
                <img src="images/qrcode.png" alt="" className="img-fluid" />
           </div>
        </div>
    </div>
    <div className="links ">
        <div className="container "> 
            <div className="row">
               <div className="col-md-12 mt-4">
                <div className=" " id="collapsibleNavbar">
                <ul className="navbar-nav">
                      <li className="nav-item mt-3 ">
                        <Link href="/"><a className="nav-link active " ><i className="fas fa-home mr-3"></i> Dashboard <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li className="nav-item mt-3">
                      <Link href="/Profile"><a className="nav-link" ><i className="fas fa-user mr-3"></i> Profile <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>
                      <li className="nav-item mt-3">
                      <Link href="/BankDetail"><a className="nav-link"><i className="fas fa-bank mr-3"></i> Bank Details <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                       
                      <li className="nav-item mt-3">
                      <Link href="/ReceivedAmount"><a className="nav-link" ><i className="fas fa-money mr-3"></i> Received Amounts <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li className="nav-item mt-3">
                      <Link href="/ChangePassword"><a className="nav-link" ><i className="fas fa-key mr-3"></i> Change Password <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li>    
                      <li className="nav-item mt-3">
                      <Link href="/Privacy"><a className="nav-link" ><i className="fas fa-lock mr-3"></i> Privacy and Security <i className="fa fa-chevron-right float-right"></i></a></Link>
                      </li> 
                      <li className="nav-item mt-3">
                      <Link href="/Support"><a className="nav-link" ><i className="fas fa-headphones mr-3"></i> Support <i className="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                    {session && (
                    <li className="nav-item mt-3">
                    <Link href="/"><a className="nav-link"onClick={logOutHandler}><i className="fas fa-user mr-3"></i> Logout  <i className="fa fa-chevron-right float-right"></i></a></Link>
                    </li> 
                    )}
                    <li className="nav-item mt-3">
                        <hr className="float-left" />
                        <p className="text-center">@Copyright PayOman , Design And Develeope By <span >Codesoftic Tech PVT LTD.</span></p>
                    </li>
                    </ul>
                  </div>
               </div>
            </div>
        </div>
    </div>
</div>


       </div>
  </div>
    
        </div>
    )
}

export default Dashboard;