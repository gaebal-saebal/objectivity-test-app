// 서버에서 받아온 question data 라고 생각합시다
// fetch의 결과로 받은 response입니다
// TODO: 이 response를 브라우저에 출력해주세요
const question001 = {
  testName: '객관성 테스트',
  description: '나의 객관성이 얼마나 높은지 알려주는 객관성 테스트입니다. 각 문항마다 정답이라고 판단되는 것을 체크하시면 됩니다. 검사를 시작하시려면 시작 버튼을 눌러주세요.',
  questionExample:
    '한 상인이 상점 안의 전기불을 껐을 때 한 남자가 나타나 돈을 요구했다. 주인이 금전등록기를 열었다. 그는 금전등록기에 있던 것을 꺼냈고 남자는 재빨리 상점 밖으로 사라졌다. 한 경관에게 즉시 이 사실이 알려졌다.',
  questions: [
    {
      questionNo: 1,
      questionLabel: '주인이 전기불을 껐을 때 한 남자가 나타났다.',
      options: [
        { name: '그렇다', answer: false },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: true },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 2,
      questionLabel: '그 남자는 강도였다.',
      options: [
        { name: '그렇다', answer: false },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: true },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 3,
      questionLabel: '금전등록기를 연 사람은 주인이었다.',
      options: [
        { name: '그렇다', answer: true },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: false },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 4,
      questionLabel: '상점 주인이 금전등록기를 열자 남자는 기뻐했다.',
      options: [
        { name: '그렇다', answer: false },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: true },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 5,
      questionLabel: '누군가가 금전등록기를 열었다.',
      options: [
        { name: '그렇다', answer: true },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: false },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 6,
      questionLabel: '한 남자가 금전등록기를 열고 돈을 꺼냈다.',
      options: [
        { name: '그렇다', answer: false },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: true },
        { name: '아니다', answer: false },
      ],
    },
    {
      questionNo: 7,
      questionLabel: '금전등록기에서 꺼낸 것을 누가 가져갔는지는 밝혀지지 않았다.',
      options: [
        { name: '그렇다', answer: true },
        { name: '맞을 수도 있고 틀릴 수도 있다', answer: false },
        { name: '아니다', answer: false },
      ],
    },
  ],
};

export default question001;
