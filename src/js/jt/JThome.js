import React, {Component} from 'react';
import Head from './js/Head'
import Body from './js/Body'
import './css/home.css'

class JThome extends Component {

    constructor() {
        super()
        this.state = {
            androidUrl: document.getElementById("android-url").getAttribute("value"),
            iosUrl: document.getElementById("ios-url").getAttribute("value"),
            logoUrl: document.getElementById("logo-url").getAttribute("value")
        }
    }

    onIosClick() {
        if (!this.state.iosUrl) {
            alert('请配置ios跳转地址')
            return
        }
        window.open(this.state.iosUrl)
    }

    onAndroidClick() {
        if (!this.state.androidUrl) {
            alert('请配置app下载地址')
            return
        }
        window.open(this.state.androidUrl)
    }

    render() {

        return (

            <div className='home-root'>

                <div className='home'>

                    <Head/>
                    <Body onIosClick={this.onIosClick.bind(this)} onAndroidClick={this.onAndroidClick.bind(this)}/>

                </div>

                <div>
                    {/*<img src={require('./img/ji_logo.png')} className='logo'/>*/}
                    <img src={this.state.logoUrl} className='logo'/>
                </div>

            </div>
        )
    }
}

export default JThome;