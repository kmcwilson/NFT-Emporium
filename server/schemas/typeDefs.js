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
}

type Checkout {
    session: ID
  }

type NFT {
    nft_id: Number
    token_name: String
    collection_name: String
    image: String
    link: String
    owner: String
    price: Number
}

type Auth {
    token: ID!
    user: User
}

input savedNFT {
    nft_id: Number
    token_name: String
    collection_name: String
    image: String
    link: String
    owner: String
    price: Number 
}
type Query {
    // me: User
    nft(nft_id: ID!): NFT
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(nfts: [ID]!): Order
    saveNFT(input: savedNFTs!): User
    removeNFT(nft_id: ID!): User
}

`;

module.exports= typeDefs;