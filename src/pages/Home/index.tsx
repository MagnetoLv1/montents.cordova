import './Home.scss';

import React from 'react';

import Feed from '../../components/Feed';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { useAuth } from '../../context/auth';

function Home(): React.ReactElement {
    const { currentUser } = useAuth();
    const photo = currentUser?.photoURL ?? undefined;
    const user = currentUser?.displayName ?? null;

    return (
        <>
            <Header photoUrl={photo} username={user} />
            <div className="homeBody">
                <Feed photoUrl={photo} username={user} />
            </div>
        </>
    );
}

export default Home;
