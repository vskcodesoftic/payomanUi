import {MongoClient } from 'mongodb'

export const MongoConnectionDb =  async () => {
  const client = await MongoClient.connect('mongodb+srv://admin:FV12iwRY8h3lW5i1@cluster0.r2dy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  return client;
}
