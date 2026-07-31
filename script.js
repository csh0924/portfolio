const projects = [
  {
    id: "backend-01",
    order: "01",
    category: "backend",
    type: "Backend",
    title: "Emuda",
    summary: "감정 일기를 BERT로 분석하고 ChatGPT·Spotify를 연결해 사용자 취향과 감정에 맞는 음악을 추천하는 서비스입니다.",
    tags: ["Spring Boot", "MySQL", "BERT API", "ChatGPT API", "AWS EC2"],
    stage: "First Team Project",
    period: "2024. 03 — 2024. 06",
    role: "Backend · AI Pipeline Integration",
    link: "./projects/emuda.html",
    repository: "https://github.com/SSU-RETURN",
    image: "./assets/projects/emuda/emuda-logo.jpg",
    imageAlt: "Emuda Emotion Music Diary 로고",
    imageLabel: "PROJECT IDENTITY",
    featuredRank: 5,
    featuredLabel: "AI SERVICE",
  },
  {
    id: "backend-02",
    order: "02",
    category: "backend",
    type: "Backend",
    title: "Itinera",
    summary: "Google Places의 장소 정보와 리뷰 기반 취향 태그를 자체 데이터로 축적하고, 이를 기반으로 사용자가 여행지를 선택해 일정을 구성하는 맞춤형 여행 서비스입니다.",
    tags: ["Spring Boot", "MySQL", "Elasticsearch", "Google Places API", "LLM Tagging"],
    stage: "Data-backed Service",
    period: "2025. 03 — 2025. 06",
    role: "Backend · Place & Trip Domain",
    link: "./projects/itinera.html",
    repository: "https://github.com/ssu-capstone-Itinera",
    image: "./assets/projects/itinera/itinera-cover.jpg",
    imageAlt: "추천 여행지와 일정 생성 기능을 제공하는 Itinera 메인 화면",
    imageLabel: "PERSONALIZED TRAVEL",
    featuredRank: 4,
    featuredLabel: "BACKEND · DATA PIPELINE",
  },
  {
    id: "vision-01",
    order: "03",
    category: "vision",
    type: "AI / Computer Vision",
    title: "바른글씨: 바람",
    summary: "한글 손글씨를 문자와 자소 단위로 분석해 교정 피드백을 제공하는 컴퓨터비전 서비스입니다. CRAFT·기하학적 후처리와 직접 학습한 FPN을 하나의 분석 Pipeline으로 구성했습니다.",
    tags: ["PyTorch", "CRAFT", "FPN", "OpenCV"],
    stage: "First AI Pipeline",
    period: "2025. 09 — 2025. 12",
    role: "CV Pipeline · Dataset Engineering",
    link: "./projects/baram.html",
    repository: "https://github.com/csh0924/Baram_Handwritting_Analysis",
    image: "./assets/projects/baram/baram-segmentation-refinement.png",
    imageAlt: "인쇄체 기준과 연결 성분을 이용해 초성 중성 종성 Segmentation을 보강한 바른글씨 바람 후처리 결과",
    imageLabel: "SEGMENTATION REFINEMENT",
    featuredRank: 3,
    featuredLabel: "FEATURED · CV PIPELINE",
  },
  {
    id: "vision-02",
    order: "04",
    category: "vision",
    type: "AI / Computer Vision",
    title: "CSAS",
    summary: "시설물 이미지에서 결함의 종류와 영역을 함께 판별하는 Cascade 컴퓨터비전 시스템입니다. 불완전한 Label을 보완하기 위해 분류 Logit을 SegFormer의 Hint로 활용하고 Custom Loss를 설계했습니다.",
    tags: ["PyTorch", "EfficientNet", "SegFormer", "Custom Loss", "Docker", "AWS EKS"],
    stage: "Cascade Vision",
    period: "2026. 05 — 2026. 06",
    role: "Team Lead · AI Pipeline Design",
    link: "./projects/csas.html",
    repository: "https://github.com/YuYoungKwang/CSAS",
    image: "./assets/projects/csas/csas-cover-v2.png",
    imageAlt: "콘크리트 균열과 컴퓨터비전 분석 Overlay를 표현한 CSAS 프로젝트 대표 이미지",
    imageLabel: "PROJECT COVER",
    featuredRank: 2,
    featuredLabel: "FEATURED · CASCADE VISION",
  },
  {
    id: "vision-03",
    order: "05",
    category: "vision",
    type: "AI / Multimodal Vision",
    title: "Burinake",
    summary: "주기적으로 전달되는 CCTV 이미지에서 화재·연기 후보를 빠르게 탐지하고 VLM으로 실제 위험 상황인지 재판단하는 AI 안전 관리 서비스입니다. YOLO와 VLM을 조건부 Cascade로 연결해 정확도·지연·비용을 함께 고려했습니다.",
    tags: ["YOLOv12", "DETR", "VLM", "Azure AI Foundry", "Docker", "Azure AKS"],
    stage: "Multimodal Vision",
    period: "2026. 06 — 2026. 07",
    role: "Team Lead · Detection & VLM Pipeline",
    link: "./projects/burinake.html",
    repository: "https://github.com/heolyun/Burinake",
    image: "./assets/projects/burinake/burinake-cover.png",
    imageAlt: "실제 화재 영상에서 불과 연기를 탐지한 Burinake YOLO 결과",
    imageLabel: "FIRE · SMOKE DETECTION",
    featuredRank: 1,
    featuredLabel: "FEATURED · MULTIMODAL AI",
    featuredPrimary: true,
  },
];

const projectGrid = document.querySelector("#project-grid");
const timeline = document.querySelector("#timeline");

function projectCard(project) {
  const title = project.link
    ? `<a href="${project.link}"${project.link.startsWith("http") ? ' target="_blank" rel="noreferrer"' : ""}>${project.title} <span aria-hidden="true">↗</span></a>`
    : project.title;
  const image = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt}" loading="lazy">`
    : "";

  return `
    <article class="project-card ${project.featuredPrimary ? "is-primary" : ""} reveal" data-category="${project.category}">
      <div class="project-image ${project.category} ${project.image ? "has-image" : ""}" style="--visual-color: ${project.category === "vision" ? "#1c55ff" : "#77ddd1"}">
        ${image}
        <div class="image-label"><span>${project.featuredLabel}</span><span>${project.imageLabel}</span></div>
        ${project.imageStatus ? `<span class="image-status">${project.imageStatus}</span>` : ""}
      </div>
      <div class="project-info">
        <div class="project-meta"><span>${project.role}</span><span>${project.period}</span></div>
        <h3>${title}</h3>
        ${project.summary ? `<p>${project.summary}</p>` : ""}
        ${project.metric ? `<span class="project-metric">${project.metric}</span>` : ""}
        ${project.tags.length ? `<div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>` : ""}
      </div>
    </article>
  `;
}

const evolutionStages = [
  {
    order: "01",
    period: "2024 · FOUNDATION",
    category: "backend",
    label: "BACKEND FOUNDATION",
    title: "API와 AI 출력을 서비스 흐름으로",
    description: "REST API, 데이터베이스, 외부 AI 연동과 배포를 경험하며 분석 결과를 실제 사용자 기능으로 연결하는 Backend 기반을 구축했습니다.",
    reference: "EMUDA",
  },
  {
    order: "02",
    period: "2025 · DATA SYSTEM",
    category: "backend",
    label: "DATA-BACKED RECOMMENDATION",
    title: "외부 데이터를 축적 가능한 서비스 자산으로",
    description: "Google Places 결과를 Place Domain과 검색 데이터로 변환하고, DB 우선 검색과 조건부 외부 수집을 결합한 추천·일정 Backend로 확장했습니다.",
    reference: "ITINERA",
  },
  {
    order: "03",
    period: "2025 · DEVELOPMENT",
    category: "vision",
    label: "DEEP LEARNING DEVELOPMENT",
    title: "데이터와 학습 과정을 직접 구축",
    description: "기성 API를 연결하는 단계를 넘어, 한글 구조를 반영한 합성 데이터셋과 유형별 FPN 학습 전략을 직접 구성했습니다.",
    reference: "바른글씨: 바람",
  },
  {
    order: "04",
    period: "2025 · VISION",
    category: "vision",
    label: "COMPUTER VISION PIPELINE",
    title: "검출·분리·Segmentation·평가의 결합",
    description: "CRAFT 출력, 기하학 알고리즘, 자소 Segmentation과 후처리를 하나의 분석 서버로 연결하며 컴퓨터비전 파이프라인 설계로 확장했습니다.",
    reference: "바른글씨: 바람",
  },
  {
    order: "05",
    period: "2026 · SERVING",
    category: "vision",
    label: "CASCADE VISION & AI SERVING",
    title: "불완전한 데이터에서 운영 가능한 AI 시스템으로",
    description: "분류 Logit과 Segmentation을 결합한 Cascade 구조, Custom Loss, Docker 기반 AI 서버와 EKS 배포를 연결하며 연구 모델을 운영 시스템으로 확장했습니다.",
    reference: "CSAS",
  },
  {
    order: "06",
    period: "2026 · MULTIMODAL",
    category: "vision",
    label: "DETECTION & VLM CASCADE",
    title: "시각적 탐지에서 맥락과 상황 이해로",
    description: "YOLO 기반 준실시간 후보 탐지와 VLM의 상황 이해를 조건부 Cascade로 결합하며, Latency와 비용을 제어하는 멀티모달 AI Pipeline으로 확장했습니다.",
    reference: "BURINAKE",
  },
];

function timelineRow(stage) {
  return `
    <article class="timeline-row ${stage.category} reveal">
      <div class="timeline-stage"><span>MILESTONE ${stage.order}</span><small>${stage.period}</small></div>
      <div class="timeline-detail">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-copy">
          <small>${stage.label}</small>
          <h3>${stage.title}</h3>
          <p>${stage.description}</p>
        </div>
        <span class="evolution-reference">${stage.reference}</span>
      </div>
    </article>
  `;
}

const publishedProjects = projects.filter((project) => project.published !== false);
const featuredProjects = publishedProjects
  .filter((project) => project.featured !== false && project.link)
  .sort((a, b) => a.featuredRank - b.featuredRank);

projectGrid.innerHTML = featuredProjects.map(projectCard).join("");
timeline.innerHTML = evolutionStages.map(timelineRow).join("");
document.querySelector("#project-count").textContent = String(projects.length).padStart(2, "0");
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter-button").forEach((button) => {
  const filter = button.dataset.filter;
  const count = filter === "all"
    ? featuredProjects.length
    : featuredProjects.filter((project) => project.category === filter).length;
  button.querySelector("span").textContent = String(count).padStart(2, "0");
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const previous = document.querySelector(".filter-button.is-active");
    previous?.classList.remove("is-active");
    previous?.setAttribute("aria-pressed", "false");
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");

    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
