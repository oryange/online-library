import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookProvider from './context/bookProvider';
import UserProvider from './context/userProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <BookProvider>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Login }/>
            <Route exact path='/home' component={ Home }/>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </BookProvider>
  );
}

export default App;

