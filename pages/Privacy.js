import { getSession, useSession } from 'next-auth/client';
import PrivacyPolicyComponent from '../components/PrivacyAndSecurity/PrivacySecurity';


function PrivacyPage() {
  return <PrivacyPolicyComponent />;
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

export default PrivacyPage;

