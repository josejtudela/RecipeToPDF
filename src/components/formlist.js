import React from 'react';
import List from './list';

export default class ListForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleClickList}>
                    <input type="text" placeholder='Introduce alimento' value={this.props.term} onChange={this.props.onChangeList}/>
                    <input type="submit" value="+" disabled={!this.props.term}/>
                </form> 
                <ul><List items={this.props.ingredients}/></ul>
            </div>
        )
    }
}