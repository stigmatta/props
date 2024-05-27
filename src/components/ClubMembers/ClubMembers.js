import React from 'react';
import './ClubMembers.css';

function ClubMembers(props) {
    const { players } = props;

    return (
        <div className="ClubMembers">
            <h1>Текущий состав</h1>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClubMembers;
