# Portfolio Typography Guide

메인 페이지는 `style.css`, 프로젝트 상세 페이지는 `projects/project.css`에서 조절합니다.

- `rem`은 브라우저 기본 글자 크기(일반적으로 16px)를 기준으로 합니다.
- `clamp(최솟값, 화면 비례값, 최댓값)`은 화면 폭에 따라 글자 크기가 변합니다.
- 아래 값은 현재 로컬 파일의 값입니다.
- 같은 선택자가 여러 문구에 적용될 때는 해당되는 문구 종류를 모두 적었습니다. 긴 본문은 `~~`로 생략했습니다.
- 모바일 값은 문서 마지막의 `반응형 별도 값`을 함께 확인해야 합니다.

## 1. 메인 페이지 — `style.css`

메인 페이지의 절대 글꼴 최솟값은 `1.2rem`입니다. 작은 라벨은 `1.2rem`, 보조 본문은 `1.25–1.28rem`, 주요 본문은 `1.3rem`을 기준으로 사용합니다. 기존의 큰 제목 크기는 유지했습니다.

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| 메인 | 최세훈 | `.wordmark > span` → `font-size: 1.2rem` |
| 메인 | AI · Computer Vision Portfolio | `.wordmark small` → `font: 500 1.2rem/1.3 var(--mono)` |
| 메인 | PORTFOLIO / 2026 · OPEN TO OPPORTUNITIES | `.kicker` → `font: 500 1.2rem var(--mono)` |
| 메인 | Building systems. · Teaching machines to see. | `h1` → `font-size: clamp(2.8rem, 4.7vw, 5.1rem)` |
| 메인 | Teaching machines to see.의 파란색 강조 | `h1 em` → 크기는 `h1` 상속 |
| 메인 | APPROACH · EVOLUTION 말머리 | `.hero-summary-label` → `font: 500 1.2rem/1.25 var(--mono)` |
| 메인 | 문제의 특성과 서비스 환경을 이해하고~~ · Backend 개발에서 시작해~~ | `.hero-intro`, `.hero-path` → `font-size: clamp(1.28rem, 1.4vw, 1.38rem)` |
| 메인 | Gmail ↗ · GitHub ↗ | `.inline-link` → `font-size: 1.25rem` |
| 메인 | 01 · 02 | `.visual-object span` → `font-size: 1.2rem` |
| 메인 | SYSTEM · INTELLIGENCE | `.visual-object strong` → `font-size: clamp(1.2rem, 1.55vw, 1.4rem)` |
| 메인 | Backend Foundation · Vision · Multimodal Systems | `.visual-object small` → `font-size: 1.2rem` |
| 메인 | EVOLUTION MAP · ● LIVE | `.visual-caption` → `font: 500 1.2rem var(--mono)` |
| 메인 | 탭 번호 01 · 02 · 03 | `.portfolio-tab span` → `font: 500 1.2rem var(--mono)` |
| 메인 | Selected Projects · Evolution · Profile & Capabilities | `.portfolio-tab strong` → `font-size: clamp(1.2rem, 1.35vw, 1.3rem)` |
| 메인 | 01 / SELECTED PROJECTS · 02 / EVOLUTION · 03 / PROFILE & CAPABILITIES | `.section-index` → `font: 500 1.2rem var(--mono)` |
| 메인 | CORE CAPABILITIES · SKILLS & TOOLS · BACKGROUND | `.section-index` → `font: 500 1.2rem var(--mono)` |
| 메인 | Featured Work · From Systems to Intelligence · Profile & Capabilities. | `.section-heading h2` → `font-size: clamp(2.25rem, 3.8vw, 4rem)` |
| 메인 | Backend 개발에서 시작해~~ | `.section-heading > p` → `font-size: 1.3rem` |
| 메인 | All · AI / Vision · Backend 및 개수 | `.filter-button` → `font: 500 1.2rem var(--mono)` |
| 메인 프로젝트 | 별도의 이미지 상태 라벨 | `.image-status` → `font: 400 1.2rem var(--mono)` |
| 메인 프로젝트 | 2024 · 2025 · 2026 등 프로젝트 연도 | `.project-meta` → `font: 500 1.2rem/1.5 var(--mono)` |
| 메인 프로젝트 | Burinake · CSAS · 바른글씨: 바람 · Itinera · Emuda | `.project-info h3 small` → `font: 600 1.22rem/1.55 var(--mono)` |
| 메인 프로젝트 | YOLO·VLM 기반 화재 탐지~~ · 시설물 결함 분류~~ · 한글 자소 분석~~ · 취향 기반 여행지~~ · 감정 일기 분석~~ | `.project-info h3 strong` → `font-size: clamp(1.2rem, 1.58vw, 1.6rem)` |
| 메인 프로젝트 | 주기적으로 전달되는 CCTV 이미지에서~~ · 시설물 이미지에서~~ · 한글 손글씨를~~ · Google Places의~~ · 감정 일기를~~ | `.project-info > p` → `font-size: 1.28rem` |
| 메인 프로젝트 | ROLE | `.project-role span` → `font: 500 1.2rem var(--mono)` |
| 메인 프로젝트 | Team Lead · Detection & VLM Pipeline · Backend · Place & Trip Domain 등 역할 | `.project-role strong` → `font: 500 1.2rem/1.5 var(--mono)` |
| 메인 프로젝트 | YOLOv12 · DETR · VLM · Spring Boot · PyTorch 등 모든 기술 태그 | `.project-tags span` → `font: 400 1.2rem var(--mono)` |
| 메인 프로젝트 | YOLOv12 · DETR · VLM · EfficientNet · SegFormer · CRAFT · FPN · Elasticsearch 설명 툴팁 | `.tag-tooltip` → `font: 500 1.05rem/1.55 "Noto Sans KR", sans-serif` |
| Evolution | MILESTONE 01–06 | `.timeline-stage` 및 `.timeline-stage span` → `font: 500 1.2rem var(--mono)`, `font-size: 1.2rem` |
| Evolution | FOUNDATION · DATA SYSTEM · DEVELOPMENT · VISION · SERVING · MULTIMODAL | `.timeline-stage small` → `font: 400 1.2rem var(--mono)` |
| Evolution | BACKEND FOUNDATION · DATA-BACKED RECOMMENDATION · DEEP LEARNING DEVELOPMENT · COMPUTER VISION PIPELINE · CASCADE VISION & AI SERVING · DETECTION & VLM CASCADE | `.timeline-detail small` → `font: 500 1.2rem var(--mono)` |
| Evolution | API와 AI 출력을 서비스 흐름으로 · 외부 데이터를 축적 가능한~~ · 데이터와 학습 과정을 직접 구축 · 검출·분리·Segmentation~~ · 불완전한 데이터에서~~ · 시각적 탐지에서~~ | `.timeline-detail h3` → `font-size: clamp(1.2rem, 1.75vw, 1.65rem)` |
| Evolution | REST API, 데이터베이스~~ · Google Places 결과를~~ · 기성 API를 연결하는~~ · CRAFT 출력~~ · 분류 Logit과~~ · YOLO 기반~~ | `.timeline-copy p` → `font-size: 1.25rem` |
| Evolution | EMUDA · ITINERA · 바른글씨: 바람 · CSAS · BURINAKE | `.timeline-detail > .evolution-reference` → `font: 400 1.2rem/1.6 var(--mono)` |
| Profile | 모델 하나보다, 전체 Pipeline을 설계합니다. | `.profile-intro h2` → `font-size: clamp(1.8rem, 2.7vw, 2.8rem)` |
| Profile | Spring Boot 기반 서비스와 외부 AI 연동에서~~ · 최근에는 불완전한 Ground Truth를~~ | `.profile-intro p` → `font-size: 1.3rem` |
| Profile | Project-proven strengths · Technical Stack | `.capability-heading h3` → `font-size: clamp(1.55rem, 2.5vw, 2.35rem)` |
| Profile | 01 / COMPUTER VISION · 02 / MODEL DESIGN · 03 / AI INTEGRATION · 04 / AI SERVING | `.capability-grid article > .capability-label` → `font: 500 1.2rem/1.3 var(--mono)` |
| Profile | 데이터에서 결과까지 직접 구축 · 현실적인 제약을 구조에 반영 · 모델 출력을 서비스 기능으로 · 학습 모델을 운영 환경까지 | `.capability-grid h4` → `font-size: 1.2rem` |
| Profile | 합성 데이터 생성과 EDA~~ · 불완전 Label, 클래스 불균형~~ · REST API, 데이터베이스~~ · 추론 서버를 API와~~ | `.capability-grid p` → `font-size: 1.25rem` |
| Profile | 바른글씨: 바람 · CSAS · Burinake · EMUDA · Itinera | `.capability-grid small` → `font: 400 .92rem/1.6 var(--mono)` |
| Profile | Languages · Operating Systems · AI / ML · LLM / VLM · Backend · Databases · Development Tools · Cloud / Infrastructure | `.stack-groups h4` → `font: 500 1.2rem var(--mono)` |
| Profile | C · Java · Python · SQL · JavaScript · CSS · Linux · Windows · PyTorch · TensorFlow · Scikit-learn · YOLO · DETR · SegFormer · EfficientNet · MobileNet · FPN · CRAFT · OpenCV | `.stack-groups span` → `font: 500 1.2rem var(--mono)` |
| Profile | OpenAI API · Gemini API · AWS Bedrock · Azure AI Studio · Prompt Engineering · AI Agent Development · FastAPI · Spring Boot · Spring Data JPA | `.stack-groups span` → `font: 500 1.2rem var(--mono)` |
| Profile | Oracle · MySQL · Elasticsearch · OpenSearch · PostgreSQL · Weaviate · Anaconda · Jupyter Notebook · Docker · IntelliJ IDEA · Git · GitHub · Postman | `.stack-groups span` → `font: 500 1.2rem var(--mono)` |
| Profile | AWS EC2 · AWS ECR · AWS EKS · Azure Storage · Azure ACR · Azure AKS · Kubernetes | `.stack-groups span` → `font: 500 1.2rem var(--mono)` |
| Profile | Background & Credentials | `.profile-records-heading h3` → `font-size: clamp(1.55rem, 2.5vw, 2.35rem)` |
| Profile | Profile · Education · Certificates · Language | `.profile-block > h3`, `.profile-language h3` → `font: 500 1.2rem var(--mono)` |
| Profile | Name · Email · GitHub | `.profile-list dt` → `font: 500 1.2rem var(--mono)` |
| Profile | 최세훈 · csh000924@gmail.com · github.com/csh0924 | `.profile-list dd` → `font-size: 1.28rem` |
| Profile | Choi Se Hoon · 링크 보조문 | `.profile-list dd span` → `font: 400 1.2rem var(--mono)` |
| Profile | 2020. 03. — 2026. 02. · 2025. 12. · 2026. 04. 23. · 2026. 07. | `.record-date` → `font: 400 1.2rem/1.6 var(--mono)` |
| Profile | 숭실대학교 · 정보처리기사 · OCP DBA : Oracle Database~~ · 빅데이터분석기사 | `.record h4` → `font-size: 1.3rem` |
| Profile | 소프트웨어학부 · 졸업 · 한국산업인력공단 · Oracle Corp. · 한국데이터산업진흥원 | `.record p:not(.record-date)`, `.record-description` → `font-size: 1.25rem` |
| Profile | TOEIC · JLPT | `.compact-record strong` → `font: 500 1.2rem var(--mono)` |
| Profile | 830 · N3 | `.compact-record span` → `font: 500 1.2rem var(--mono)` |
| 메인 Footer | Contact | `.footer-label` → `font: 500 1.2rem var(--mono)` |
| 메인 Footer | Let's explore the next problem. | `footer h2` → `font-size: clamp(2.2rem, 3.7vw, 4rem)` |
| 메인 Footer | GitHub · Email | `.footer-links a` → `font: 500 1.2rem var(--mono)` |
| 메인 Footer | github.com/csh0924 · csh000924@gmail.com | `.footer-links .contact-value` → `font-size: 1.2rem` |
| 메인 Footer | © 연도 Choi Se Hoon · BACK TO THE TOP | `.copyright`, `.back-to-top` → `font: 400 1.2rem var(--mono)` |

## 2. 프로젝트 상세 공통 — `projects/project.css`

아래 선택자는 바람, CSAS, Burinake, Itinera, Emuda에 공통으로 적용됩니다.

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| 상세 전체 | 최세훈 / Visual Research Archive | `.wordmark` → `font-size: .8rem` |
| 상세 전체 | Overview · Repository · Presentation / Demo 등의 헤더 링크 | `.project-header` → `font: 500 .74rem var(--mono)` |
| 상세 전체 | PROJECT 01–05 · 분야 · 기간 | `.hero-meta` → `font: 500 .72rem var(--mono)` |
| 바람 | Korean Handwriting Analysis | `.hero-title > div > p` → `font: 500 .76rem var(--mono)` |
| CSAS | Crack Sensing AI Service | `.hero-title > div > p` → `font: 500 .76rem var(--mono)` |
| Burinake | Real-time Fire Safety Intelligence | `.hero-title > div > p` → `font: 500 .76rem var(--mono)` |
| Itinera | Personalized Travel Planning | `.hero-title > div > p` → `font: 500 .76rem var(--mono)` |
| Emuda | Emotion Music Diary | `.hero-title > div > p` → `font: 500 .76rem var(--mono)` |
| 상세 전체 | 바른글씨: 바람 · CSAS · Burinake · Itinera · Emuda | `h1` → `font-size: clamp(2.9rem, 5.2vw, 5.2rem)` |
| 바람 | 손글씨 문장을 문자와 자소 단위로~~ | `.hero-summary` → `font-size: 1rem` |
| CSAS | 불완전한 Label이 포함된 시설물 이미지에서~~ | `.hero-summary` → `font-size: 1rem` |
| Burinake | 실시간 화재 안전 관제를 목표로~~ | `.hero-summary` → `font-size: 1rem` |
| Itinera | 사용자의 지역과 취향 태그를 기반으로~~ | `.hero-summary` → `font-size: 1rem` |
| Emuda | 감정 일기 분석 결과와 사용자 음악 취향을~~ | `.hero-summary` → `font-size: 1rem` |
| 상세 전체 | 00 / OVERVIEW · HOW IT WORKS · 01 / … · REVIEW · STACK | `.section-label` → `font: 500 .72rem var(--mono)` |
| 상세 전체 | 각 섹션 우측 또는 상단의 01 / PIPELINE · 02 / CONTRIBUTION 등의 보조 인덱스 | `.section-heading > .section-label` → `.section-label`의 `font: 500 .72rem var(--mono)` |
| 상세 전체 | 모든 큰 섹션 제목, Overview 제목, Technical Review & Significance, Tools used | 마지막 공통 `:is(... ) .overview-intro h2, ...` → `font-size: clamp(2.15rem, 3.1vw, 3.3rem)` |
| 상세 전체 | Overview 설명 · 각 섹션 제목 아래 설명 | `.overview-intro > p`, `.section-heading > div > p` → 기본 `font-size: .92rem` 상속 |
| 상세 전체 | Period · Team · Role / Owned Role · Dataset / Platform / Core Stack | `.fact-grid dt` → `font: 500 .7rem var(--mono)` |
| 상세 전체 | 기간 · 인원 · 담당 역할 · 데이터셋 / 플랫폼 / 핵심 기술 값 | `.fact-grid dd` → `font-size: .88rem` |
| 바람 | 작성에서 교정 피드백까지 | `.how-it-works-heading h3` → `font-size: clamp(1.45rem, 2.3vw, 2.25rem)` |
| CSAS | 시설물 사진에서 결함 기록까지 | `.how-it-works-heading h3` → `font-size: clamp(1.45rem, 2.3vw, 2.25rem)` |
| Itinera | 취향 입력에서 여행 일정까지 | `.how-it-works-heading h3` → `font-size: clamp(1.45rem, 2.3vw, 2.25rem)` |
| Emuda | 일기에서 플레이리스트까지 | `.how-it-works-heading h3` → `font-size: clamp(1.45rem, 2.3vw, 2.25rem)` |
| 상세 전체 | HOW IT WORKS 단계 번호 01–06 | `.how-it-works li > span` → `font: 500 .7rem var(--mono)` |
| 바람 | 예문과 목표 글꼴 선택 · Canvas 손글씨 작성 · 문자 중심과 영역 분리 · 자소 Segmentation · 다섯 항목 점수화 · 교정 피드백 생성 | `.how-it-works h4` → `font-size: 1rem` |
| CSAS | 시설물 사진 업로드 · 입력 전처리 · 결함 후보 분석 · 픽셀 단위 위치 탐지 · 분석 결과 구성 · 결과 확인과 기록 | `.how-it-works h4` → `font-size: 1rem` |
| Itinera | 지역과 취향 입력 · 자체 데이터 검색 · 부족한 장소 수집 · 분위기 태그 매칭 · 저장 후 재검색 · 일정 구성 | `.how-it-works h4` → `font-size: 1rem` |
| Emuda | 일기와 감정 입력 · 감정 확률 분석 · 추천 입력 구성 · 추천 후보 생성 · 실제 곡 조회 · 저장 및 제공 | `.how-it-works h4` → `font-size: 1rem` |
| 상세 전체 | 위 HOW IT WORKS의 각 단계 설명 6종 | `.how-it-works li p` → `font-size: .84rem` |
| 상세 전체 | 이미지 캡션의 종류명 · 분석 단계 · 데이터/모델 정보 | `.media-frame figcaption` → `font: 500 .68rem var(--mono)` |
| 상세 전체 | Owned Scope 카드 번호 01–05 | `.contribution-grid span` → `font: 500 .7rem var(--mono)` |
| 상세 전체 | Owned Scope의 모든 카드 제목 | `.contribution-grid h3` → `font-size: 1.2rem` |
| 상세 전체 | Owned Scope의 모든 카드 본문 | `.contribution-grid p` → `font-size: .9rem` |
| 상세 전체 | Research / Technical Decisions 블록의 큰 제목 | `.decision-heading h3` → `font-size: clamp(1.45rem, 2.3vw, 2.25rem)` |
| 상세 전체 | Research / Technical Decisions 카드 번호 | `.decision-index` → `font: 500 .7rem var(--mono)` |
| 상세 전체 | Research / Technical Decisions의 모든 카드 제목 | `.decision-grid h3` → `font-size: 1.08rem` |
| 상세 전체 | Problem · Approach · Decision · Applied | `.decision-grid dt` → `font: 500 .68rem var(--mono)` |
| 상세 전체 | Problem · Approach · Decision · Applied의 모든 설명 | `.decision-grid dd` → `font-size: .83rem` |
| 상세 전체 | RESULT / 01–03 · STEP / 01–03 | `.result-index` → `font: 500 .7rem var(--mono)` |
| 상세 전체 | 모든 결과 카드 제목 | `.result-card h3` → `font-size: clamp(1.5rem, 2.5vw, 2.35rem)` |
| 상세 전체 | 모든 결과 카드 설명 | `.result-card > div > p:last-child` → `font-size: .92rem` |
| 상세 전체 | Technical Review & Significance의 모든 문단 | `.learning-layout > div p` → `font-size: .96rem` |
| 상세 전체 | Tools used | 공통 큰 제목 선택자 → `font-size: clamp(2.15rem, 3.1vw, 3.3rem)` |
| 상세 전체 | 각 프로젝트의 모든 Tools used 기술 태그 | `.stack li` → `font: 500 .74rem var(--mono)` |
| 상세 전체 | BACK TO · NEXT PROJECT | `.project-navigation span` → `font: 400 .68rem var(--mono)` |
| 상세 전체 | All projects · 이전/다음 프로젝트명 | `.project-navigation > *` → `font-size: clamp(1.45rem, 2.5vw, 2.4rem)` |
| 상세 전체 | © Choi Se Hoon · Back to archive ↑ | `footer` → `font: 400 .68rem var(--mono)` |

## 3. 바른글씨: 바람 전용 — `projects/project.css`

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| 바람 | PROJECT SCOPE | `.baram-page .project-definition > span` → `font-size: .7rem` |
| 바람 | 문자를 판독하는 OCR이 아닙니다~~ | `.baram-page .project-definition p` → `font-size: .84rem` |
| 바람 | 중심 후보 추출 · 검출 수 보정과 예외 처리 · 분석 기준 생성의 번호 01–03 | `.craft-notes span` → `font: 500 .69rem var(--mono)` |
| 바람 | 중심 후보 추출 · 검출 수 보정과 예외 처리 · 분석 기준 생성 | `.craft-notes h3` → `font-size: 1.05rem` |
| 바람 | Region Score 픽셀을 묶고~~ · 입력 원문의 글자 수보다~~ · 중심 간 기울기와~~ | `.craft-notes p` → `font-size: .83rem` |
| 바람 | 11,172 · 2,841 · 237 · 51,138 | `.dataset-metrics strong` → `font: 500 clamp(1.45rem, 2.5vw, 2.4rem) var(--mono)` |
| 바람 | 표현 가능한 한글 · 말뭉치에서 선별한 실사용 문자 · 6개 구조 유형~~ · 자소 단위 Pixel Label~~ | `.dataset-metrics span` → `font-size: .78rem` |
| 바람 | 합성 데이터 범위와 해석에 대한 하단 설명 | `.dataset-note` → `font-size: .84rem` |
| 바람 | 데이터 생성 단계 번호 01–04 | `.dataset-steps li > span` → `font: 500 .72rem var(--mono)` |
| 바람 | 실사용 문자 선별 · 구조 유형 분리 · 자소 Component 추출 · 조합 및 증강 | `.dataset-steps h3` → `font-size: 1.05rem` |
| 바람 | AI Hub 한국어 말뭉치~~ · 종성 유무 2종과~~ · 초성·중성·종성의~~ · 2,841자 × 6폰트~~ | `.dataset-steps p` → `font-size: .84rem` |
| 바람 | 01 / TILT · 02 / SPACE · 03 / SIZE · 04 / JAMO SHAPE · 05 / JAMO POSITION | `.scoring-grid span` → `font: 500 .69rem var(--mono)` |
| 바람 | 문장 기울기 · 자간 일관성 · 문자 크기 · 자소 형태 · 자소 상대 위치 | `.scoring-grid h3` → `font-size: 1.08rem` |
| 바람 | 인접 문자 중심을 잇는~~ · 일반 자간의 중앙값~~ · 문자 Bounding Box~~ · 선택한 인쇄체와~~ · 초성–중성~~ | `.scoring-grid p` → `font-size: .84rem` |
| 바람 | FINAL SCORE | `.score-formula span` → `font: 500 .7rem var(--mono)` |
| 바람 | 각 항목의 25% | `.score-formula strong` → `font: 500 1.2rem var(--mono)` |
| 바람 | Tilt · Space · Size · Jamo | `.score-formula small` → `font: 500 .68rem var(--mono)` |
| 바람 | Jamo 점수는 형태와 위치 점수의 평균~~ | `.score-formula p` → `font-size: .82rem` |
| 바람 | 정량 결과에서 항목별 교정 문장으로 | `.feedback-heading h3` → `font-size: clamp(1.25rem, 2.1vw, 1.95rem)` |
| 바람 | INPUT · PROMPT · OUTPUT | `.feedback-contract li span` → `font: 500 .68rem var(--mono)` |
| 바람 | 자형, 자소 상대 위치~~ · 띄어쓰기 구간의 1.3배~~ · 자형:…\|위치:… 형식~~ | `.feedback-contract li p` → `font-size: .82rem` |
| 바람 | detailedJson · 자형:…\|위치:…\|자간:… | `.feedback-contract code` → `font-size: .74rem` |
| 바람 | 유형별 6개 모델 학습 · 정성 결과와 오류 확인 · Segmentation 후처리 | `.result-card h3` → 공통 결과 제목 값 |
| 바람 | Python · PyTorch · CRAFT · FPN · OpenCV · Distance Transform · Flask · Gemini API | `.stack li` → 공통 `.74rem` |

## 4. CSAS 전용 — `projects/project.css`

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| CSAS | V1.0 · V1.1 · V2.0 · V2.1 | `.model-evolution li > span` → `font: 500 .76rem var(--mono)` |
| CSAS | Binary Classification → 10-class Segmentation · Cross-Entropy + Dice Loss · 11-output Independent Candidate Scores · Incomplete-label-aware Custom Loss | `.model-evolution h3` → `font-size: 1.15rem` |
| CSAS | EfficientNet-B0로 정상·결함을~~ · 결함 픽셀이 배경보다~~ · 단일 대표 Label로~~ · 분류 Hint가 지지하는~~ | `.model-evolution p` → `font-size: .86rem` |
| CSAS | MICRO F1 · MACRO F1 · MICRO RECALL · DEFECT mIoU · BACKGROUND IoU · CRACK IoU | `.metric-panel span` → `font: 500 .69rem var(--mono)` |
| CSAS | .90 · .74 · .92 · 11.39% · 98.38% · 20.60% | `.metric-panel strong` → `font: 500 2.2rem var(--mono)` |
| CSAS | EVALUATION SET · SOC 시설물 균열패턴 데이터~~ | `.metric-panel p` → `font-size: .82rem` |
| CSAS | CLIENT · APPLICATION · INFERENCE · PLATFORM | `.architecture-flow small` → `font: 500 .68rem var(--mono)` |
| CSAS | Mobile Web · Spring Boot · PyTorch AI Server · Docker · ECR · EKS | `.architecture-flow strong` → `font-size: .9rem` |
| CSAS | 01 / STORAGE & SEARCH · 02 / DEPLOYMENT | `.architecture-note span` → `font: 500 .68rem var(--mono)` |
| CSAS | S3에 이미지와 모델 Artifact를~~ · Kubernetes 환경에서는 Pod 단위~~ | `.architecture-note p` → `font-size: .86rem` |
| CSAS | LOSS / 01 · LOSS / 02 · LOSS / 03 | `.cascade-decisions span` → `font: 500 .68rem var(--mono)` |
| CSAS | Weighted Pixel Loss · Forgive Mask · Existence Loss | `.cascade-decisions h3` → `font-size: 1.05rem` |
| CSAS | 결함 클래스의 학습 신호를~~ · Ground Truth는 배경이지만~~ · Segmentation 결과에 나타난~~ | `.cascade-decisions p` → `font-size: .82rem` |
| CSAS | 누락 결함 후보 보존 · 연속적인 미세 균열 · 서비스 결과 연결 | `.result-card h3` → 공통 결과 제목 값 |
| CSAS | Python · PyTorch · EfficientNet · SegFormer · MobileNet · Benchmark · Docker · AWS ECR · EKS · S3 · Weaviate · OpenSearch | `.stack li` → 공통 `.74rem` |

## 5. Burinake 전용 — `projects/project.css`

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| Burinake | CCTV Snapshot · YOLO 후보 탐지 · Issue 생성·병합 · 상황 변화 확인 · VLM 맥락 분석 · 의사결정 지원 | `.burinake-page .how-it-works li strong` → `font-size: .95rem` |
| Burinake | 각 HOW IT WORKS 단계 설명 6종 | `.how-it-works li p` → 공통 `.84rem` |
| Burinake | DEMO SCOPE | `.demo-scope strong` → `font: 500 .72rem var(--mono)` |
| Burinake | 현재 버전은 실제 CCTV 스트림 대신~~ | `.demo-scope p` → `font-size: .84rem` |
| Burinake | 49,817 · 7,991 · 6,561 · 2 | `.dataset-metrics strong` → `font: 500 clamp(1.45rem, 2.5vw, 2.4rem) var(--mono)` |
| Burinake | Train Images · Validation Images · Test Images · Unified Classes · Fire / Smoke | `.dataset-metrics span` → `font-size: .78rem` |
| Burinake | MODEL · PRECISION · RECALL · mAP50 · mAP50–95 · LATENCY | `.benchmark-head > *` → `font-size: .68rem` |
| Burinake | YOLOv11 · YOLOv12 · DETR | `.benchmark-row strong` → `font-size: .92rem` |
| Burinake | SELECTED | `.benchmark-row strong small` → `font: 500 .66rem var(--mono)` |
| Burinake | 벤치마크의 모든 수치 셀 | `.benchmark-row > *` → `font: 400 .78rem var(--mono)` |
| Burinake | 01 / EVERY 3 SEC · 02 / FAST FILTER · 03 / EVENT POLICY · 04 / ON DEMAND | `.cascade-flow small` → `font: 500 .67rem var(--mono)` |
| Burinake | CCTV Snapshot · YOLOv12 · Issue Control · VLM Analysis | `.cascade-flow strong` → `font-size: .95rem` |
| Burinake | Backend로 이미지 전달 · Fire·Smoke 후보 탐지 · 5분 단위 사건 병합~~ · 상황 악화 시에만 호출 | `.cascade-flow p` → `font-size: .8rem` |
| Burinake | INPUT / 01 · INPUT / 02 · INPUT / 03 · OUTPUT | `.vlm-contract span` → `font: 500 .67rem var(--mono)` |
| Burinake | Five-frame Sequence · YOLO Output · CCTV Metadata · Structured JSON | `.vlm-contract strong` → `font-size: .95rem` |
| Burinake | 탐지 시점 전후를 포함한~~ · Fire·Smoke Label~~ · 위치, 촬영 시간~~ · 화재 여부, 위험도~~ | `.vlm-contract p` → `font-size: .8rem` |
| Burinake | WHY / 01 · WHY / 02 · DESIGN / 03 | `.cascade-decisions span` → `font: 500 .68rem var(--mono)` |
| Burinake | Detection만으로 부족한 맥락 · VLM 단독 처리의 비용 · 조건부 결합 | `.cascade-decisions h3` → `font-size: 1.05rem` |
| Burinake | 불꽃과 연기를 빠르게~~ · 이미지의 주변 맥락과~~ · YOLO가 후보를 넓게~~ | `.cascade-decisions p` → `font-size: .82rem` |
| Burinake | CASE A / FALSE ALARM · CASE B / REAL FIRE | `.vlm-cases span` → `font: 500 .68rem var(--mono)` |
| Burinake | 연기 감지 → 신고 초안 생성 제외 · 화재 감지 → 위험 상황 분석 | `.vlm-cases h3` → `font-size: 1.15rem` |
| Burinake | YOLO는 연기를 후보로~~ · 화염과 연기의 확산~~ | `.vlm-cases p` → `font-size: .84rem` |
| Burinake | Prompt Review 블록 제목 | `.prompt-review h3` → `font-size: 1.2rem` |
| Burinake | Prompt Review 설명 | `.prompt-review p` → `font-size: .84rem` |
| Burinake | Prompt / JSON 코드 | `.prompt-review code` → `font-size: .76rem` |
| Burinake | YOLOv12 · DETR · VLM · Azure AI Foundry · Docker · Azure AKS 등의 기술 태그 | `.stack li` → 공통 `.74rem` |

## 6. Itinera 전용 — `projects/project.css`

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| Itinera | Google Places 연동 · 장소 도메인 구현 · 추천 및 LLM 태깅 · 여행 일정 생성 | `.contribution-grid h3` → 공통 `1.2rem` |
| Itinera | Type + Keyword 조합 · 리뷰 기반 분위기 태그 · 제한된 태그 Vocabulary | `.decision-grid h3` → 공통 `1.08rem` |
| Itinera | 자체 데이터 우선 검색 · 부족한 조건만 외부 조회 · 장소 정보 확장 · 저장 후 재검색 | `.model-evolution h3` → `font-size: 1.15rem` |
| Itinera | 위 추천 흐름 단계 01–04 | `.model-evolution li > span` → `font: 500 .76rem var(--mono)` |
| Itinera | 입력 지역과 Google Places~~ · 결과가 충분하지 않은~~ · 정형 장소 정보와~~ · 새 장소를 MySQL과~~ | `.model-evolution p` → `font-size: .86rem` |
| Itinera | SUCCESS RATE · TAG REFLECTION · SUBJECTIVE TAG FIT | `.metric-panel span` → `font: 500 .69rem var(--mono)` |
| Itinera | 52% · 92% | `.metric-panel strong` → `font: 500 2.2rem var(--mono)` |
| Itinera | 4.4/5 | `.itinera-metrics > div:nth-child(3) strong` → `font-size: 1.8rem` |
| Itinera | METRIC DEFINITIONS · 추천 장소가 하나도 없으면~~ | `.metric-panel p` → `font-size: .82rem` |
| Itinera | natural_feature | `.research-grid code` → `font-size: .75rem` |
| Itinera | LIMIT / 01 · LIMIT / 02 · LIMIT / 03 | `.evaluation-notes span` → `font: 500 .68rem var(--mono)` |
| Itinera | 엄격한 일치 조건의 한계 · 카페 추천의 불안정성 · 과도하게 넓은 지역 범위 | `.evaluation-notes h3` → `font-size: 1.05rem` |
| Itinera | 태그와 정확히 일치하는~~ · 일부 카페 결과는~~ · 입력 지역에서 먼 장소까지~~ | `.evaluation-notes p` → `font-size: .82rem` |
| Itinera | 세분화된 취향 입력 · 장소 선택과 순서 조정 · 경로 생성과 일정 저장 | `.result-card h3` → 공통 결과 제목 값 |
| Itinera | Java · Spring Boot · Spring Data JPA · MySQL · Elasticsearch · Redis · Google Places · Maps · Gemini API · OpenAI API | `.stack li` → 공통 `.74rem` |

## 7. Emuda 전용 — `projects/project.css`

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| Emuda | REST API 설계 · AI 서비스 연동 · 추천 프롬프트 및 응답 포맷 설계 · 배포와 운영 | `.contribution-grid h3` → 공통 `1.2rem` |
| Emuda | 연동 과정의 문제와 설계 판단 | `.decision-heading h3` → 공통 큰 Decision 제목 값 |
| Emuda | ChatGPT 응답 형식 표준화 · iOS 클라이언트 데이터 계약 · 외부 API 연쇄 호출 관리 | `.decision-grid h3` → 공통 `1.08rem` |
| Emuda | Problem · Decision · Applied | `.decision-grid dt` → 공통 `.68rem` |
| Emuda | 추천 결과의 곡명·가수~~ · 자유 형식 문장 대신~~ · 요청·응답 DTO를~~ · 각 단계의 입력·출력 책임~~ | `.decision-grid dd` → 공통 `.83rem` |
| Emuda | BERT 감정 분석 · 감정 기반 음악 추천 | `.result-card h3` → 공통 결과 제목 값 |
| Emuda | PROBABILITY ORDER [행복, 분노, 놀람, 슬픔] | `.result-card > div > .result-note` → `font: 500 .72rem var(--mono)` |
| Emuda | Java · Spring Boot · MySQL · BERT API · ChatGPT API · Spotify API · AWS EC2 · GCP · Flask | `.stack li` → 공통 `.74rem` |

## 8. 반응형 별도 값

화면이 좁을 때 아래 규칙이 데스크톱 값을 덮어씁니다. 모바일만 조정하려면 이 구간을 수정합니다.

| 페이지 | 문구 | CSS 선택자와 현재 값 |
|---|---|---|
| 메인 · 680px 이하 | PORTFOLIO / 2026 · OPEN TO OPPORTUNITIES | `@media (max-width: 680px) .kicker` → `1.2rem` |
| 메인 · 680px 이하 | Building systems. · Teaching machines to see. | `h1` → `clamp(2rem, 8vw, 2.55rem)` |
| 메인 · 680px 이하 | Teaching machines to see. | `h1 em` → `.9em` (상위 `h1`에 대한 상대 배율) |
| 메인 · 680px 이하 | 문제의 특성과 서비스 환경을~~ | `.hero-intro` → `1.28rem` |
| 메인 · 680px 이하 | Backend Systems → Computer Vision → Multimodal AI | `.hero-path` → `1.2rem` |
| 메인 · 680px 이하 | 탭 번호 01–03 | `.portfolio-tab span` → `1.2rem` |
| 메인 · 680px 이하 | Selected Projects · Evolution · Profile & Capabilities | `.portfolio-tab strong` → `1.2rem` |
| 메인 · 680px 이하 | Featured Work · From Systems to Intelligence · Profile & Capabilities. | `.section-heading h2` → `clamp(2.1rem, 9.5vw, 3rem)` |
| 메인 · 680px 이하 | 모든 기술 태그 | `.stack-groups span` → `1.2rem` |
| 메인 · 680px 이하 | Let's explore the next problem. | `footer h2` → `clamp(2rem, 8.8vw, 2.8rem)` |
| 상세 전체 · 1100px 이하 | 모든 큰 섹션 제목 · Overview · Review · Tools used | 마지막 `@media (max-width: 1100px)`의 공통 `:is(...)` 선택자 → `clamp(1.9rem, 7.8vw, 2.55rem)` |
| 상세 전체 · 620px 이하 | 프로젝트명 h1 | `h1` → `clamp(2.6rem, 13vw, 4rem)` |
| Burinake · 620px 이하 | Burinake | `.burinake-project-hero h1` → `clamp(2.5rem, 12vw, 3.8rem)` |
| Itinera · 620px 이하 | Itinera | `.itinera-project-hero h1` → `clamp(2.5rem, 12vw, 3.8rem)` |
| 상세 전체 · 620px 이하 | Overview · 섹션 · Review 제목 | 중간 모바일 규칙은 `clamp(1.95rem, 8vw, 2.7rem)`이지만, 파일 뒤쪽의 1100px 공통 규칙이 최종적으로 `clamp(1.9rem, 7.8vw, 2.55rem)`을 적용 |
| 상세 전체 · 620px 이하 | 헤더 링크 | `.header-actions` → `font-size: .68rem` |

## 9. 직접 조정할 때 우선 볼 값

전체 인상을 빠르게 바꾸려면 아래 값부터 조절하면 됩니다.

| 목적 | 메인 | 프로젝트 상세 |
|---|---|---|
| 가장 큰 제목 | `style.css`의 `h1` | `projects/project.css`의 `h1` |
| 섹션 제목 | `style.css`의 `.section-heading h2` | `project.css` 뒤쪽의 공통 `:is(...) ... h2` |
| 일반 본문 | `.hero-intro`, `.section-heading > p`, `.project-info > p`, `.profile-intro p` | `.hero-summary`, `.overview-intro > p`, `.section-heading > div > p`, 각 컴포넌트의 `p` |
| 작은 영문 라벨 | `.kicker`, `.section-index`, `.project-meta`, `.project-role` | `.hero-meta`, `.section-label`, 카드의 `span`/`dt`, `figcaption` |
| 카드 제목 | `.project-info h3 small`, `.project-info h3 strong` | `.contribution-grid h3`, `.decision-grid h3`, `.result-card h3` |
| 모바일 큰 제목 | `@media (max-width: 620px)`의 `h1`, `.section-heading h2` | 파일 끝의 `@media (max-width: 1100px)` 공통 제목 규칙과 `@media (max-width: 620px)`의 `h1` |
