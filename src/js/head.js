import React, {Component} from 'react';
import Title from './title'
import '../css/head.css'

class Head extends Component{
    render(){
        return(
            <div className='head'>

                <Title content={"hello"}/>
                <Title content = "world"/>
                <Title/>

            </div>
        )
    }
}

export default Head;