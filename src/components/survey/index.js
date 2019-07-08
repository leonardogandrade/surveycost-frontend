import React,{ Component } from 'react';
import api from '../../services/api';
import logo from '../../img/logo.jpg';
import Footer from '../Footer';

import './index.css';

export default class Survey extends Component{
    state = {
        agree : 0,
        disagree : 0
    }

    onCLick =  async event => {
        await this.setState({[event.target.name] : event.target.value});
        await api.post('/vote',{
            agree : this.state.agree,
            disagree : this.state.disagree
        })
        await this.setState({agree : 0, disagree : 0});
        this.props.history.push('/thanks');
    }

    render(){
        return(
            <div>
                <div id='surveyForm'>
                    <header>
                        <p>Pesquisa de interesse em participação.</p>
                        <span>No dia 14 de Setembro estamos organizando uma noite de 
                            frango frito com batata com porções GRANDES <b>(400g de batata e 400g de frango)</b> e pequenas 
                            <b>(200g de batata e 200g de frango)</b> e valores respectivamente entre R$18 e R$25. Este evento além 
                            de ajudar na arrecadação de fundos para realização do congesso jovem, é um momento onde a igreja pode se 
                            confraterzinar em uma refeição.
                        </span>
                    </header>
                    <img src={logo} alt=''></img>
                    <p><span>Deseja participar?</span></p>
                    <div className='ButtonList'>
                        <button 
                            id='sim'
                            onClick={this.onCLick}
                            name='agree'
                            value={1}
                            >SIM
                        </button>

                        <button 
                            id='nao'
                            onClick={this.onCLick}
                            name='disagree'
                            value={1}
                            >NÃO
                        </button>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}