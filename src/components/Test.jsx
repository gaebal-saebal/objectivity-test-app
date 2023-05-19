import { Button } from '@mui/material';
import { question001 } from '../../constants';
import { Question } from './Question';

export const Test = ({
  page,
  step,
  correctArr,
  setCorrectArr,
  checkArr,
  setCheckArr,
  checkAmount,
  handleStepPlus,
  handleStepMinus,
  handleSubmit,
}) => {
  const idx = page * 3;
  const totalPage = Math.ceil(question001.questions.length / 3);
  const progress = Math.round(((page - 1) / totalPage) * 100);

  return (
    <div className={step === page ? 'flex' : 'hidden'}>
      <div className='flex flex-col px-10 mb-16'>
        <div className='flex justify-end mb-3'>
          <span className='font-bold'>{`${page}/${totalPage} `}</span>
          Page
          <span className='ml-10 font-bold'>
            {`${checkAmount}/${question001.questions.length} `}
          </span>
          문항
        </div>
        <div className='w-[100%] h-2 bg-gray-200 rounded-lg'>
          <div
            className='z-10 h-2 bg-orange-500 rounded-lg'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className='graybox'>{question001.questionExample}</div>
        <Question
          correctArr={correctArr}
          setCorrectArr={setCorrectArr}
          checkArr={checkArr}
          setCheckArr={setCheckArr}
          questionNo={idx - 2}
        />
        {question001.questions[idx - 2] === undefined ? null : (
          <Question
            correctArr={correctArr}
            setCorrectArr={setCorrectArr}
            checkArr={checkArr}
            setCheckArr={setCheckArr}
            questionNo={idx - 1}
          />
        )}
        {question001.questions[idx - 1] === undefined ? null : (
          <Question
            correctArr={correctArr}
            setCorrectArr={setCorrectArr}
            checkArr={checkArr}
            setCheckArr={setCheckArr}
            questionNo={idx}
          />
        )}
        <div className='flex justify-center'>
          <Button
            variant='contained'
            style={{
              marginTop: '2rem',
              marginRight: '0.5rem',
              width: '70px',
            }}
            onClick={handleStepMinus}
          >
            {page === 1 ? '처음' : '이전'}
          </Button>
          <Button
            variant='contained'
            style={{
              marginTop: '2rem',
              width: '70px',
            }}
            onClick={page === totalPage ? () => handleSubmit(page) : () => handleStepPlus(page)}
          >
            {page === totalPage ? '제출' : '다음'}
          </Button>
        </div>
      </div>
    </div>
  );
};
