/**
 * API 호출 함수 모음
 * 각 페이지에서 사용할 API 함수들을 여기에 정의합니다.
 */

// 한국어 일반 수업 레벨별 수업 목록 가져오기
export async function getGeneralLessons(level: 'beginner' | 'intermediate' | 'advanced') {
  // TODO: 실제 API 호출 구현
  // const response = await fetch(`/api/general/${level}`);
  // return response.json();
  return [];
}

// TOPIK 문제 가져오기
export async function getTopikQuestions(grade: 1 | 2, skill: 'listening' | 'reading' | 'writing') {
  // TODO: 실제 API 호출 구현
  // const response = await fetch(`/api/topik/${grade}/${skill}`);
  // return response.json();
  return [];
}

// 나만의 단어장 목록 가져오기
export async function getVocabList() {
  // TODO: 실제 API 호출 구현
  // const response = await fetch('/api/vocab');
  // return response.json();
  return [];
}
