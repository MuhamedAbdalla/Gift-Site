import React from 'react';
import './Tag.css'
import dragonBall from './DragonBall.jpg'
import { taggedTemplateExpression } from '@babel/types';

class Tag extends React.Component
{
    render()
    {
        return(
            <div className="chip">
                <img src={dragonBall} alt="Person" width="96" height="96"/>
                John Doe
            </div>
        )
    }
}

export default Tag;