import { getSession, useSession } from 'next-auth/client';
import ProfileComponent from '../components/Profile/Profile';


function ProfilePage() {
  return <ProfileComponent />;
}

export  async function getServerSideProps(context){
 const session = await getSession({ req : context.req })

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

export default ProfilePage;

