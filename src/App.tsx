
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/greeting';

function App() {

  var name : string = 'hassen'
  return (
    <>
      {/*code 1 conv*/}
       <div>Code 1 :</div>
      <Greeting name={name} />
      {/*code  2 conv */}
      <div>Code 2 :</div>
      <Counter/>
    </>
 
  );
}

export default App;
