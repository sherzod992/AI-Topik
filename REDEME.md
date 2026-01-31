# TOPIK AI 학습 플랫폼

## 📌 프로젝트 개요

이 프로젝트는 TOPIK 시험 유형 기반 AI 한국어 학습 플랫폼입니다.

**플랫폼 특성:**
- 초기 개발: 웹 기반 (Web)
- 향후 확장: 모바일 앱 (iOS/Android) 지원 예정
- 반응형 디자인으로 웹/앱 모두 대응 가능한 구조로 설계

단순 문제풀이 앱이 아니라 다음을 포함합니다:

- TOPIK 읽기 문제 학습
- 유형별 연습
- AI 기반 약점 추천
- 시험 시간관리 시뮬레이션
- 실제 시험처럼 시간 압박 환경 제공
- 단어 클릭 → GPT 즉시 해석
- 개인 단어장 자동 저장
- 연습 모드 + 시험 모드 분리

## 🎯 핵심 목표

- TOPIK 시험 환경을 실제처럼 재현
- 시간 관리 훈련 제공
- 문제 유형별 집중 연습
- 사용자 약점 기반 적응형 출제
- 단어 클릭 즉시 해석 + 단어장
- GPT 기반 설명/예문 제공

## 🧠 학습 모드 구조 (반드시 분리)

### 1️⃣ 시험 모드 (Exam Mode)

실제 TOPIK 환경 재현

**특징:**
- 전체 시간 제한 있음 (예: 70분)
- 문제별 예상 시간 존재
- 시간 초과/절약 → 다음 문제 시간에 반영
- 뒤로 돌아가기 제한 (선택 옵션)
- 단어 해석은 제한 또는 힌트 차감

### 2️⃣ 연습 모드 (Practice Mode)

학습 중심 모드

**특징:**
- 시간 제한 없음
- 단어 클릭 자유
- GPT 해석 제공
- 예문 제공
- 단어장 저장 가능
- AI 해설 제공
- 유형별 연습 가능

## ⏱ 시간관리 시스템 (시험 모드 핵심 로직)

### 시험 총 시간 예시

- TOPIK 읽기 총 시간 = 70분
- 총 문제 = 50문항

하지만 모든 문제가 같은 시간이 아님.

### 문제별 예상 시간 필드

```typescript
Question {
  expected_time_sec: number
}
```

**예시:**

| 유형 | 예상 시간 |
|------|----------|
| 빈칸 | 60초 |
| 내용일치 | 90초 |
| 주제 | 120초 |
| 문장삽입 | 150초 |

### ⏳ 시간 분배 알고리즘

시스템은 다음 변수를 관리해야 함:

- `remaining_total_time`
- `current_question_expected_time`
- `actual_time_used`
- `time_delta`

**계산:**

```
time_delta = expected - actual
```

**경우별 처리:**

✅ **빨리 풀었을 때**
- expected = 90
- actual = 60
- delta = +30
- → 다음 문제 시간 += 30초

❌ **오래 걸렸을 때**
- expected = 90
- actual = 140
- delta = -50
- → 다음 문제 시간 -= 50초

**즉:** 시간 잔액을 누적하여 다음 문제 제한 시간에 반영

### UI 표시 (시험 모드)

문제 화면에 표시:
- 남은 전체 시간
- 현재 문제 권장 시간
- 현재 문제 경과 시간
- 시간 잔액 (+ / -)

## 📚 데이터 구조

**문제는 반드시 분리 저장**

절대 하나의 텍스트 덩어리로 저장하지 말 것.

반드시 분리:
- PASSAGE
- QUESTION
- OPTIONS
- ANSWER
- TYPE
- EXPECTED_TIME

## 🧩 문제 유형 enum (고정)

```
CLOZE
PARAPHRASE
DETAIL
MAIN_IDEA
ORDERING
SENTENCE_INSERT
VOCAB
INFERENCE
NOTICE
```

**⚠️ Cursor는 임의로 추가 금지.**

## 👤 사용자 풀이 로그 (필수 저장)

```typescript
Attempt {
  user_id
  question_id
  selected
  correct
  time_spent
  time_delta
  created_at
}
```

시간 학습 분석에 필수.

## 🔤 단어 클릭 GPT 해석 기능

연습 모드에서만 활성

**동작:**
1. 사용자 단어 클릭
2. → GPT 호출
3. → 의미 + 예문 반환
4. → 하단 팝업 표시
5. → "단어장 저장" 버튼 제공

## 📘 사용자 단어장 구조

```typescript
UserVocab {
  user_id
  word
  meaning
  example
  source_question_id
  familiarity_score
}
```

## 🤖 AI 추천 문제 로직 (v1 단순)

- 틀린 유형 우선
- 최근에 안 푼 문제 우선
- difficulty 점진 증가

**⚠️ 복잡한 ML 금지 (v1).**

## 🖥 프론트엔드 개발 규칙

### 초기 개발 단계

- 하드코드 JSON 데이터 사용
- API처럼 구조 맞춰서 사용: `/mock/questions.json`
- 나중에 API로 교체

### 웹/앱 호환성 고려사항

- 반응형 디자인 필수
- 터치/클릭 이벤트 모두 지원
- 모바일 퍼스트 접근 권장
- PWA(Progressive Web App) 구조 고려

## ❌ Cursor가 하면 안 되는 것

- 문제를 하나의 blob으로 저장
- question_type 제거
- expected_time 필드 생략
- attempt 로그 생략
- 시간관리 로직 단순 타이머로 처리
- 데이터 모델 임의 변경

## ✅ Cursor가 반드시 해야 하는 것

- 스키마 유지
- 모드 분리 구현
- 시간관리 로직 구현
- attempt 로그 저장
- 단어 클릭 기능 분리 구현
- 웹/앱 호환 가능한 구조 설계

## 🚀 MVP 범위

MVP는 다음이 되면 완료:

- ✅ 읽기 문제 풀이
- ✅ 시험 모드 시간관리 동작
- ✅ 연습 모드 단어 클릭 해석
- ✅ 단어장 저장
- ✅ 풀이 로그 저장
- ✅ 유형별 연습
