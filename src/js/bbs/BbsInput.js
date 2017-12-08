import React, {Component} from 'react';
import './css/wraper.css'

/*
* 评论框组件
* */
class BbsInput extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }

    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    handUserContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    /*
    * 将content 传递给父组件
    * */
    handButtonPush(event) {

        if (this.props.onSubmit) {
            // 解构赋值
            const {username, content} = this.state
            // 通过回调将数据 回调给父组件
            this.props.onSubmit({username, content})

        } else {
            alert('no props')
        }
        this.setState({
            content: ''
        })
    }

    render() {

        return (
            <div>
                <div className='content-field'>
                    <span className='content-name'>用户名：</span>
                    <input className='name-input'
                           value={this.state.username}
                           onChange={this.handleUsername.bind(this)}/>
                </div>
                <div className='content-field'>
                    <span className='content-name'>评论内容：</span>
                    <textarea className='name-input'
                              value={this.state.content}
                              onChange={this.handUserContent.bind(this)}/>
                </div>
                <div className='button-push'>
                    <button onClick={this.handButtonPush.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default BbsInput;