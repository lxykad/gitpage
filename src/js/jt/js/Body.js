import React, {Component} from 'react';
import PropTypes from 'prop-types'
import '../css/body.css'

class Body extends Component {

    /*
    * props 校验
    * */
    static propTypes = {
        onIosClick: PropTypes.func,
        onAndroidClick: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            codeAndroid: document.getElementById("code-android").getAttribute("value"),
            codeIos: document.getElementById("code-ios").getAttribute("value")
        }
    }

    handIosClick(event) {
        if (this.props.onIosClick) {
            this.props.onIosClick()
        }
    }

    handAndroidClick(event) {
        if (this.props.onAndroidClick) {
            this.props.onAndroidClick()
        }
    }

    /*
    * <img src={require('../img/code_android.png')}/>
    * <img src={this.state.codeIos} className='code-img'/>
    * */

    render() {
        return (
            <div className='body'>
                <div className='body-center'>

                    <div className='code-ios'>
                        <div className='tv-ios'>IOS</div>
                        <img src={this.state.codeAndroid} className='code-img'/>
                        <img src={require('../img/icon_ios.png')} className='iv-ios'
                             onClick={this.handIosClick.bind(this)}/>
                    </div>

                    <div className='code-ios'>
                        <div className='tv-ios'>Android</div>
                        <img src={this.state.codeIos} className='code-img'/>
                        <img src={require('../img/icon_android.png')} className='iv-ios'
                             onClick={this.handAndroidClick.bind(this)}/>
                    </div>

                </div>

            </div>
        )
    }
}

export default Body;