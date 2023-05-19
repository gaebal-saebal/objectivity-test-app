import { question001 } from '../../constants';

export const Question = ({ correctArr, setCorrectArr, checkArr, setCheckArr, questionNo }) => {
  const handleClick = (e) => {
    const tempArr = [...correctArr];
    e.target.value === 'true' ? (tempArr[e.target.name] = 1) : (tempArr[e.target.name] = 0);
    setCorrectArr(tempArr);

    const tempArr2 = [...checkArr];
    tempArr2[e.target.name] = 1;
    setCheckArr(tempArr2);
  };

  const questionNumber = questionNo - 1;
  return (
    <div>
      <div className='mb-5'>
        <span>{question001.questions[questionNumber].questionNo}.</span>
        {question001.questions[questionNumber].questionLabel}
      </div>
      <div className='bg-pink-100 '>
        {question001.questions[questionNumber].options.map((option, i) => {
          return (
            <div key={i} className='h-10 flex items-center '>
              <input
                type='radio'
                value={option.answer}
                name={questionNumber}
                id={`${questionNumber}-${i}`}
                onClick={handleClick}
                className='hidden'
              />
              {/* 텍스트 클릭해도 체크될 수 있도록 하기 위해서 */}
              <label htmlFor={`${questionNumber}-${i}`} className='cursor-pointer '>
                {option.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
