import React from 'react'
import { hashPassword } from '../../../helpers/auth';
import { MongoConnectionDb} from '../../../helpers/db'

async function handler(req, res) {
    if (req.method !== 'POST') {
      return;
    }
  
    const data = req.body;
  
    const {fullname, businessname, countrycode, phonenumber, email, password } = data;
  
    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return;
    }
  
    const client = await MongoConnectionDb();
  
    const db = client.db();
  
    const existingUser = await db.collection('users').findOne({ email: email });
  
    if (existingUser) {
      res.status(422).json({ message: 'User exists already!' });
      client.close();
      return;
    }
  
    const hashedPassword = await hashPassword(password);
  

     
    try{
      const result = await db.collection('users').insertOne({
        fullname, 
        businessname,
        countrycode,
         phonenumber,
        email: email,
        password: hashedPassword,
      });
      res.status(201).json({ message: 'Created user!' , user  : result});
      client.close();
    }catch(err){
      console.log(err)
    }

  
  }
  
  export default handler;
