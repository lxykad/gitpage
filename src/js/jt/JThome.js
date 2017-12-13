import React, {Component} from 'react';
import Head from './js/Head'
import Body from './js/Body'
import './css/home.css'

class JThome extends Component{

    render(){
        return(
            <div className='home'>
                <Head/>
                <Body/>
            </div>
        )
    }
}

export default JThome;