import { getSession, useSession } from 'next-auth/client';
import  Dashboard  from '../components/dashboard/dashboard';


function DashboardPage() {
  return <Dashboard />;
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

export default DashboardPage;

