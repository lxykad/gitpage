import React, {Component} from 'react';
import Title from './title'
import '../css/head.css'

class Head extends Component {
    render() {

        function androidClick() {
            alert("android")
        }

        function iosClick() {
            alert("ios")
        }

        function h5Click() {
            alert("h5")
        }

        return (
            <div className='head'>

                <Title content={"android"} headClick={() => {
                    androidClick()
                }}/>
                <Title content="ios" headClick={() => {
                    iosClick()
                }}/>
                <Title content={"前端"} headClick={() => {
                    h5Click()
                }}/>

            </div>
        )
    }


}

export default Head;