import React, {Component} from 'react';
import BbsInput from './BbsInput';
import BbsList from './BbsList'
import './css/wraper.css'

/*
* 评论列表 组件
* */
class Bbs extends Component {

    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    componentWillMount(){
        this.loadLocalComments()
    }

    handSubmit(comment) {

        if (!comment) {
            return
        }
        if (!comment.username) {
            alert("用户名不能为空")
            return
        }
        if (!comment.content) {
            alert("评论内容不能为空")
            return
        }
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
        // 序列化评论内容
        this._saveComments(this.state.comments)
    }

    // load 本地评论内容
    loadLocalComments(){
        let list = localStorage.getItem('comments')//普通字符串
        if (list) {
            list = JSON.parse(list) // object 对象数组
            this.setState({comments:list})
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

    render() {
        return (
            <div className='wraper'>
                <BbsInput onSubmit={this.handSubmit.bind(this)}/>
                <BbsList comments={this.state.comments}/>
            </div>
        )
    }
}

export default Bbs;