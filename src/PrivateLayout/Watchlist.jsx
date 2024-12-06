import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Watchlist = () => {

    const {user} = useContext(AuthContext)
    const watchlists = useLoaderData()

    const userWatchlist = user? watchlists.filter(watchlist => watchlist.reviewerEmail === user.email): []
     
   console.log( userWatchlist)
    return (
        <div>

        </div>
    );
};

export default Watchlist;