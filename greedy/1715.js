let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

//자바스크립트 클래스 생성
class MinHeap {
  //생성자
  constructor() {
    this.heap = [];
  }
  //힙 사이즈 크기 메서드
  getLength = () => {
    return this.heap.length;
  };
  //최초 값을 가져다가 배열에 넣을 푸쉬 메서드
  push = (node) => {
    //input값을 넣어준다.
    this.heap.push(node);
    //배열은0부터 시작하지만 크기는 1부터 시작하기 때문에 -1 처리
    //현재 값을 넣어준 위치이다.
    let i = this.heap.length - 1;
    //부모의 위치
    let parentI = Math.floor((i - 1) / 2);
    //현재 위치에서부터 맨위 상위까지 루프를 돌면서 현재위치 자신의 값과 부모의값을 비교 후 치환
    while (i > 0 && this.heap[parentI] > this.heap[i]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  };
  //가장 작은 수를 가져오고 다시 정렬하는 메서드
  pop = () => {
    //배열값이 하나뿐이면 그것이 최소값 -> 리턴
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    //맨위, 즉 제일 작은 값을 result에 저장한다.
    const result = this.heap[0];

    //그 후, 남은 값을 재정렬한다.
    this.heap[0] = this.heap.pop(); // 맨마지막 값을 맨 위로올려서
    let i = 0;
    //맨 위부터 루프를 돌면서 값을 치환한다.
    while (true) {
      const leftI = i * 2 + 1,
        rightI = i * 2 + 2;
      if (leftI >= this.heap.length) {
        break;
      }
      let nextI = i;
      //왼쪽을 먼저 비교하고
      if (this.heap[nextI] > this.heap[leftI]) {
        nextI = leftI;
      }
      //오른쪽을 비교한다.
      if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
        nextI = rightI;
      }
      //값이 바뀌지 않았으면 리턴, 즉 현재 값이 더 작다는뜻
      if (nextI === i) {
        break;
      }
      this.swap(i, nextI);
      i = nextI;
    }
    return result;
  };
  //값을 스왑해주는 메서드
  swap = (a, b) => {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  };
}

sol(input);

function sol(input) {
  const minHeap = new MinHeap();
  for (let i = 1; i < input.length; i++) {
    minHeap.push(+input[i]);
  }

  let totalCompareCount = 0;
  while (minHeap.getLength() > 1) {
    //제일 작은 두 수를 구하고
    let aCount = minHeap.pop();
    let bCount = minHeap.pop();
    //더하고
    let compareCount = aCount + bCount;
    //더한 값을 누적으로 저장
    totalCompareCount += compareCount;
    //제일 작은 두 수를 더한 것을 배열에 다시 넣어준다.
    minHeap.push(compareCount);
  }
  console.log(totalCompareCount);
}
