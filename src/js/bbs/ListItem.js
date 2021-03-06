import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './css/wraper.css'

class ListItem extends Component {

    /*
    * 类型验证
    * */
    static propTypes = {
        user: PropTypes.object.isRequired
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    componentWillMount() {
        this._updateTimeString()
        //开启定时器，5秒刷新一下发布时间
        this._timer = setInterval(
            this._updateTimeString.bind(this), 5000
        )
    }

    //组件销毁时 清楚定时器
    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const user = this.props.user
        const duration = (+Date.now() - user.createTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    _handItemDelete(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    // 处理code文本
    _getProcessedContent(content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className='list-item'>
                <div>
                    <span className='name'>{this.props.user.username} </span>：
                </div>

                <p dangerouslySetInnerHTML={
                    {
                        __html: this._getProcessedContent(this.props.user.content)
                    }
                }/>

                <span className='content-time'>{this.state.timeString}</span>

                <input type='button' value='删除' onClick={this._handItemDelete.bind(this)}/>

            </div>

        )
    }
}

export default ListItem;