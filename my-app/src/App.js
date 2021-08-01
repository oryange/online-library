import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookProvider from './context/bookProvider';
import UserProvider from './context/userProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Library from './pages/Library'

function App() {
  return (
    <BookProvider>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={ Login }/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/library' component={ Library }/>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </BookProvider>
  );
}

export default App;

