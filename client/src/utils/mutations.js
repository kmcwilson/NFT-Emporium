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
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        nftCount
        orders {
          _id
          nfts {
            _id
            image
            nft_collection
            nft_token
            owner
            price
          }
        }
        savedNFTs {
          _id
          image
          nft_collection
          nft_token
          owner
          price
        }
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
            _id
            nft_token
            nft_collection
            image
            link
            owner
            price
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
            _id
            nft_token
            nft_collection
            image
            link
            owner
            price

        }
    }
}
`;
 export const ADD_ORDER= gql`
 mutation Mutation($nfts: [ID]!) {
    addOrder(nfts: $nfts) {
      _id
      nfts {
        _id
        image
        nft_collection
        nft_token
        owner
        price
      }
    }
  }
 `;