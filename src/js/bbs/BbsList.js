import React, {Component} from 'react';
import ListItem from './ListItem'

class BbsList extends Component {

    static defaultProps = {
        comments: []
    }

    onDeleteClick(index) {
        if (this.props.onCommentListDelete) {
            this.props.onCommentListDelete(index)
        }
    }

    render() {

        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <ListItem user={comment} key={i} index={i} onDeleteComment={this.onDeleteClick.bind(this)}/>
                )}
            </div>
        )
    }
}

export default BbsList;