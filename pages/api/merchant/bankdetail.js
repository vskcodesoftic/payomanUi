import React from 'react'
import { hashPassword } from '../../../helpers/auth';
import { MongoConnectionDb} from '../../../helpers/db'

async function handler(req, res) {
    if (req.method !== 'POST') {
      return;
    }
  
    const data = req.body;
  
    const { accountNumber , bankName, swiftCode , email } = data;
  
    if (
      !email ||
      !email.includes('@') 
     
    ) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return;
    }
  
    const client = await MongoConnectionDb();
  
    const db = client.db();
  
    const existingUser = await db.collection('merchant').findOne({ email: email });
  
    if (!existingUser) {
      res.status(422).json({ message: 'merchant doesnot exists !' });
      client.close();
      return;
    }
  
  

     
    try{
      const result = await db.collection('merchant').updateOneupdateOne(
        { email: email },
        {
          accountNumber, 
          bankName,
          swiftCode   
        }
      );
      res.status(201).json({ message: 'updated bankdetails sucessfully' , merchant  : result});
      client.close();
    }catch(err){
      console.log(err)
    }

  
  }
  
  export default handler;
