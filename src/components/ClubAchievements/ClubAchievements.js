import './ClubAchievements.css'
import React from 'react';
function ClubAchievements(props)
{
    return(
        <div className='ClubAchievements'>
            <p>{props.achievements}</p>
        </div>
    )
}

export default ClubAchievements;
