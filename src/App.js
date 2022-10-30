
import './App.css';
import Home from './component/Home';
import NavBar from './component/NavBar';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import About from './component/About';
import Contact from './component/Contact';
//import Login from './component/buttons/Login';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
       {/* <Route exact path="/Login" component={Login} />*/}
      </Switch>
    </>
  );
}

export default App;
