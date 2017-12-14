import React, {Component} from 'react';
import Head from './js/Head'
import Body from './js/Body'
import './css/home.css'

class JThome extends Component {

    constructor(){
        super()
        this.state={
            download_url:"https://pro-app-qn.fir.im/55919faa1b837645003714fdbbaebc231b9035d8.apk?attname=2017-12-131.6.1-10610.apk_1.6.1.apk&e=1513238707&token=LOvmia8oXF4xnLh0IdH05XMYpH6ENHNpARlmPc-T:cDKqlFu1Ih7IotnG6OWVgctBDKI="

        }
    }

    onIosClick() {
        window.open('https://fir.im/cfh2')
    }

    onAndroidClick() {
        window.open(this.state.download_url)
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