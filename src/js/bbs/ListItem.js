import React, {Component} from 'react';
import './css/wraper.css'

class ListItem extends Component {

    render() {
        return (
            <div className='list-item'>
                <div className='name'>
                    <span>{this.props.user.username} </span>：
                </div>
                <p>{this.props.user.content}</p>

            </div>

        )
    }
}

export default ListItem;