import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import HeaderCreate from './components/header'
import MainContents from './components/contents';
import Footer from './components/footer';

function App() {

  return(
    <>
      <HeaderCreate/>
      <MainContents/>
      <Footer/>
    </>
  )
  
  
}

export default App;
