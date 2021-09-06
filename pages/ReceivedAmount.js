import React from 'react'
import Head from 'next/head'

export const ReceviedAmount = () => {
 
   const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
 
    }

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
   

    return (
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

            </Head>
  

    <div class="navbar-sec p-1 ">
        <div class="container mt-2 mb-2">
            <div class="row">
                <div class="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar"><i class="fa fa-arrow-left mr-3"></i></a>
                    Received Amount
                </div>
            </div>
        </div>
    </div>  

    <div class="container">
        <div class="row text-center mt-5" >
            <div class="col-md-12 mb-4">
               <button class="received-money-button pt-1 pb-1 pr-3 pl-3">Receivd Transection</button>
           </div>
       </div>
        <div class="row  pt-3 pb-3 mt-3" >
           <div class="col-sm-12">
              <p class="float-left"><i class='fa fa-check-circle fa-lg'> Received to </i></p>
              <p class="text-right"> $312</p>    
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
             <p class="text-right"> $312</p>    
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
        

    )
}

export default ReceviedAmount;