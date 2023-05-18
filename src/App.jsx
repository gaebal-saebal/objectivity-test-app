import React, { useState } from 'react';
import { Header } from './components/Header';
import { Start } from './components/Start';
import { Test } from './components/Test';
import Result from './pages/Result';

// 시작페이지, 문항 컴포넌트 나와야 되는 페이지
function App() {
  const [step, setStep] = useState(0);

  const handleStepPlus = () => {
    setStep(step + 1);
  };
  const handleStepMinus = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Header />
      <button onClick={handleStepMinus}>스텝빼기</button>
      <button onClick={handleStepPlus}>스텝늘리기</button>
      <div>현재 단계 : {step}단계</div>
      <Start step={step} />
      <Test page={1} step={step} onClick={handleStepPlus} />
      <Test page={2} step={step} onClick={handleStepPlus} />
      <Test page={3} step={step} onClick={handleStepPlus} />
      <Result />
    </>
  );
}

export default App;
