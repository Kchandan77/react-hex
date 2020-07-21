import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch,} from 'react-router-dom';
import Hex from './Hex'
import Refer from './Refer'
import Stake from './Stake'
import Claim from './Claim'
import Transfer from './Transfer'
import Transform from './Transform'


 class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
      <Router>
        <main>
          <nav>
            <ul>
            <li><Link className="routerLink" to="/">Hex</Link></li>
           <li><Link className="routerLink" to='/refer'>Refer</Link></li>
           <li><Link className="routerLink" to='/stake'>Stake</Link></li>
           <li><Link className="routerLink" to='/claim'>Claim</Link></li>
           <li><Link className="routerLink" to='/transfer'>Transfer</Link></li>
           <li><Link className="routerLink" to='/transform'>Transform</Link></li>
            </ul>
          </nav>
          <Switch>
          <Route path='/' exact component={Hex} />
          <Route path='/refer' component={Refer} />
          <Route path='/stake' component={Stake} />
          <Route path='/claim' component={Claim} />
          <Route path='/transfer' component={Transfer} />
          <Route path='/transform' component={Transform} />
          
          </Switch>
         
        </main>
      </Router>
    </div>
    )
  }
}


export default Navigation
