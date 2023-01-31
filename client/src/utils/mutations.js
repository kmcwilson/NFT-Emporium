import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
       token
       user{
        _id
        username
       } 
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}
`;
export const SAVE_NFTS = gql`
mutation saveNFTs($input: savedNFT!){
    saveNFT(input: $input){
        _id
        username
        email
        nftCount
        savedNFTs{
           # _id: ID
            nft_token: String
            nft_collection: String
            image: String
            link: String
            owner: String
            price: Float
        }
    }
}
`;

export const REMOVE_NFT = gql`
mutation removeNFT($nftId: ID!){
    removeNFT(nftId: $nftId){
        _id
        username
        email
        nftCount
        savedNFTs{
            # _id: ID
            nft_token: String
            nft_collection: String
            image: String
            link: String
            owner: String
            price: Float

        }
    }
}
`;
