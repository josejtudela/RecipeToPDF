import React from 'react';

export default class Photo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img src="https://source.unsplash.com/300x200/?food"/>
        )
    }
}