import './Custom.css'
const Myfirstcomponent = ()=>{
    const myStyle = {
        color:'blue',
        backgroundColor:'yellowgreen'
    }
    return (
        <div>
            <h3 style={{color:'red',backgroundColor:'yellow'}}>My First component created...</h3>
            <h4 style={myStyle}>Hello..</h4>
            <button className='abc'>Data Add</button>
        </div>
    )
}
export default Myfirstcomponent