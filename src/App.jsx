import { useState } from 'react'
import { Navbar, Welcome, Footer, Services, Transactions, Myfooter, Main, Wallet } from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const App = () => {

  return (
    <Router>
            <div className='navbar-color'>
              <Navbar/>
            </div>
      <Switch>
        <Route exact path='/'>
          <div className="min-h-screen">
            <div className='main-grad'>
              <Main/>
              <Services/>
           </div>
           <div className='gradient-bg-welcome'>
             <Welcome/>
           </div>
           
            </div>
        </Route>
        <Route exact path='/transactions'>
          <div className='gradient-bg-welcome'>
            <Transactions/>
          </div>
        </Route>
        <Router exact path = '/wallet'>
          <div className='gradient-bg-welcome min-h-screen'>
            <Wallet/>
          </div>
        </Router>  
      </Switch>
      <div className='blue-glassmorphism-norad'>
        <Myfooter/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
