import React, {Component} from 'react';
import BbsInput from './BbsInput';
import BbsList from './BbsList'
import './css/wraper.css'

class Bbs extends Component {

    handSubmit(comment) {
      alert(comment.username)
    }

    render() {
        return (
            <div className='wraper'>
                <BbsInput onSubmit={this.handSubmit.bind(this)}/>
                <BbsList/>
            </div>
        )
    }

}

export default Bbs;