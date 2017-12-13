import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './css/wraper.css'

/*
* 评论框组件
* */
class BbsInput extends Component {

    /*
    * props 校验
    * */
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            username: '',
            content: '',
            createTime: ''
        }
    }

    componentWillMount() {
        this._getUserName()
    }

    handleUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    /*
    * 监听用户名输入框失去焦点的事件 onBlur：
    * */
    handleUsernameBlur(event) {
        this._saveUserName(event.target.value)
    }

    /*
    * save
    * */
    _saveUserName(name) {
        localStorage.setItem('username', name)
    }

    /*
    *  get
    * */
    _getUserName() {
        let name = localStorage.getItem('username');
        /*if (name) {
            this.setState({
                username: name
            })
        }*/
        this.setState({
            username: name || null
        })
    }

    handUserContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    /*
    *  点击发布按钮
    *  将content 传递给父组件
    * */
    handButtonPush(event) {

        if (this.props.onSubmit) {
            // 解构赋值
            const {username, content} = this.state

            // 通过回调将数据 回调给父组件
            this.props.onSubmit({
                username: username,
                content: content,
                createTime:+new Date()
            })

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
                           onChange={this.handleUsername.bind(this)}
                           onBlur={this.handleUsernameBlur.bind(this)}/>
                </div>
                <div className='content-field'>
                    <span className='content-name'>评论内容：</span>
                    <textarea className='name-input'
                              ref={(textarea) => {
                                  this.textarea = textarea
                              }}
                              value={this.state.content}
                              onChange={this.handUserContent.bind(this)}/>
                </div>
                <div className='button-push'>
                    <button onClick={this.handButtonPush.bind(this)}>发布</button>
                </div>
            </div>
        )
    }

    /*
    * 组件挂载完成后调用
    * textarea ref 指定了 this.textarea
    * 自动聚焦
    * */
    componentDidMount() {
        this.textarea.focus()
    }
}

export default BbsInput;