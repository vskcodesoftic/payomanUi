import { getSession, useSession } from 'next-auth/client';
import ProfileComponent from '../components/Profile/Profile';



function ProfilePage({ session }) {
  const userEmail = session.user.email;
  return <ProfileComponent userEmailId={userEmail} />;
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

