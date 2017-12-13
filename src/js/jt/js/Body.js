import React, {Component} from 'react';
import '../css/body.css'

class Body extends Component{



    render(){
        return(
            <div className='body'>
                <div className='body-center'>

                    <div className='code-ios'>
                        <div className='tv-ios'>IOS</div>
                        <img src={require('../img/code_android.png')} />
                        <img src={require('../img/icon_ios.png')} className='iv-ios'/>
                    </div>

                    <div>
                        <div className='tv-ios'>Android</div>
                        <img src={require('../img/code_android.png')} />
                        <img src={require('../img/icon_android.png')} className='iv-ios'/>
                    </div>

                </div>

            </div>
        )
    }
}

export default Body;