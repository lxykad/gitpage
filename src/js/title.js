import React, {Component} from 'react';

import '../css/title.css'

class Title extends Component {

    // 也可以在这里设置默认值,而且这里设置默认值的话，|| 操作符设置的默认值无效
    static defaultProps={
        content:"content"
    }

    constructor() {
        super();
    }

    render() {

        // 组件传进来的标签属性 content || 表示默认配置操作符
        const content = this.props.content || "title"

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