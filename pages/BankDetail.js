import { getSession, useSession } from 'next-auth/client';
import BanDetailComponent from '../components/BankDetails/BankDetails';


function BankDetail({ session }) {
  console.log("hellogfgf",session.user.email)

  const userEmail = session.user.email;

  return <BanDetailComponent userEmailId={userEmail} />;
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

export default BankDetail;

