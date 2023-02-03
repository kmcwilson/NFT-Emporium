import React from 'react';
import '../App.css';
// import HomeCard from '../components/HomeCard';
// import {mockNfts} from '../../../server/seeders/seed';


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_NFTS, QUERY_USER } from '../utils/queries';
// import { REMOVE_NFT } from '../utils/mutations';
// import Auth from '../utils/auth';
// import { removeNftId } from '../utils/localStorage';

export default function Wishlist() {

const { loading, data } = useQuery(QUERY_NFTS);
const nfts =  data?.nfts|| [];
console.log('NFT',nfts);

  return (
    <>
      <h1>{loading? (<div>Loading...</div>):(<div>My Wish List</div>)}</h1>
      <p>{nfts}</p>
      {/* <h3>
        {userData.savedNfts.length ? `You have ${userData.savedNfts.length} ${userData.savedNfts.length === 1 ? 'NFT' : 'NFTs'} on your wish list!`
          : 'You have no items on your wish list pal, get shopping!'}
      </h3> */}
    </>
  );

  //function accepts nft's mongoDB_id value and deletes the nft from the database


}
