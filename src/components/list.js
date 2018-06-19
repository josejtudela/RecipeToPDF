import React from 'react';

const List = props =>{
        return(
                props.items.map((item,index)=><li key={index}>{item[0].toUpperCase()+item.slice(1)}</li>)
        )
}

export default List;