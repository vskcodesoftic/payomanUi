import Head from 'next/head'
import Auth from '../components/auth/auth'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/client';
import { useEffect , useState} from 'react';


export default function Home() {
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
  return (
    <Auth />
 )
}
