import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Beauty from './components/Beauty';
import Computing from './components/Computing';
import Fashion from './components/Fashion';
import Garden from './components/Garden';
import Header from './components/Header'
import Health from './components/Health';
import Phone from './components/Phone';
import Sports from './components/Sports';
import HomeOffice from './components/HomeOffice';
import ToggleMenu from './components/ToggleMenu';
import { fetchPosts } from './Redux/Actions/FetchPosts'
import CartArea from './components/CartArea';


function App() {
  const [Show, setShow] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <div className="app">
      <Header setShow={setShow} />
      {Show ? <ToggleMenu setShow={setShow} /> : false}


      <Switch>
        <Route exact path='/beauty'>
          <Beauty />
        </Route>
        <Route exact path='/computing'>
          <Computing />
        </Route>

        <Route exact path='/fashion'>
          <Fashion />
        </Route>
        <Route exact path='/garden'>
          <Garden />
        </Route >
        <Route exact path='/health'>
          <Health />
        </Route>
        <Route exact path='/home'>
          <HomeOffice />
        </Route>
        <Route exact path='/sports'>
          <Sports />
        </Route>
        <Route exact path='/phone'>
          <Phone />
        </Route>
        <Route exact path='/cart'>
          <CartArea />
        </Route>




      </Switch>

    </div >



  );
}

export default App;
