import { getSession, useSession } from 'next-auth/client';
import ChangePasswordComponent from '../components/ChangePassword/ChangePassword';


function ChangePassword({ session }) {
  const userEmail = session.user.email;
  return <ChangePasswordComponent userEmailId={userEmail} />;
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

export default ChangePassword;

