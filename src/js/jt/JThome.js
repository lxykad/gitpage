import React, {Component} from 'react';
import Head from './js/Head'
import Body from './js/Body'
import './css/home.css'

class JThome extends Component {

    constructor() {
        super()
        this.state = {
            androidUrl: document.getElementById("android-url").getAttribute("value"),
            iosUrl: document.getElementById("ios-url").getAttribute("value")
        }
    }

    onIosClick() {
        // window.open('https://fir.im/cfh2')
        alert(this.state.iosUrl)
    }

    onAndroidClick() {
        // window.open(this.state.download_url)
        alert(this.state.androidUrl)
    }

    render() {

        return (

            <div>

                <Head/>
                <Body onIosClick={this.onIosClick.bind(this)} onAndroidClick={this.onAndroidClick.bind(this)}/>

            </div>
        )
    }
}

export default JThome;