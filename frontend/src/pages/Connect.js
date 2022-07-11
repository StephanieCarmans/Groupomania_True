import * as React from 'react';
import Log from '../components/log/Log';



function Home() {
    return (
        <>
            <div className="home-content">
                <div>
                    <img
                        src="./img/icon-left-font-monochrome-black.svg"
                        alt="Groupomania"
                        className='homepage __logo'
                    />
                </div>

                <h1>Bienvenue sur le reseau social de Groupomania</h1>
                <h2>Travaillez plus efficacement, ensemble</h2>
                <p>
                    Le réseau social d'entreprise Groupomania simplifie le
                    partage d'information dans votre entreprise et facilite le
                    travail collaboratif, au quotidien.
                </p>

                <div>
                    <div>
                        <Log signin={false} signup={true} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;