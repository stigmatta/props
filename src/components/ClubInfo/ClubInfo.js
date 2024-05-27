import React from 'react';
import './ClubInfo.css';

function ClubInfo(props){
    return(
        <div className='ClubInfo'>
            <h1>Название клуба: {props.name}</h1>
            <h2>Город: {props.city}</h2>
            <h2>Дата основания: {props.foundationDate}</h2>
            <img src={props.image} alt=""/>
        </div>
    );
}

export default ClubInfo;
