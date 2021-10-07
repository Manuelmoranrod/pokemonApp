import React from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Form from '../Form/Form';
import Details from '../Details/Details';
import Error from '../Error/Error';
import First from '../First/First';


const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" component={First} exact />
        <Route path="/new" component={Form} />
        <Route path="/pokemon/:id" component={Details} />
        <Route path="/search" component={Home} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default Main



