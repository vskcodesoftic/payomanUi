import React from 'react'
import Head from 'next/head'

export const ProfilePage = () => {
 
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

       <div>
    
    <div class="navbar-sec p-1">
        <div class="container mt-2 mb-2">
            <div class="row">
                <div class="col-md-12 nav-link-new font-weight-bold">
                <a href="Sidebar"><i class="fa fa-arrow-left mr-3"></i></a>
                    Profile
                </div>
            </div>
        </div>
    </div>  
  
    <div>
        <div class="container ">
           <div class="row">
               <div class="col-md-12">
                   
                   <form action=" " class="mt-3 ">
                    <div class="preview-img text-center  " data-holder-rendered="true">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" alt="" class="rounded-circle z-depth-2 img-fluid " width="200" />
                    </div>
                       <div class="form form-group mt-3">
                          <input type="file" class="form-control input-box" />
                       </div>
                       <div class="form-group">
                           <label for="" clas=""> Name </label>
                          <input type="text" class="form-control input-box" id="fname" placeholder="" name="fname" />
                       </div>
                       <div class="form-group">
                        <label for="" clas=""> Business Name </label>
                            <input type="text" class="form-control input-box" id="businessname" placeholder="" name="businessnamemail" />
                       </div> 
                       <div class="form-group">
                        <label for="" clas=""> Phone </label>
                          <input type="text" class="form-control input-box" id="phone" placeholder="" name="Phone" />
                       </div> 
                       <div class="form-group">
                        <label for="" clas=""> Email </label>
                            <input type="email" class="form-control input-box" id="email" placeholder="" name="email" />
                       </div> 
                   
                     <input type="submit" class="submit-btn form-control success-btn" value="Save" placeholder="Save" />
                  </form>
               </div>
           </div>
        </div>
    </div>
   

       </div>
  </div>
    )
}

export default ProfilePage;