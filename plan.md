1. 시작페이지
   문항페이지(총 3개)
   =>single page

const [step, setStep] = useState(0)
const [correctAmount, setCorrectAmount] = useState(0)
const [score, setScore] = useState(0)

handleClick = () => {
setStep(step + 1);
}

handleGetResult = () => {
score 계산함 => score = Math.round((11/100)\*correctAmount)
계산한 score 바탕으로
0~20이면 결과페이지 1로(매우낮음)
21~40이면 결과페이지 2로(낮음)
41~60이면 결과페이지 3으로(평균)
61~80이면 결과페이지 4로(높음)
81~100이면 결과페이지 5로(매우높음)
redirect(Link)
}

<input type='radio' /> 사용하면 라디오 버튼 사용할 수 있음

{step === 0 ? <Start /> : null}
{step === 1 ? <Test1 /> : null}
{step === 2 ? <Test2 /> : null}
{step === 3 ? <Test3 /> : null}
이 방식으로 하면 이전 페이지로 돌아가기 했을 때 선택지가 저장이 안 될것
그러면 이전 페이지로 돌아가기는 만들 수 없고, 각 페이지에서 다음으로 넘어갈 때 마다 score에 점수를 누적해야 할거에요

or

<Start className={`${step} === 0 ? flex : hidden`} />
<Test testPage='1' className={`${step} === 1 ? flex : hidden`} />
<Test testPage='2' className={`${step} === 2 ? flex : hidden`} />
<Test testPage='3' className={`${step} === 3 ? flex : hidden`} />
이 방식으로 하면 이전 페이지로 돌아갈 수 있고, 선택지도 저장이 되겠죠?
(사실 잘 모름 해봐야 암)

2. 결과페이지(총 5개)
   공유하기(URL 복사 해서 공유)
   테스트 다시 하기(처음 페이지로 돌아가기 href="/")

   - 결과는 constants/result.js에 저장되어 있음
