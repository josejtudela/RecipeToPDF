import React from 'react';
import List from './list';
import { connect } from 'react-redux';
import { addIngredient } from '../store/actionCreators';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            termIgredients: ''
        }
    }
    onChangeList = (event) => {
        this.setState({termIgredients: event.target.value})
    }
    onHandleClickList = (e) => {
        if(e.keyCode === 13 || e.type === 'click'){ 
            this.setState({termIgredients: ''})
            this.props.handleClickList(this.state.termIgredients)
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='Introduce alimento' value={this.state.termIgredients} onChange={this.onChangeList} onKeyUp={(e) => this.onHandleClickList(e)}/>
                <input type="submit" value="+" disabled={!this.state.termIgredients} onClick={(e) => this.onHandleClickList(e)}/>
                <ul><List items={this.props.ingredientsComponent.ingredients}/></ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ingredientsComponent: state.ingredientsComponent});
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickList: (name) => {
        dispatch(addIngredient(name))
    }
  }
}

const ListFormConnected = connect( mapStateToProps, mapDispatchToProps)(ListForm);

export default ListFormConnected;