import React, {Component} from 'react'  

class ToDos extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.props.listName}</h2>
            </div>
        )
    }
}


export default ToDos