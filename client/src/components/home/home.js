import React from 'react';
import style from './home.module.css';

const Home = () => {
    return(
        <div className={style.container}>
            <div className={style.title}>
                <h1>Bienvenido al home</h1>
            </div>
        </div>
    )
}

export default Home;