import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import NotesApp from './components/NotesApp'
// import Login from './components/Login'
// import Register from './components/Register'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={NotesApp} />
          {/* <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} /> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
