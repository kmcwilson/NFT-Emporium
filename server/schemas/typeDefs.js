const { gql }= require('apollo-server-express');

const typeDefs = gql `

type Order {
    _id: ID
    purchaseDate: String
    products: [NFT]
  }
type User {
    _id: ID!
    username: String
    email: String
    nftCount: Int
    saveNFTs: [NFT]
    orders: [Order]
}

type Checkout {
    session: ID
  }

type nfts {
    _id: ID
    token: String
    collection: String
    image: String
    link: String
    owner: String
    price: Int
}

type Auth {
    token: ID!
    user: User
}

input savedNFT {
    _id: ID
    token: String
    collection: String
    image: String
    link: String
    owner: String
    price: Int
}
type Query {
    nft(_id: ID!): NFT
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(nfts: [ID]!): Order
    saveNFTs(input: savedNFT!): User
    removeNFT(nft_id: ID!): User
}

`;

module.exports= typeDefs;