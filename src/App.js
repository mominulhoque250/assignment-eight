import './App.css';
import AllProduct from './components/AllProduct/AllProduct';
import Cart from './components/Cart';
import Question from './components/Question';
import SingleProduct from './components/SingleProduct/SingleProduct';


function App() {
  return (
    <div className="App">
      <AllProduct></AllProduct>
      <SingleProduct></SingleProduct>
      <Question></Question>

    </div>

  );
}

export default App;
