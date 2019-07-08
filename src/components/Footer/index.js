import React, { Component } from 'react';
import './index.css'
import heart from '../../img/heart.png';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
                    feito com <img src={heart} alt=''/> pelo Léo.
                </footer>
            </div>
        )
    }
}

//comment