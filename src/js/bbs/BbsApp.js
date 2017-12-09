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