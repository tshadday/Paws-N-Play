const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Owner {
    _id: ID!
    name: String!
    email: String!
    savedPets: [Pet]
    username: String!
    password: String!
    age: Int
    interests: String!
    pet: [Pet]
  }

  type Chat {
    _id: ID!
    user_1: String!
    user_2: String!
    messages: [Message]
  }

  type Auth {
    token: ID!
    owner: Owner
  }

  type Pet {
    pet_name: String!
    breed: String!
    age: Int
    nature: String!
    gender: String!
  }

  type Message {
   _id: ID!
   content: String!
   time: String
   user: String!
   chat: Chat
  }

  input petInput {
    pet_name: String!
    breed: String!
    age: Int
    nature: String!
    gender: String!
  }

  input messageInput {
    content: String!
    username: String!
  }

  type Query {
    owner: [Owner]
    me: Owner
    pet(_id: String): [Pet]
    chat(user: String): [Chat]
    message(user: String, chat: String): [Message]
  }

  type Mutation {
    createOwner(username:String!,email:String!,password:String!):Auth
    login(email:String!,password:String!):Auth
    savePet(pet:petInput!):Owner
    removePet(petId:ID!):Owner
    createPet(Pet: petInput!): Owner
    updatePet(Pet: petInput!): Owner
    addPet(pet_name:String!):Owner
    createChat(user_1:String!, user_2: String!): Chat
    createMessage(content: String!, user: String!,chat: String!): Message
  }
`;

module.exports = typeDefs;
