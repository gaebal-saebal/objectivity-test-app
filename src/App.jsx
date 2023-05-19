import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Start } from './components/Start';
import { Test } from './components/Test';
import Result from './pages/Result';
import { question001 } from '../constants';
import { Routes, Route, useNavigate } from 'react-router-dom';

// 시작페이지, 문항 컴포넌트 나와야 되는 페이지
function App() {
  const [step, setStep] = useState(0);
  const [correctArr, setCorrectArr] = useState([]);
  const [correctAmount, setCorrectAmount] = useState(0);

  const navigate = useNavigate();

  const handleStepPlus = () => {
    setStep(step + 1);
  };
  const handleStepMinus = () => {
    setStep(step - 1);
  };
  const handleSubmit = () => {
    // 0-20 : 0번 페이지
    // 21-40 : 1번 페이지
    // 41-60 : 2번 페이지
    // 61-80 : 3번 페이지
    // 81-100 : 4번 페이지
    // (맞춘갯수 / 11) * 100 => 총점
    let resultScore = Math.round((correctAmount / 11) * 100);

    navigate(`/result/${resultScore}`);
  };

  const getArr = () => {
    const arr = [];
    for (let i = 0; i < question001.questions.length; i++) {
      arr.push(0);
    }
    setCorrectArr(arr);
  };

  const getCorrectAmount = () => {
    let count = correctArr.filter((e) => 1 === e).length;
    setCorrectAmount(count);
  };

  useEffect(() => {
    getArr();
  }, []);

  useEffect(() => {
    getCorrectAmount();
  }, [correctArr]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Start step={step} onClick={handleStepPlus} />
              <Test
                page={1}
                step={step}
                correctArr={correctArr}
                setState={setCorrectArr}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={2}
                step={step}
                correctArr={correctArr}
                setState={setCorrectArr}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={3}
                step={step}
                correctArr={correctArr}
                setState={setCorrectArr}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={4}
                step={step}
                correctArr={correctArr}
                setState={setCorrectArr}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
                handleSubmit={handleSubmit}
              />
            </>
          }
        />
        <Route path='/result/:id' element={<Result />} />
        <Route path='*' element={<div>404 Error</div>} />
      </Routes>
      <div>정답지 : {correctArr}</div>
      <div>맞춘 갯수 : {correctAmount}</div>

      {/* <Result /> */}
    </>
  );
}

export default App;
