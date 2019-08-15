import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
)