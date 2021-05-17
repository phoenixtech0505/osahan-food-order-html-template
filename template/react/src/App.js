import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import Offers from './components/Offers';
import MyAccount from './components/MyAccount';
import List from './components/List';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';
import Extra from './components/Extra';
import Login from './components/Login';
import Register from './components/Register';
import TrackOrder from './components/TrackOrder';
import Invoice from './components/Invoice';
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-select2-wrapper/css/select2.css';
import './App.css';

class App extends React.Component  {
  render() {
    return (
      <>
          {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Header/>:''
          }
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/offers" exact component={Offers} />
            <Route path="/listing" exact component={List} />
            <Route path="/myaccount" component={MyAccount} />
            <Route path="/404" exact component={NotFound} />
            <Route path="/extra" exact component={Extra} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/track-order" exact component={TrackOrder} />
            <Route path="/invoice" exact component={Invoice} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/thanks" exact component={Thanks} />
            <Route path="/detail" exact component={Detail} />
            <Route exact component={NotFound} />
          </Switch>
          {
            (this.props.location.pathname!=='/login' && this.props.location.pathname!=='/register') ? <Footer/>:''
          }
      </>
    );
  }
}

export default App;
