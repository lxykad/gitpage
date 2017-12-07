import React, {Component} from 'react';
import Title from './title'

class Head extends Component{
    render(){
        return(
            <div>

                <Title content={"hello"}/>
                <Title content = "world"/>
                <Title/>

            </div>
        )
    }
}

export default Head;