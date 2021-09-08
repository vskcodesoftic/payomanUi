import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { verifyHashPassword } from '../../../helpers/auth';
import { MongoConnectionDb } from '../../../helpers/db';
import axios from 'axios'
import FormData from 'form-data'

export default NextAuth({
    session : {
      jwt : true
    },
    providers :[
        Providers.Credentials({
         async  authorize (credentials) {
         const client = await MongoConnectionDb();
         
          const userColllection = await client.db().collection('merchant');
          const user =   await userColllection.findOne({
                email :  credentials.email,
            })

            if (!user) {
                client.close();
                throw new Error("No merchant found!");
              }


        const isVaild = await verifyHashPassword(credentials.password , user.password);
        if(!isVaild){
            client.close()

            throw new Error('password doesnt match');
        }

        return {
            email: user.email,
            phone: "9322224994",
            bio: "this is simple bio example",
          };

    
        
  

           }
        }) 
    ]
});
