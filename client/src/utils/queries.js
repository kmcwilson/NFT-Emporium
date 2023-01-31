import {gql} from '@apollo/client';

export const QUERY_NFTS= gql`
query allNfts {
    nfts{
        _id: ID
        nft_token: String
        nft_collection: String
        image: String
        link: String
        owner: String
        price: Float
    }
}
`;

export const QUERY_SINGLE_NFT= gql`
query singleNft($nftId: ID!){
    nft(nftId: $nftId){
        _id: ID
        nft_token: String
        nft_collection: String
        image: String
        link: String
        owner: String
        price: Float
    }

}
`;

export const QUERY_USER= gql `
query {
    user{
        _id
        username
        email
        nftCount
        savedNFTs{
            _id: ID
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