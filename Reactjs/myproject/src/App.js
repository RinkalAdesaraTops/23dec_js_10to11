import logo from './logo.svg';
import './App.css';
import Myfirstcomponent from './Myfirstcomponent';
import Secondcomponent from './Secondcomponent';
import Styledcomponent from './Styledcomponent';

function App() {
  console.log('app component called..');
  let name="Test123"
  return (
    <div >
      <Myfirstcomponent />
      <h3>My Component</h3>
      <h4>Hello</h4>
      <h4>My Name is -- {name}</h4>
      <h4>Addition is -- {2+4}</h4>
      {/* <Secondcomponent /> */}
      <Styledcomponent />
    </div>
  );
}

export default App;
