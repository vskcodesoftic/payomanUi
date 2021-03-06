import React from 'react'
import Head from 'next/head'

export const SupportPageComponent = () => {
 
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

                        <div classNameName="navbar-sec p-1" >
        <div classNameName="container mt-2 mb-2">
            <div className="row">
                <div className="col-md-12 nav-link-new font-weight-bold">
                    <a href="Sidebar"><i className="fa fa-arrow-left mr-3"></i></a>
                    Support
                </div>
            </div>
        </div>
    </div>  


    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">
              <img src="images/logo.svg" alt=""  />
              <p  className="support-content"> Payoman is simply Dummy of the printing and typesetting industry . Payoman as been the industry's standards dummy text ever since the 2011, When an unknown print took a gallery of type andn text it to make a type specimen book . It has survived not only fiv centuries.</p>
            </div>
        </div>
      
           <div className="row  mt-3">
               <div className="col-md-12">
                   <div className=" mt-5 company-list">
                            <h6 className="" >Company</h6>
                            <hr className="float-left" />
                        <ul> 
                          <div className="mt-5"><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;About Us</a></div>
                          <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Contact Us</a></div>
                          <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Privacy Policy</a></div>
                          <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Support</a></div>
                          <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Terms & Condition</a></div>
                          <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Disclaimer</a></div>
                      </ul>
                   </div>
               </div>
           </div>

           <div className="row  mt-3">
               <div className="col-md-12">
                   <div className=" mt-5 company-list">
                              <h6 className="" >Social Links</h6>
                              <hr  className="float-left" />
                        <ul>
                           <div className="mt-5"><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Facebook</a></div>
                           <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Twitter</a></div>
                           <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Linkedin</a></div>
                           <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Pinterest</a></div>
                           <div><a href=""><i className="fa fa-circle fa-sm" ></i> &nbsp;&nbsp;Instagram</a></div>
                       </ul>
                   </div>
               </div>
           </div>

           <div className="row mt-5 mb-5">
              <div className="col-md-12 company-list">
                  <h6 className="">Contact</h6>
                  <hr />
                  <div className="mt-5"><a href=""><i className="fa fa-phone fa-sm" ></i> &nbsp;&nbsp;+8572134697</a></div>
                  <div><a href=""><i className="fa fa-envelope fa-sm" ></i> &nbsp;&nbsp;dummyinf@gmail.com</a></div>
              </div>
           </div>
           <div className="row">
              <div className="col-md-12">
                <hr className="float-left" />
                <p className="text-center">@Copyright PayOman , Design And Develeope By <span>Codesoftic Tech PVT LTD.</span></p>
              </div>
           </div>
        
     </div>
  </div>
    )
}

export default SupportPageComponent;