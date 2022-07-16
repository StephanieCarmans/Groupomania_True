import * as React from 'react';
import Logo from '../components/header/Logo';
import Log from '../components/log/Log';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <>
            <div className="home-content">
                <div>
                    <Logo />
                </div>

                <div>
                    <h1 className="home-title">
                        Bienvenue sur le reseau social de Groupomania
                    </h1>
                </div>
                <div>
                    <div>
                        <Log signin={false} signup={true} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
