import React, {useEffect} from 'react';
// routes
import {  Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Router from './routes';
// theme
import ThemeProvider from './theme';

// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import SignUp from "./pages/Signup"
import NewRegister from './pages/NewRegister';
import { auth } from './redux/firebase';
import { setUser } from './redux/action';

// ----------------------------------------------------------------------

export default function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch(setUser(authUser));
      }else{
        dispatch(setUser(null));
      }
    })
  }, [dispatch])
  return (
    // <ThemeProvider>
    //   <ScrollToTop />
    //   <BaseOptionChartStyle />
    //   <Router />
    // </ThemeProvider>
    <ThemeProvider>
    <div className='App'>
    <Routes>
      <Route exact path='/' element={<SignUp/>}/>
      <Route path='/newregister' element={<NewRegister/>}/>
      <Route exact path='/baseoptionchartstyle' element={<BaseOptionChartStyle/>}/>
    </Routes>
    </div>
    </ThemeProvider>
  
    
  );
}
