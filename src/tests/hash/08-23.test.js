import solution from '../../main/hash/08-23';

describe('베스트 앨범', () => {
  test('예제 케이스 1', () => {
    const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
    const plays = [500, 600, 150, 800, 2500];
    const result = [4, 1, 3, 0];
    expect(solution(genres, plays)).toEqual(result);
  });

  test('장르별 곡이 하나씩만 있는 경우', () => {
    const genres = ['classic', 'pop'];
    const plays = [500, 600];
    const result = [1, 0];
    expect(solution(genres, plays)).toEqual(result);
  });

  test('장르 내 곡이 재생 횟수와 고유 번호가 같은 경우', () => {
    const genres = ['classic', 'classic'];
    const plays = [500, 500];
    const result = [0, 1]; // 고유 번호가 낮은 순으로 정렬됨
    expect(solution(genres, plays)).toEqual(result);
  });

  test('여러 장르가 다양한 곡으로 구성된 경우', () => {
    const genres = ['classic', 'pop', 'jazz', 'pop', 'classic'];
    const plays = [400, 300, 200, 150, 500];
    const result = [4, 0, 1, 3, 2];
    console.log(solution(genres, plays));
    expect(solution(genres, plays)).toEqual(result);
  });

  test('장르 내 노래가 2곡 이하인 경우', () => {
    const genres = ['pop', 'pop', 'classic'];
    const plays = [1000, 2000, 500];
    const result = [1, 0, 2];
    expect(solution(genres, plays)).toEqual(result);
  });
});
