import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import TopNavBar from 'modules/top-nav-bar'
import pages from 'pages'
import views from 'modules/views';

function App() {
  return (
    <div className='App'>
      <Router>
        <TopNavBar/>
        <div className='main-div'>
            <Route path='/' exact component={pages.Inicio}/>
            <Route path='/produtos' exact component={views.Produtos}/>
            <Route path='/clientes' exact component={views.Clientes}/>
            <Route path='/login' exact component={pages.Login}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
