import { Component } from "react";

class Classcomponent extends Component{

    constructor(props){
        super(props)
        this.a = 10
        this.state = {
            name:"abc",
            age:25
        }
        
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){
        this.setState({
            name:"XYZ"
        })
    }
    handleAge = ()=>{
        this.setState({
            age:30
        })
    }
    render(){
        return (
            <div>
                <h3>Class component Example</h3>
                <h4>A is {this.a}</h4>
                <h4>Props Name is-- {this.props.name} </h4>
                <h4>Name is {this.state.name} </h4>
                <h4>Age is {this.state.age} </h4>
                <button onClick={this.handleChange}>Change Name</button>
                <button onClick={this.handleAge}>Change AGe</button>
            </div>
        )
    }
}
export default Classcomponent