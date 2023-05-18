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
  const handleSubmit = () => {
    alert('제출했어요');
  };

  return (
    <>
      <Header />
      <Start step={step} onClick={handleStepPlus} />
      <Test
        page={1}
        step={step}
        handleStepPlus={handleStepPlus}
        handleStepMinus={handleStepMinus}
      />
      <Test
        page={2}
        step={step}
        handleStepPlus={handleStepPlus}
        handleStepMinus={handleStepMinus}
      />
      <Test
        page={3}
        step={step}
        handleStepPlus={handleStepPlus}
        handleStepMinus={handleStepMinus}
      />
      <Test
        page={4}
        step={step}
        handleStepPlus={handleStepPlus}
        handleStepMinus={handleStepMinus}
        handleSubmit={handleSubmit}
      />
      {/* <Result /> */}
    </>
  );
}

export default App;
