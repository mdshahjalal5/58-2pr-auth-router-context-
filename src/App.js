import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './layouts/Main';
import { SideEffect } from './sideEffect/sideEffect';



function App() {

  return (
     <>
     <SideEffect></SideEffect>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/home'  element={<Home></Home>}></Route>
      </Routes> 
     </>
  );
}

export default App;
