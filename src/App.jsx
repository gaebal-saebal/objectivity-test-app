import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Start } from './components/Start';
import { Test } from './components/Test';
import Footer from './components/Footer';
import Result from './pages/Result';
import { question001 } from '../constants';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BasicModal from './components/Modal';

// 시작페이지, 문항 컴포넌트 나와야 되는 페이지
function App() {
  const [step, setStep] = useState(0);
  const [correctArr, setCorrectArr] = useState([]);
  const [correctAmount, setCorrectAmount] = useState(0);
  const [checkArr, setCheckArr] = useState([]);
  const [checkAmount, setCheckAmount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const navigate = useNavigate();

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const handleStart = () => {
    setStep(step + 1);
  };

  const handleStepPlus = (page) => {
    // 1페이지 기준(2페이지)
    // checkArr의 index가 0, 1, 2(3, 4, 5)만 빼와서 배열을 만들고
    // slice(0,3) slice(3,6) slice(6,9) slice(9, 12)
    // 그 배열에 filter 해서 각 요소가 1인 것들만 골라서 배열을 만들고
    // 그 배열의 length가 3이면 다음으로 넘기고
    const tempArr = checkArr.slice(page * 3 - 3, page * 3);
    const result = tempArr.filter((e) => 1 === e).length;

    if (result === tempArr.length) {
      setStep(step + 1);
    } else {
      alert('모든 문항을 체크해 주세요');
    }
    // 안됐으면 alert 띄우고 막고
  };
  const handleStepMinus = () => {
    setStep(step - 1);
  };
  const handleSubmit = (page) => {
    const tempArr = checkArr.slice(page * 3 - 3, page * 3);
    const result = tempArr.filter((e) => 1 === e).length;
    // 0-20 : 0번 페이지
    // 21-40 : 1번 페이지
    // 41-60 : 2번 페이지
    // 61-80 : 3번 페이지
    // 81-100 : 4번 페이지
    // (맞춘갯수 / 11) * 100 => 총점
    let resultScore = Math.round((correctAmount / 11) * 100);

    if (result === tempArr.length) {
      navigate(`/result/${resultScore}`);
    } else {
      alert('모든 문항을 체크해 주세요');
    }
  };

  const getArr = () => {
    const arr = [];
    for (let i = 0; i < question001.questions.length; i++) {
      arr.push(0);
    }
    setCorrectArr(arr);
    setCheckArr(arr);
  };

  const getCorrectAmount = () => {
    let count = correctArr.filter((e) => 1 === e).length;
    setCorrectAmount(count);
  };
  const getCheckAmount = () => {
    let count = checkArr.filter((e) => 1 === e).length;
    setCheckAmount(count);
  };

  useEffect(() => {
    getArr();
  }, []);

  useEffect(() => {
    getCorrectAmount();
  }, [correctArr]);

  useEffect(() => {
    getCheckAmount();
  }, [checkArr]);

  return (
    <>
      <BasicModal
        modalOpen={modalOpen}
        handleClose={handleClose}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
      <Header
        handleOpen={handleOpen}
        setModalTitle={setModalTitle}
        setModalContent={setModalContent}
      />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Start step={step} onClick={handleStart} />
              <Test
                page={1}
                step={step}
                correctArr={correctArr}
                setCorrectArr={setCorrectArr}
                checkArr={checkArr}
                setCheckArr={setCheckArr}
                checkAmount={checkAmount}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={2}
                step={step}
                correctArr={correctArr}
                setCorrectArr={setCorrectArr}
                checkArr={checkArr}
                setCheckArr={setCheckArr}
                checkAmount={checkAmount}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={3}
                step={step}
                correctArr={correctArr}
                setCorrectArr={setCorrectArr}
                checkArr={checkArr}
                setCheckArr={setCheckArr}
                checkAmount={checkAmount}
                handleStepPlus={handleStepPlus}
                handleStepMinus={handleStepMinus}
              />
              <Test
                page={4}
                step={step}
                correctArr={correctArr}
                setCorrectArr={setCorrectArr}
                checkArr={checkArr}
                setCheckArr={setCheckArr}
                checkAmount={checkAmount}
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
      <Footer />
    </>
  );
}

export default App;
