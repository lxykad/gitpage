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

    render() {
        return (
            <div className='list-item'>
                <div className='name'>
                    <span>{this.props.user.username} </span>：
                </div>
                <p>{this.props.user.content}</p>
                <span className='content-time'>{this.state.timeString}</span>

                <input type='button' value='删除' onClick={this._handItemDelete.bind(this)}/>

            </div>

        )
    }
}

export default ListItem;