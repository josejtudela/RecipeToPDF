import React from 'react';
import { connect } from 'react-redux';
const jsPDF = require('jspdf');

class CtaPDF extends React.Component{
    handlerPDF = () =>{
        const title = this.props.data.titleComponent.title;
        const ingredients = this.props.data.ingredientsComponent.ingredients;
        const steps = this.props.data.stepsComponent.steps;

        var doc = new jsPDF()
        let line = 20;
        doc.setFontSize(25);
        doc.text(title[0].toUpperCase()+title.slice(1), 15, line)
        line += 10;
        doc.setFontSize(15);
        doc.text('Ingredientes:', 15, line)
        doc.setFontSize(10);
        line += 5;
        for(let ingredient of ingredients){
            doc.text('- '+ingredient[0].toUpperCase()+ingredient.slice(1), 20, line)
            line += 5;
        }
        line += 5;
        doc.setFontSize(15);
        doc.text('Pasos a seguir:', 15, line)
        line += 5;
        doc.setFontSize(10);
        let index = 1;
        for(let step of steps){
            doc.text(index+'.- '+step[0].toUpperCase()+step.slice(1), 20, line)
            line += 5;
            index++;
        }
        doc.save(title+'.pdf')
    }
    render(){
        let disabled;
        const title = this.props.data.titleComponent.title;
        const ingredients = this.props.data.ingredientsComponent.ingredients;
        const steps = this.props.data.stepsComponent.steps;
        if(title !== '' && steps.length > 0 && ingredients.length > 0){
            disabled = false;
        } else {
            disabled = true;
        }
        return(
            <button onClick={this.handlerPDF} disabled={disabled}>toPDF</button>
        )
    }
        
}

const mapStateToProps = (state) => ({data: state});

const CtaPDFConnected = connect( mapStateToProps )(CtaPDF);

export default CtaPDFConnected;