import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookProvider from './context/bookProvider';
import UserProvider from './context/userProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import Information from './pages/Information';

function App() {
  return (
    <BookProvider>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Login }/>
            <Route exact path='/home' component={ Home }/>
            <Route path='/information' component={ Information }/>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </BookProvider>
  );
}

export default App;

