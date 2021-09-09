import React, {useState, useRef , useEffect} from 'react';

import Head from 'next/head'

import { getSession, useSession } from 'next-auth/client';

import axios from 'axios';

import {useForm} from 'react-hook-form';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProfileComponent = (props) => {
const baseUrl = "http://localhost:8001"
  const userEmailIdentity = props.userEmailId ; 
 
  const userProfileData = props.profileData;
 
  let bankName = userProfileData.bankName;
  let businessName =userProfileData.businessName ;
  let countryCode = userProfileData.countryCode;
  let useremail = userProfileData.email;
  let usermessage = userProfileData.message ;
  let userfullname = userProfileData.name;
  let phoneNumber = userProfileData.phoneNumber ;
  let profilePic = userProfileData.profilePic;
  let useraccountNumber = userProfileData.accountNumber;
 let userswiftCode = userProfileData.swiftCode;


  const {register, handleSubmit } = useForm({defaultValues:
     { 
       accountNumber : `${useraccountNumber}`,
        bankName  :`${bankName}`,
        businessName : `${businessName}`,
        countryCode : `${countryCode}`,
        name :`${userfullname}`,
        swiftCode :`${userswiftCode}`

    }});
  const fileInput = useRef('');





    async function submitHandler(data){

      console.log(
        'onSubmitFn:',
        data,
        '  imageFile: ',
        fileInput.current.files[0].name
    );
    const fd = new FormData();
    for (var key in data) {
        fd.append(key, data[key]); // formdata doesn't take objects
    }

    fd.append(
        'image',
        fileInput.current.files[0],
        fileInput.current.files[0].name
    );
 
    fd.append('email',userEmailIdentity)

   

    axios
        .post('http://localhost:8001/api/merchant/profile', fd)
        .then((res) => {
            console.log(res.data);
            toast.success(`profile details added sucessfully !`);
            // setSpinner(false);
            // setredirect(true);
        })
        .catch((error) => {
            console.log(error);
            toast.error(
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                  'profile details updation Failed'
          );
        });
    
        
       
     }
    
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
  <ToastContainer />
    <div>
        <div class="container ">
           <div class="row">
               <div class="col-md-12">
                   
                   <form onSubmit={handleSubmit(submitHandler)} class="mt-3 ">
                    <div class="preview-img text-center  " data-holder-rendered="true">
                        <img src={`${baseUrl}/${userProfileData.profilePic}`} alt="" class="rounded-circle z-depth-2 img-fluid " width="200" height="300" />
                    </div>
                       <div class="form form-group mt-3">
                       <input
                                                required
                                                multiple
                                                 ref={fileInput}
                                                type="file"
                                                className="form-control"
                                                placeholder="Please choose Image"
                                            />
                       </div>
                       <div class="form-group">
                           <label for="" clas=""> Name  </label>
                          <input
                           type="text"
                           {...register('name', {
                            required: true
                            })}
                            // placeholder={profileData.name}
              
                            class="form-control input-box" 
                            id="fname" />
                       </div>
                       <div class="form-group">
                        <label for="" clas=""> Business Name </label>
                            <input type="text" 
                            {...register('businessName', {
                                required: true
                            })}
                            class="form-control input-box"
                             id="businessname" placeholder="" 
                              />

                       </div> 
              
                       <div class="form-group">
                        <label for="" clas=""> Account Number  </label>
                          <input type="text" 
                          {...register('accountNumber', {
                            required: true
                        })}
                          class="form-control 
                          input-box" id="phone"
                           placeholder=""  />
                       </div> 
                       <div class="form-group">
                        <label for="" clas=""> Bank Name </label>
                            <input type="text" 
                            {...register('bankName', {
                                required: true
                            })}
                            class="form-control input-box"
                             id="businessname" placeholder="" 
                              />

                       </div> 

                       <div class="form-group">
                        <label for="" clas=""> swift Code </label>
                          <input type="text" 
                          {...register('swiftCode', {
                            required: true
                        })}
                          class="form-control 
                          input-box" id="phone"
                           placeholder=""  />
                       </div> 

                       <div class="form-group">
                        <label for="" clas=""> Phone Number </label>
                          <input type="text" 
                          {...register('phoneNumber', {
                            required: true
                        })}
                          class="form-control 
                          input-box" id="phone"
                           placeholder=""  />
                       </div> 


                     
                   
                     <input type="submit" class="submit-btn form-control success-btn" value="update profile" placeholder="Save" />
                  </form>
               </div>
           </div>
        </div>
    </div>
   

       </div>
  </div>
    )
}


export  async function getStaticProps(context){
    const [session, loading] = useSession()
    let helloworld ="hello world"
   if(!session) {
     return {
       
       redirect : {
         destination : '/auth',
         permanent : false,
       }
      }; 
   }
    return {
      props : { session },
      helloworld 
    }
  }

export default ProfileComponent;