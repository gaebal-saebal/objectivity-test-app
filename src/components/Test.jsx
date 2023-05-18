import { Button } from '@mui/material';
import { question001 } from '../../constants';
import { Question } from './Question';

export const Test = ({
  page,
  step,
  correctArr,
  setState,
  handleStepPlus,
  handleStepMinus,
  handleSubmit,
}) => {
  const idx = page * 3;
  const totalPage = Math.ceil(question001.questions.length / 3);
  const progress = Math.round(((page - 1) / totalPage) * 100);

  return (
    <div className={step === page ? 'flex' : 'hidden'}>
      <div className='flex flex-col'>
        <div className='mb-3'>
          {page}/{totalPage} (문항갯수/{question001.questions.length})
        </div>
        <div className='w-[100%] h-2 bg-gray-200'>
          <div className='z-10 h-2 bg-blue-600' style={{ width: `${progress}%` }}></div>
        </div>
        <div className='p-3 mt-5 bg-gray-200'>{question001.questionExample}</div>
        <Question correctArr={correctArr} setState={setState} questionNo={idx - 2} />
        {question001.questions[idx - 2] === undefined ? null : (
          <Question correctArr={correctArr} setState={setState} questionNo={idx - 1} />
        )}
        {question001.questions[idx - 1] === undefined ? null : (
          <Question correctArr={correctArr} setState={setState} questionNo={idx} />
        )}
        <div>
          <Button
            variant='contained'
            style={{
              marginTop: '2rem',
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
            onClick={page === totalPage ? handleSubmit : handleStepPlus}
          >
            {page === totalPage ? '제출' : '다음'}
          </Button>
        </div>
      </div>
    </div>
  );
};
