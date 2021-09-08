import Head from 'next/head'

import { getSession, useSession } from 'next-auth/client';

import axios from 'axios';

import {useForm} from 'react-hook-form';
import React, {useState, useRef} from 'react';

import FormData from 'form-data'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProfileComponent = (props) => {

    const {register, handleSubmit} = useForm();
const [imagepic, setimagepic] = useState()
  

    const fileInput = useRef('');
    const userEmailIdentity = props.userEmailId ; 


const onChangeHandler = (e) =>{
    const filesImage = e.target.files[0]
    setimagepic(filesImage)
    console.log("imagefff",filesImage)

}

    async function submitHandler(data){


    //  const fd = new FormData();


    // for (var key in data) {
    //     fd.append(key, data[key]); // formdata doesn't take objects
    // }

    // fd.append(
    //     'image',
    //     fileInput.current.files[0],
    //     fileInput.current.files[0].name
    // );
      //  const newdata = { accountNumber : data.accountNumber ,bankName:data.bankName, swiftCode : data.swiftCode, email : userEmailIdentity }
    
    //   console.log(
    //     'onSubmitFn:',
    //     data,
    //     '  imageFile: ',
    //     fileInput.current.files[0].name
    // );
    // for (var key in data) {
    //     fd.append(key, data[key]); // formdata doesn't take objects
    // }
   // still to resolve promise
  // still to resolve promise
//   const fd = new FormData();
//   for (var key in data) {
//       fd.append(key, data[key]); // formdata doesn't take objects
//   }

//   fd.append(
//       'image',
//       fileInput.current.files[0],
//       fileInput.current.files[0].name
//   );
const newdata = { email: data.email}
    axios
        .post('http://localhost:8001/api/merchant/profile', newdata)
        .then((res) => {
            console.log(res.data);
            toast.success(`bank details added sucessfully !`);
            // setSpinner(false);
            // setredirect(true);
        })
        .catch((error) => {
            console.log(error);
            toast.error(
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                  'bank details updation Failed'
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
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" alt="" class="rounded-circle z-depth-2 img-fluid " width="200" />
                    </div>
                       <div class="form form-group mt-3">
                       <input
                                                required
                                                multiple
                                                {...register('image', {
                                                    required: true
                                                })}
                                                onChange={onChangeHandler}
                                                type="file"
                                                className="form-control"
                                                placeholder="Please choose Image"
                                            />
                       </div>
                       <div class="form-group">
                           <label for="" clas=""> Name </label>
                          <input
                           type="text"
                           {...register('accountNumber', {
                            required: true
                            })}
                            class="form-control input-box" 
                            id="fname" placeholder=""  />
                       </div>
                       <div class="form-group">
                        <label for="" clas=""> Business Name </label>
                            <input type="text" 
                            {...register('bankName', {
                                required: true
                            })}
                            class="form-control input-box"
                             id="businessname" placeholder="" 
                              />

                       </div> 

                       <div class="form-group">
                        <label for="" clas=""> Account Number </label>
                          <input type="text" 
                          {...register('accountNumber', {
                            required: true
                        })}
                          class="form-control 
                          input-box" id="phone"
                           placeholder=""  />
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


export  async function getServerSideProps(context){
    const [session, loading] = useSession()
   if(!session) {
     return {
       
       redirect : {
         destination : '/auth',
         permanent : false,
       }
      }; 
   }
    return {
      props : { session }
    }
  }

export default ProfileComponent;