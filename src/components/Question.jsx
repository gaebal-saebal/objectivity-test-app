import { question001 } from '../../constants';

export const Question = ({ questionNo }) => {
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
            <div key={i} value={option.answer}>
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
