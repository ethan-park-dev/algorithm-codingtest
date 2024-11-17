/**
 * 트리 순회
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/26.js
 *
 * 문제 설명
 *  이진 트리를 표현한 배열 nodes를 인자로 받습니다. 예를 들어서 nodes가 [1, 2, 3, 4, 5, 6, 7]이면,
 *  다음과 같은 트리를 표현한 것입니다. 해당 이진 트리에 대하여 전위 순회, 중위 순회, 후위 순회 결과를
 *  반환하는 solution 함수를 완성해주세요.
 *
 * 제약 조건
 *  - 입력 노드값의 개수는 1개 이상 1,000개 이하이다.
 *  - 노드값은 정수형이며, 중복되지 않는다.
 *
 * 입출력 예
 *  - nodes: [1, 2, 3, 4, 5, 6, 7], return: [[1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1]]
 */

// export default function solution(nodes) {
//   const preorder = (nodes, index) => {
//     if (index >= nodes.length) return '';

//     let ret = `${nodes[index]} `;
//     ret += preorder(nodes, index * 2 + 1);
//     ret += preorder(nodes, index * 2 + 2);

//     return ret;
//   };

//   const inorder = (nodes, index) => {
//     if (index >= nodes.length) return '';

//     let ret = inorder(nodes, index * 2 + 1);
//     ret += `${nodes[index]} `;
//     ret += inorder(nodes, index * 2 + 2);
//     return ret;
//   };

//   const postorder = (nodes, index) => {
//     if (index >= nodes.length) return '';

//     let ret = postorder(nodes, index * 2 + 1);
//     ret += postorder(nodes, index * 2 + 2);
//     ret += `${nodes[index]} `;
//     return ret;
//   };

//   return [
//     preorder(nodes, 0).slice(0, -1),
//     inorder(nodes, 0).slice(0, -1),
//     postorder(nodes, 0).slice(0, -1),
//   ];
// }

export default function solution(nodes) {
  const traverse = (nodes, index, order, result) => {
    if (index >= nodes.length) return;

    if (order === 'pre') result.push(nodes[index]);
    traverse(nodes, index * 2 + 1, order, result);
    if (order === 'in') result.push(nodes[index]);
    traverse(nodes, index * 2 + 2, order, result);
    if (order === 'post') result.push(nodes[index]);
  };

  const preorderResult = [];
  const inorderResult = [];
  const postorderResult = [];

  traverse(nodes, 0, 'pre', preorderResult);
  traverse(nodes, 0, 'in', inorderResult);
  traverse(nodes, 0, 'post', postorderResult);

  return [preorderResult, inorderResult, postorderResult];
}
