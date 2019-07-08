import React,{ Component } from 'react';
import logo from '../../img/logo.jpg';

import './index.css';

export default class Thanks extends Component{
    render(){
        return(
            <div id='surveyForm'>
                <header>
                    <p>OBRIGADO PELO SEU VOTO!</p>
                </header>
                <img src={logo} alt=''></img>
            </div>
        )
    }
}