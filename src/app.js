import React from 'react';
import './index.css';
import ListForm from './components/formlist';
import Steps from './components/steps';
import Photo from './components/photo';
import CtaPDF from './components/ctapdf';
import Title from './components/title';

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="app">
                <h1>RecipeToPDF</h1>
                <Title />
                <div className="container">
                    <Photo />
                    <ListForm />
                </div>
                <Steps />
                <CtaPDF />
            </div>
        )
    }
}

export default App;