import * as React from 'react';
import Navbar from '../components/NavBar';
import Posts from '../components/Posts';



const NewsFeed = ({ transparent }) => {
    return (
        <div>
            <>
                <div>
                    
                    <Navbar />
                </div>
            </>
            <div>
                <h3>Publications récentes</h3>
                <Posts />
            </div>
        </div>
    );
};

export default NewsFeed;
