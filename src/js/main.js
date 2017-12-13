import React, {Component} from 'react';

import Head from './head'
import List from './list'
import Bbs from './bbs/BbsApp'

import JThome from './jt/JThome'

class Main extends Component {

    users = [
        {name: 'tom', age: '18'},
        {name: 'jack', age: '19'},
        {name: 'rose', age: '25'},
        {name: 'love', age: '16'}
    ]

    render() {
        /*

        return (
            <div>
                <Head/>
                {this.users.map((u, i) => {
                    return <List user={u} key={i}/>
                })}
            </div>
        )*/

        /*
            评论组件
            return(
                <Bbs/>
            )*/
        return (
            <JThome/>
        )
    }
}

export default Main;