//Styles
import './App.css';
import { AppRoutes } from './routes/appRoutes';
import { BrowserRouter as Router } from 'react-router-dom';


//Components Views
//import { Home } from './pages/homeview/home';
//import { LoginUser } from './pages/login/loginUser';


function App() {
  return (
    <>

      <Router>
        <AppRoutes />
      </Router>
      {/*<Home />*/}
      {/* <LoginUser /> */}
    </>
  );
}

export default App;
