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
    <div className='pb-5'>
      <div className='mb-5'>
        <span>{`${question001.questions[questionNumber].questionNo}. `}</span>
        {question001.questions[questionNumber].questionLabel}
      </div>
      <div className='border rounded-lg'>
        {question001.questions[questionNumber].options.map((option, i) => {
          return (
            <div key={i} className='relative flex items-center h-10 border-b last:border-b-0'>
              <input
                type='radio'
                value={option.answer}
                name={questionNumber}
                id={`${questionNumber}-${i}`}
                onClick={handleClick}
                className={`w-[100%] h-10 px-3 appearance-none absolute hover:bg-[#ece4ff] ${
                  i === 0 ? 'rounded-t-lg' : i === 2 ? 'rounded-b-lg' : ''
                } checked:bg-[#d4c0ff] transition`}
              />
              {/* 텍스트 클릭해도 체크될 수 있도록 하기 위해서 */}
              <label
                htmlFor={`${questionNumber}-${i}`}
                className='flex items-center cursor-pointer w-[100%] h-[100%] z-10 px-3'
              >
                {option.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
