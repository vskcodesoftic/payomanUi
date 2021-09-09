import { getSession, useSession } from 'next-auth/client';
import { useEffect  ,useState } from 'react';
import ProfileComponent from '../components/Profile/Profile';
import axios from 'axios'


const ProfilePage = ({ session ,data }) =>{
  const userEmail = session.user.email;

  const username = data.name;
  console.log("username",username)
 
  return <ProfileComponent userEmailId={userEmail} profileData={data}  />;
}

export  async function getServerSideProps(context){
  const baseUrl = "http://localhost:8001"

 const session = await getSession({ req : context.req })
 const res = await fetch(`${baseUrl}/api/merchant/completeProfile/${session.user.email}`)
 const data = await res.json()
console.log("data,",data)
 // Pass data to the page via props
 if(!session) {
   return {
     
     redirect : {
       destination : '/auth',
       permanent : false,
     }
    }; 
 }
  return {
    props : { session ,data },
  }
  
}

export default ProfilePage;

