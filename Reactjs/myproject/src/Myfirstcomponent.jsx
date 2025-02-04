import './Custom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Stack,Dropdown } from 'react-bootstrap';
// import {Stack} from 'react-bootstrap';
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
            <button className='btn btn-danger'>Cancel</button>
            <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>

<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    )
}
export default Myfirstcomponent