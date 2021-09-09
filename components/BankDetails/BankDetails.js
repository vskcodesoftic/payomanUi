import React from 'react'
import Head from 'next/head'
import { getSession, useSession } from 'next-auth/client';
import axios from 'axios';
import { useForm } from 'react-hook-form';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const BankDetailComponent = (props) => {
 
  const userEmailIdentity = props.userEmailId ; 

  const userProfileData = props.profileData;

  let bankName = userProfileData.bankName || '';
  let useraccountNumber = userProfileData.accountNumber || '';
 let userswiftCode = userProfileData.swiftCode ||  '';


  const {register, handleSubmit} = useForm({defaultValues:
    { 
      accountNumber : `${useraccountNumber}`,
       bankName  :`${bankName}`,
       swiftCode :`${userswiftCode}`,
 

   }});


  async function submitHandler(data){

    //  const newdata = { accountNumber : data.accountNumber ,bankName:data.bankName, swiftCode : data.swiftCode, email : userEmailIdentity }
    const newdata ={...data ,email: userEmailIdentity }
    console.log(newdata)
  axios
      .post('http://localhost:8001/api/merchant/bankDetails', newdata)
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
    <ToastContainer />
    <div>
        <div class="container ">
           <div class="row">
               <div class="col-md-12">
                   
                   <form onSubmit={handleSubmit(submitHandler)}>     
                       <div class="form-group">
                           <label for="" clas=""> Bank Name </label>
                          <input type="text"
                           class="form-control input-box"
                            id="bname" 
                            placeholder=""
                            {...register('bankName', {
                              required: true
                          })}  />
                       </div>
                       <div class="form-group">
                        <label for="" clas=""> Swift Code </label>
                            <input type="text"

                             class="form-control input-box"
                              id="swiftCode"
                               placeholder="" 
                               {...register('swiftCode',{
                                 required :true
                               })}
                              />
                       </div> 
                       <div class="form-group">
                        <label for="" clas=""> Account Number </label>
                          <input type="number"  
                           {...register('accountNumber', {
                              required: true
                          })} 
                          class="form-control input-box" id="phone"  />
                       </div> 
                       <div className="form-group">
                   <button  className="form-control success-btn"  > Submit </button>
               </div>
                  </form>
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
  

export default BankDetailComponent;