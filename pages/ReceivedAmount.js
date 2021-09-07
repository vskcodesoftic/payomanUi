import { getSession, useSession } from 'next-auth/client';
import ReceivedAmountComponent from '../components/ReceivedAmount/RecieviedAmount';


function RecievedAmount() {
  return <ReceivedAmountComponent />;
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

export default RecievedAmount;

