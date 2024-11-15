/**
 * 베스트 앨범
 *
 * 문제 URL: https://programmers.co.kr/learn/courses/30/lessons/42579
 * 정답 URL: https://github.com/kciter/coding-interview-js/blob/main/solution/23.js
 *
 * 문제 설명
 *  스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
 *  노래는 고유 번호로 구분하며, 노래 수록 기준은 다음과 같습니다.
 *   - 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 *   - 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 *   - 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *  노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
 *  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 반환하는 solution 함수를 완성하세요.
 *
 * 제약 조건
 * - genres[i]는 고유번호가 i인 노래의 장르입니다.
 * - plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * - genres와 plays의 길이는 같으며, 1 이상 10,000 이하입니다.
 * - 장르 종류는 100가지 미만입니다.
 * - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * - 모든 장르는 재생된 횟수가 다릅니다.
 *
 * 입출력 예
 * - genres: ['classic', 'pop', 'classic', 'classic', 'pop'], plays: [500, 600, 150, 800, 2500], return: [4, 1, 3, 0]
 */

/**
 * 풀이 방법:
 * 1. Map을 활용한 해결 방법
 * 2. 구현 단계:
 *    1) 장르별로 노래를 모아 Map으로 정의
 *    2) 장르별로 노래를 재생 횟수로 정렬
 *    3) 장르별로 노래를 정렬하여 결과값에 추가
 * 3. 코드 구현:
 */

export default function solution(genres, plays) {
  const genreMap = new Map();

  // 1. 장르별로 노래 목록 및 재생 횟수 합계를 저장
  genres.forEach((genre, index) => {
    const playCount = plays[index];
    if (!genreMap.has(genre)) {
      genreMap.set(genre, { totalPlay: 0, songs: [] });
    }
    genreMap.get(genre).totalPlay += playCount;
    genreMap.get(genre).songs.push({ id: index, play: playCount });
  });

  // 2. 장르별 총 재생 횟수를 기준으로 내림차순 정렬
  const sortedGenres = [...genreMap.entries()].sort(
    (a, b) => b[1].totalPlay - a[1].totalPlay
  );

  const result = [];

  // 3. 장르 내에서 재생 횟수와 고유 번호 기준으로 노래 정렬 및 상위 두 곡 선택
  for (const [genre, { songs }] of sortedGenres) {
    const sortedSongs = songs.sort((a, b) => b.play - a.play || a.id - b.id);
    sortedSongs.slice(0, 2).forEach((song) => result.push(song.id));
  }

  return result;
}
