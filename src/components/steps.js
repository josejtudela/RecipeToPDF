import React from 'react';
import List from './list';

export default class ListForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <form id="stepsForm" onSubmit={this.props.handleClickSteps}>
                    <textarea placeholder='Introduce el siguiente paso' value={this.props.term} onChange={this.props.onChangeSteps}/>
                    <input type="submit" value="+" disabled={!this.props.term}/>
                </form> 
                <ol><List items={this.props.steps}/></ol>
            </div>
        )
    }
}