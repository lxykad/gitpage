import React, {Component} from 'react';

import '../css/title.css'

class Title extends Component {

    constructor() {
        super();


    }

    render() {

        const content = "haha"

        function click() {
            alert(content)
        }

        return (

            <div className='title' onClick={click}>

                <text>{content}</text>

            </div>
        )
    }
}

export default Title;