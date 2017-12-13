import React, {Component} from 'react';
import ListItem from './ListItem'

class BbsList extends Component {

    static defaultProps = {
        comments: []
    }

    render() {

        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <ListItem user={comment} key={i}/>
                )}

            </div>

        )
    }
}

export default BbsList;