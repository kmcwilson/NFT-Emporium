const { gql }= require('apollo-server-express');

const typeDefs = gql `
type Query {
    me: User
}

type Mutation {
    login(email:String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveNFTs(input: savedNFTs!): User
    removeNFT(nft_id: ID!): User
}

type User {
    _id: ID!
    username: String
    email: String
    nftCount: Int
    saveNFTs: [NFT]
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
`;

module.exports= typeDefs;