import { question001 } from '../../constants';

export const Question = ({ correctArr, setState, questionNo }) => {
  const handleClick = (e) => {
    const tempArr = [...correctArr];
    e.target.value === 'true' ? (tempArr[e.target.name] = 1) : (tempArr[e.target.name] = 0);
    setState(tempArr);
    // 그 해당 input을 클릭했을때 true면 +1 false면 그대로
    // 선택지 true를 골랐는데 이후에 false를 클릭하면 -1
    // 문제 정답지
    // [0,0,0,0,0,0]

    // 1. true를 클릭함
    // arr[0] = 1
    // 2. false를 클릭함
    // arr[0] = 0
  };

  const questionNumber = questionNo - 1;
  return (
    <div>
      <div>
        <span>{question001.questions[questionNumber].questionNo}.</span>
        {question001.questions[questionNumber].questionLabel}
      </div>
      <div>
        {question001.questions[questionNumber].options.map((option, i) => {
          return (
            <div key={i}>
              <input
                type='radio'
                value={option.answer}
                name={questionNumber}
                id={`${questionNumber}-${i}`}
                onClick={handleClick}
              />
              {/* 텍스트 클릭해도 체크될 수 있도록 하기 위해서 */}
              <label htmlFor={`${questionNumber}-${i}`}>{option.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
