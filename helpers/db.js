import {MongoClient } from 'mongodb'

import React from 'react'

export const MongoConnectionDb =  async () => {
  const client = await MongoClient.connect('mongodb+srv://admin:admin@janpad.k6mjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  return client;
}
