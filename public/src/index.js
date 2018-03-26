import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import Nav from './containers/Navigation/nav';
import Homepage from './components/Homepage/Homepage';
import AboutProject from './components/AboutProject/about_project';
import Cooperation from './components/Cooperation/cooperation';
import Gallery from './components/Gallery/gallery';
import Contact from './components/Contact/contact';
import Profile from './containers/Profile/profile';
import Login from './containers/Login/login';
import Register from './containers/Register/register';
import Footer from './components/Footer/footer';
import EventsList from './containers/EventsList/AllEventsList/events-list';
import UserEventsList from './containers/EventsList/UserEventsList/user-events-list';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/wydarzenia" component={ EventsList } />
          <Route path="/o-projekcie" component={ AboutProject } />
          <Route path="/wspolpraca" component={ Cooperation } />
          <Route path="/galeria" component={ Gallery } />
          <Route path="/logowanie" component={ Login } />
          <Route path="/rejestracja" component={ Register } />
          <Route path="/kontakt" component={ Contact } />
          <Route path="/profil" component={ Profile } />
          <Route path="/" component={ Homepage } />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));