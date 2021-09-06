import {hash , compare} from 'bcryptjs'

import React from 'react'

export const hashPassword = async(password) => {
 const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export const verifyHashPassword = async(password , hashedPassword) => {
   const isVaild = await compare(password, hashedPassword);
   return isVaild;
}