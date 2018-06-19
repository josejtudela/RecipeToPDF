import React from 'react';

export default class Title extends React.Component{
    render(){
        const title = this.props.title?this.props.title[0].toUpperCase()+this.props.title.slice(1):'';
        const titleTemp = this.props.titleTemp;
        const nameSubmit = this.props.title?'Cambia Título':'Título';
        return(
            <form onSubmit={this.props.handleClickTitle}>
                <input type="text" placeholder='Título de tu Receta' value={titleTemp} onChange={this.props.onChangeTitle}/>
                <input type="submit" value={nameSubmit} disabled={!titleTemp}/>
                <h2>{title}</h2>
            </form> 
        );
    }
}