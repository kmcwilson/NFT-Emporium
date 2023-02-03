import React from 'react';
import '../App.css';
import { useQuery, useMutation } from '@apollo/client';
import Card from '../components/HomeCard';

import { QUERY_USER } from '../utils/queries';
import { REMOVE_NFT } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeNftId } from '../utils/localStorage';

export default function Wishlist() {
  const { loading, data } = useQuery(QUERY_USER);
  const userData = data?.me || [];
  const userDataLength = Object.keys(userData).length;
  const [removeNft] = useMutation(REMOVE_NFT);

  if (loading) { return <h1> Loading...</h1> }

  const handleDeleteNFT = async (nftId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    try {
      await removeNft({ variables: { nftId } });
      removeNftId(nftId);
    } catch (err) {
      console.error(err);
      alert('Something went wrong with the function!');
    }
  };
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <h1 className='buy-sell'>My Wish List</h1>
      <h3>
        {userData.savedNfts.length ? `You have ${userData.savedNfts.length} ${userData.savedNfts.length === 1 ? 'NFT' : 'NFTs'} on your wish list!`
          : 'You have no items on your wish list pal, get shopping!'}
      </h3>
      <div className="container wish-list-cards" style={{
        display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
          <div className="card" key={nft._id}></div>


      </div>
    </>
  );

  //function accepts nft's mongoDB_id value and deletes the nft from the database


}
