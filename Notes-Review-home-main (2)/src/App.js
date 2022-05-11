import './App.css';
import LogInButton from './Components/LogInButton';
import './Components/LogInButton.css';
import SignInButton from './Components/SignInButton';
import './Components/SignInButton.css';
import Search from './Components/Search';
import './Components/Search.css';
import Home from './Components/Home';
import './Components/Home.css';
import Upload from './Components/Upload';
import './Components/Upload.css';

function setToken(userToken){
  sessionStorage.setItem('token',JSON.stringify(userToken))
}

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  console.log ("Token String" + tokenString);
  const userToken=JSON.parse(tokenString);  
  console.log ("userToken" + userToken);
  return userToken;
}

import {
  BrowserRouter as Router,  
  Routes,
  Route,  
} from "react-router-dom";

function App() {
  const isUserLoggedIn = getToken()?true:false;
  return (
    <>
      <Routes>
          <Route exact path="/logInForm" element={<LogInButton setToken ={setToken}/>}/>
          <Route exact path="/signInForm" element={<SignInButton/>}/>
          <Route exact path="/search" element={isUserLoggedIn ? <Search/> : <LogInButton setToken = {setToken}/>}/>
          <Route exact path="/upload" element={isUserLoggedIn ? <Upload/> : <LogInButton setToken = {setToken}/>}/>
          <Route exact path="/" element={<Home/>}/>          
       </Routes>
    </>
  );
}

export default App;
