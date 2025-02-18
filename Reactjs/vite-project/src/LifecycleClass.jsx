import React, { Component } from 'react'

class LifecycleClass extends Component {
    constructor(){
        console.log('constructor called..');
        
        super()
        this.state = {
            num:1,
            name:"abc"
        }
    }
    componentDidMount(){
        console.log("componentDidMount called...");
        setTimeout(()=>{
            this.setState({
                num:this.state.num+1
            })
        },3000)
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called..");
        console.log(state);    
        return null    
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("old value");
        console.log(prevState);   
        return null
    }
    componentDidUpdate(){
        console.log("Finally updated...");
        
    }
    render() {
        console.log("render called..");
        
        return (
            <>
                <div>
                    <h3>Lifecycle Example</h3>
                    <h4>Number is -- {this.state.num} </h4>
                    <h4>Name is-- {this.state.name} </h4>
                </div>
                <section></section>
            </>
        )
    }
}
export default LifecycleClass
