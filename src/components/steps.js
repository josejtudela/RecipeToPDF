import React from 'react';
import List from './list';
import { connect } from 'react-redux';
import { addStep } from '../store/actionCreators';

class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            termSteps: ''
        }
    }
    onHandleClickSteps = (e) => {
        if(e.keyCode === 13 || e.type === 'click'){ 
            this.setState({termSteps:''});
            this.props.handleClickSteps(this.state.termSteps);
        }
    }
    onChangeSteps = (event) => {
        this.setState({termSteps: event.target.value})
    }
    render(){
        return(
            <div>
                <textarea placeholder='Introduce el siguiente paso' value={this.state.termSteps} onChange={this.onChangeSteps} onKeyUp={(e)=>this.onHandleClickSteps(e)}/>
                <input type="submit" value="+" disabled={!this.state.termSteps} onClick={(e)=>this.onHandleClickSteps(e)}/>
                <ol><List items={this.props.stepsComponent.steps}/></ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({stepsComponent: state.stepsComponent});
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickSteps: (name) => {
        dispatch(addStep(name))
    }
  }
}

const StepsConnected = connect( mapStateToProps, mapDispatchToProps)(Steps);

export default StepsConnected;