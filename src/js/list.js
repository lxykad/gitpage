import React, {Component} from 'react';

class List extends Component {

    render() {

        const {user} = this.props || null

        return (

            <div>
                {
                    <div> name : {user.name}</div>
                }

            </div>
        )
    }

}

export default List;