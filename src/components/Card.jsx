import React from 'react';
import "./styles/Card.css";
function Card(){
    return (
        <div className='organismo-contenedor'>
            <img src='/haha.svg' />
            <img  className='imagen-perf' src="/avatar.svg" alt="imagen de perfil" />
            <img  className='badge'src="/Badge xd.svg" alt="" />
            <div className='profile'>
                <img src="/Nick.svg" alt="" />
            </div>
            

        </div>
    )
}

export default Card