import React, {Component} from 'react';

import Head from './head'
import List from './list'

class Main extends Component {

    users = [
        {name: 'tom', age: '18'},
        {name: 'jack', age: '19'},
        {name: 'rose', age: '25'},
        {name: 'love', age: '16'}
    ]

    render() {
        return (
            <div>
                <Head/>
                {this.users.map((u) => {
                    return <List user={u}/>
                })}
            </div>
        )
    }
}

export default Main;