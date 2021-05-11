import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { API } from './api-service';
import Footer from './components/Footer';
import Mobile from './components/Footer/Mobile';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductDetails from './screens/ProductDetails';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import Seller from './screens/seller';
import VeifyScreen from './screens/VeifyScreen';

function App() {

  const [refresh, setRefresh] = useState(localStorage.getItem('refresh_token'));

  useEffect(() => {
    if (refresh && refresh !== 'undefined') {
      API.updateAccess({ refresh: refresh })
        .then(resp => {
          localStorage.setItem('access_token', resp.access)
        })
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <div style={{ minHeight: '100vh' }}>
          <Route name="Home" exact path="/" component={HomeScreen} />
          <Route name="ProductPage" path="/product" component={ProductScreen} />
          <Route name="Seller" path="/seller" component={Seller} />
          <Route name="ProductDetails" path="/view" component={ProductDetails} />
          <Route name="Login" path="/login" component={LoginScreen} />
          <Route name="Register" exact path="/register" component={RegisterScreen} />
          <Route name="Verify Email" path="/register/verify" component={VeifyScreen} />
        </div>
        <footer>
          <Footer />
          <Mobile />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
