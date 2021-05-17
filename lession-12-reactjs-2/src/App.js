import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import Postspage from './pages/Posts'
import './App.css';

function App() {

  return (
    <div className="app">
      <Router >
        <Header />
        <Switch>
          <Redirect exact from="/" to="/sign-in"/>

            <Route path="/home" component={Homepage} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/posts" component={Postspage} />
            <Route path="/" component={NotFound} />
           

        </Switch >

          <Footer />
    </Router>
    </div>

  );
}

export default App;
