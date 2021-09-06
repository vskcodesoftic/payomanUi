import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client';
import { useEffect , useState} from 'react';

import Auth from '../components/auth/auth'

function AuthPage() {
  const [isLoading, setisLoading] = useState(true)
  const router = useRouter()
  useEffect(() => {
    getSession().then( session => {
      if(session){
       router.replace('/dashboard')
      } else{
         setisLoading(false);
      }
    })
  }, [router])

  if(isLoading) {
    return <p>Loading...</p>
  }

  return <Auth />;
}

export default AuthPage;
