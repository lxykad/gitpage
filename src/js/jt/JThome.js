import React, {Component} from 'react';
import Head from './js/Head'
import Body from './js/Body'
import './css/home.css'

class JThome extends Component {


    onIosClick() {
        alert('ios')
    }

    onAndroidClick() {
        alert('android')
    }

    render() {
        return (
            <div className='home'>
                <Head/>
                <Body onIosClick={this.onIosClick.bind(this)} onAndroidClick={this.onAndroidClick.bind(this)}/>
            </div>
        )
    }
}

export default JThome;