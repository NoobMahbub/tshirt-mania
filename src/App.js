import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import OrderReview from './components/OrderReview/OrderReview';
import { Route, Routes } from 'react-router-dom';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}
// 54-1 er 7:14 minute

export default App;
