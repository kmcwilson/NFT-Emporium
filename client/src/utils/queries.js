import {gql} from '@apollo/client';

export const QUERY_NFTS= gql`
query Nfts {
    nfts {
      _id
      image
      nft_collection
      nft_token
      owner
      price
    }
  }
`;

export const QUERY_SINGLE_NFT= gql`
query Query($nftId: ID!) {
    nft(nftId: $nftId) {
      _id
      image
      nft_collection
      nft_token
      owner
      price
    }
  }
`;

export const QUERY_USER= gql `
query User {
    user {
      _id
      email
      nftCount
      savedNFTs {
        _id
        image
        nft_collection
        nft_token
        owner
        price
      }
      username
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
    }
  }
`;