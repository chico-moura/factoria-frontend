import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TopNavBar from 'modules/shared/top-nav-bar'
import Inicio from 'modules/inicio'
import Login from 'modules/login'
import views from 'modules/views';


function App() {
  return (
    <div className='App'>
      <Router>
        <TopNavBar/>
        <div className='main-div'>
            <Route path='/' exact component={Inicio}/>
            <Route path='/produtos' exact component={views.Produtos}/>
            <Route path='/clientes' exact component={views.Clientes}/>
            <Route path='/login' exact component={Login}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
