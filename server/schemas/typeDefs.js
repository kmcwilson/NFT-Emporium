const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Order {
    _id: ID
    purchaseDate: String
    nfts: [NFT]
  }
type User {
    _id: ID!
    username: String
    email: String
    nftCount: Int
    savedNFTs: [NFT]
    orders: [Order]
}

type Checkout {
    session: ID
  }

type NFT {
    _id: ID
    nft_token: String
    nft_collection: String
    image: String
    link: String
    owner: String
    price: Float
}

type Auth {
    token: ID!
    user: User
}

input savedNFT {
    _id: ID
    nft_token: String
    nft_collection: String
    image: String
    link: String
    owner: String
    price: Float
}
type Query {
    nfts:[NFT]
    nft(nftId: ID!): NFT
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(nfts: [ID]!): Order
    saveNFTs(input: ID!): User
    removeNFT(nftId: ID!): User
}

`;

module.exports = typeDefs;