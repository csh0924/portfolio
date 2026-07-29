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
  },
  {
    id: "backend-02",
    order: "02",
    category: "backend",
    type: "Backend",
    title: "Itinera",
    summary: "프로젝트 자료 확인 후 업데이트할 예정입니다.",
    tags: ["Details pending"],
    stage: "System",
    period: "Date pending",
    role: "Backend",
    imageLabel: "project archive pending",
  },
  {
    id: "vision-01",
    order: "03",
    category: "vision",
    type: "AI / Computer Vision",
    title: "바른글씨: 바람",
    summary: "CRAFT와 기하학적 후처리로 손글씨 문자를 분리하고, 직접 생성한 51,138개 데이터로 학습한 FPN을 통해 초·중·종성을 분석하는 한글 손글씨 교정 서비스입니다.",
    tags: ["PyTorch", "CRAFT", "FPN", "OpenCV", "51,138 Labeled Images"],
    stage: "First AI Pipeline",
    period: "2025. 09 — 2025. 12",
    role: "AI Model · Dataset · Python Server",
    link: "./projects/baram.html",
    repository: "https://github.com/csh0924/Baram_Handwritting_Analysis",
    image: "./assets/projects/baram/baram-logo.png",
    imageAlt: "바른글씨 바람 애플리케이션 로고",
    imageLabel: "HANDWRITING ANALYSIS",
  },
  {
    id: "vision-02",
    order: "04",
    category: "vision",
    type: "AI / Computer Vision",
    title: "Vision Research 02",
    summary: "모델 구조와 실험 설계, 성능 개선 과정을 시각적으로 보여줍니다.",
    tags: ["Dataset pending", "Metrics soon"],
    stage: "Research",
    period: "Date pending",
    role: "AI / Computer Vision",
    imageLabel: "result image pending",
  },
  {
    id: "vision-03",
    order: "05",
    category: "vision",
    type: "AI / Computer Vision",
    title: "Vision Research 03",
    summary: "대표 결과 이미지와 실패 사례를 함께 분석할 연구 프로젝트입니다.",
    tags: ["Dataset pending", "Metrics soon"],
    stage: "Vision",
    period: "Date pending",
    role: "AI / Computer Vision",
    imageLabel: "result image pending",
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
    <article class="project-card reveal" data-category="${project.category}">
      <div class="project-image ${project.category} ${project.image ? "has-image" : ""}" style="--visual-color: ${project.category === "vision" ? "#1c55ff" : "#77ddd1"}">
        ${image}
        <div class="image-label"><span>CASE / ${project.order}</span><span>${project.imageLabel}</span></div>
        ${project.image ? "" : '<span class="image-status">CONTENT IN PROGRESS</span>'}
      </div>
      <div class="project-info">
        <div class="project-meta"><span>${project.role}</span><span>${project.period}</span></div>
        <h3>${title}</h3>
        <p>${project.summary}</p>
        <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `;
}

function timelineRow(project) {
  return `
    <article class="timeline-row ${project.category} reveal">
      <div class="timeline-stage">${project.order} / ${project.stage}</div>
      <div class="timeline-detail">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div>
          <small>${project.type}</small>
          <h3>${project.title}</h3>
        </div>
        <span>${project.period}</span>
      </div>
    </article>
  `;
}

projectGrid.innerHTML = projects.map(projectCard).join("");
timeline.innerHTML = projects.map(timelineRow).join("");
document.querySelector("#project-count").textContent = String(projects.length).padStart(2, "0");
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.is-active")?.classList.remove("is-active");
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
