import React, { Component } from 'react';


class List extends Component{
    render(){
        return(
            <div className="list">
                <p>Você tem {this.props.quantity} tarefas</p>
                <ul>
                    {
                        this.props.items.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default List;



