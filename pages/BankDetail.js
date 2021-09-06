import React from 'react'
import Head from 'next/head'

export const BankDetailPage = () => {
 
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

    <div class="navbar-sec p-1">
        <div class="container mt-2 mb-2">
            <div class="row">
                <div class="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar"><i class="fa fa-arrow-left mr-3"></i></a>
                    Bank Details
                </div>
            </div>
        </div>
    </div>  

    <div>
        <div class="container ">
           <div class="row">
               <div class="col-md-12">
                   
                   <form action=" " class="mt-5 ">
                       <div class="form-group">
                           <label for="" clas=""> Bank Name </label>
                          <input type="text" class="form-control input-box" id="bname" placeholder="" name="bankname" />
                       </div>
                       <div class="form-group">
                        <label for="" clas=""> Swift Code </label>
                            <input type="text" class="form-control input-box" id="businessname" placeholder="" name="businessnamemail" />
                       </div> 
                       <div class="form-group">
                        <label for="" clas=""> Account Number </label>
                          <input type="text" class="form-control input-box" id="phone" placeholder="" name="Phone" />
                       </div> 
                       <div class="form-group">
                     <input type="submit" class="submit-btn form-control success-btn" value="Save" placeholder="Save" />
                       </div>
                  </form>
               </div>
           </div>
        </div>
    </div>
   </div>
        

    )
}

export default BankDetailPage;