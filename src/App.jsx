import React from 'react';
import { Header } from './components/Header';
import { Start } from './components/Start';
import { Test } from './components/Test';

// 시작페이지, 문항 컴포넌트 나와야 되는 페이지
function App() {
  return (
    <>
      <Header />
      <Start />
      <Test />
    </>
  );
}

export default App;
