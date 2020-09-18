import React from 'react'
import TopNavBar from './modules/top-nav-bar'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import pages from './pages'

function App() {
  return (
    <div className='App'>
      <Router>
        <TopNavBar />
        <div className='main-div'>
            <Route path='/' exact component={pages.Inicio}/>
            <Route path='/produtos' exact component={pages.Produtos}/>
            <Route path='/login' exact component={pages.Login}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
