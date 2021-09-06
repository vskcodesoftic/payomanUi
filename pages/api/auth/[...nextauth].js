import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { verifyHashPassword } from '../../../helpers/auth';
import { MongoConnectionDb } from '../../../helpers/db';


export default NextAuth({
    session : {
      jwt : true
    },
    providers :[
        Providers.Credentials({
         async  authorize (credentials) {
         const client = await MongoConnectionDb();
         
          const userColllection = await client.db().collection('users');
          const user =   await userColllection.findOne({
                email :  credentials.email
            })

        if(!user){
            client.close()

            throw new Error('no user found');
        }
        
        const isVaild = await verifyHashPassword(credentials.password , user.password);
        
        if(!isVaild){
            client.close()

            throw new Error('password doesnt match');
        }
        client.close()

        return { email : user.email }

           }
        }) 
    ]
});
