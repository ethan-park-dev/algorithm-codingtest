/**
 * 문제 15 요세푸스 문제
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/15.js
 *
 * 문제 설명:
 *  N명의 사람이 원 형태로 서 있습니다. 각 사람은 1번부터 N까지 번호표를 갖고 있습니다.
 *  그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
 *  - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 제거합니다.
 *  - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 제거합니다.
 *  N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution 함수를 완성하세요.
 *
 * 제약 조건
 *  - N과 K는 1이상 1000 이하의 자연수입니다.
 *
 * 입출력 예
 * - N: 5, K: 2, result: 3
 */

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

export default function solution(n, k) {
  const queue = new Queue();
  const result = [];

  for (let i = 1; i <= n; i++) {
    queue.push(i);
  }

  while (queue.size() > 0) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop());
    }
    result.push(queue.pop());
  }

  return result[result.length - 1];
}
