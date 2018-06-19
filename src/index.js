import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ListForm from './components/formlist';
import Steps from './components/steps';
import Photo from './components/photo';
import CtaPDF from './components/ctapdf';
import Title from './components/title';

const rootElement = document.getElementById("root");

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleTemp: '',
            title: '',
            termIgredients: '',
            ingredients: [],
            termSteps: '',
            steps: []
        }
    }
    handleClickTitle = (event) => {
        event.preventDefault();
        this.setState({title: this.state.titleTemp});
    }
    onChangeTitle = (event) => {
        this.setState({titleTemp: event.target.value});
    }
    handleClickList = (event) => {
        event.preventDefault();
        this.setState({ingredients: [...this.state.ingredients,this.state.termIgredients]});
        this.setState({termIgredients:''});
    }
    onChangeList = (event) => {
        this.setState({termIgredients: event.target.value})
    }
    handleClickSteps = (event) => {
        event.preventDefault();
        this.setState({steps: [...this.state.steps,this.state.termSteps]});
        this.setState({termSteps:''});
    }
    onChangeSteps = (event) => {
        this.setState({termSteps: event.target.value})
    }
    render(){
        return(
            <div id="app">
                <h1>RecipeToPDF</h1>
                <Title handleClickTitle={this.handleClickTitle.bind(this)} onChangeTitle={this.onChangeTitle.bind(this)} title={this.state.title} titleTemp={this.state.titleTemp}/>
                <div className="container">
                    <Photo />
                    <ListForm handleClickList={this.handleClickList.bind(this)} onChangeList={this.onChangeList.bind(this)} term={this.state.termIgredients}  ingredients={this.state.ingredients}/>
                </div>
                <Steps handleClickSteps={this.handleClickSteps.bind(this)} onChangeSteps={this.onChangeSteps.bind(this)} term={this.state.termSteps}  steps={this.state.steps}/>
                <CtaPDF title={this.state.title} ingredients={this.state.ingredients} steps={this.state.steps}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, rootElement);