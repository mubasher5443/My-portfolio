import React, { useContext } from 'react'
import { Layout } from './Component/Layout/Layout';
import ScrollToTop from "react-scroll-to-top";
import ThemeProvider from './Context/ThemeContext';
import { ThemeContext } from './Context/Darkmode';


const App = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <>
           <div style={theme.data}>

      <Layout />
      </div>
      <div className=''>
        <ScrollToTop smooth style={{backgroundColor:"#217782", borderRadius:"100%", color:"white" }}/>
      </div>
    </>
  )
}

export default App;
