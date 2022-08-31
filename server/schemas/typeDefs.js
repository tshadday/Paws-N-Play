const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Owner {
    _id: ID!
    name: String!
    email:String!
    petCount:Int
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
    user_2:String!
   messages: [Message]
  }
  type Auth {
    token:ID!
    owner:Owner
  }

  type Pet {
    pet_id: ID!
    pet_name: String!
    breed: String!
    age: Int
    nature: String!
    gender: String!
  }

  type Message {
   message_id: ID!
  content: String!
  username: String!
  }

  input petInput {
    pet_id: ID!
    pet_name: String!
    breed: String!
    age: Int
    nature: String!
    gender: String!
  }
  input messageInput {
    message_id: ID!
    content: String!
    username: String!
  }

  type Query {
    owner: [Owner]
    me:Owner
    pet(_id: String): [Pet]
<<<<<<< HEAD
  }
  type Mutation {
    addOwner(username:String!,email:String!,password:String!):Auth
    login(email:String!,password:String!):Auth
    savePet(pet:petInput!):Owner
    removePet(petId:ID!):Owner
    addPet(pet_name:String!):Owner
=======
    chat: [Chat]
    message(_id: String): [Message]
>>>>>>> 7ca59ad8982b82d7438c827a4e6fa0b615e3d880
  }

  type Mutation {
    addOwner(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePet(pet: petInput!): Owner
    removePet(petId: ID!): Owner
    createChat(user_1:String!, user_2: String!): Chat
    createMessage(messages: messageInput!): Chat

  }
`;

module.exports = typeDefs;
