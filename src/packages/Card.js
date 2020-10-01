import React from 'react';
import './Card.css';    
import temp from './Onepiece.jpg'

class Card extends React.Component
{
    render()
    {
        return(
            <div className="card-style grow">
                <div> 
                    <img src={this.props.movie.Poster} alt="Poster" style={{innerWidth:"100%"}, {height: "300px"}, {width: "300px"}}/> 
                </div>
                
                <div>
                    <h1>{this.props.movie.Title}</h1>
                </div>

                <div>
                    <p>{this.props.movie.Plot}</p> 
                </div>
                
                <div>
                    <div className="button db b pv2 ma2 color grow pointer shadow-2">Add To Cart</div>
                </div>
           </div> 
        )
    }
}

export default Card;