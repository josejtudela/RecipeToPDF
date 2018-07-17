import React from 'react';
import { connect } from 'react-redux';
import { addTitle } from '../store/actionCreators'

class Title extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            titleTemp: ''
        }
    }
    onChangeTitle = (event) => {
        this.setState({titleTemp: event.target.value});
    }
    onHandleClickTitle = (e) => {
        if(e.keyCode === 13 || e.type === 'click'){    
            this.setState({titleTemp: ''}) 
            this.props.handleClickTitle(this.state.titleTemp)
        }
    }
    render(){
        const propsTitle = this.props.titleComponent.title;
        const title = propsTitle && propsTitle[0].toUpperCase()+propsTitle.slice(1);
        const titleTemp = this.state.titleTemp;
        const nameSubmit = propsTitle?'Cambia Título':'Título';
        return(
            <div>
                <input type="text" placeholder='Título de tu Receta' value={titleTemp} onChange={(e) => this.onChangeTitle(e)} onKeyUp={(e) => this.onHandleClickTitle(e)}/>
                <input type="submit" value={nameSubmit} disabled={!titleTemp} onClick={(e) => this.onHandleClickTitle(e)} />
                <h2>{title}</h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({titleComponent: state.titleComponent});
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickTitle: (name) => dispatch(addTitle(name))
  }
}

const TitleConnected = connect( mapStateToProps, mapDispatchToProps)(Title);

export default TitleConnected;