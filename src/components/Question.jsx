import { question001 } from '../../constants';

export const Question = () => {
  return (
    <div>
      <div>
        <span>{question001.questions[0].questionNo}.</span>
        {question001.questions[0].questionLabel}
      </div>
      <div>
        {question001.questions[0].options.map((option, i) => {
          return <div key={i}>{option.name}</div>;
        })}
      </div>
    </div>
  );
};
