import React, { Component } from 'react';

class Table extends Component {
    render(){
        const name = ["Women Saftey"]
        let i=0;
        return(
            <div>
                <h1>Hello world from {name[i]}</h1>
                <button onClick="{i++}">click here</button>
            </div>
        )
    }
}

export default Table;