const projects = [
  {
    id: "backend-01",
    order: "01",
    category: "backend",
    type: "Backend",
    title: "Backend Project 01",
    summary: "서비스 구조와 데이터 흐름을 다룬 첫 번째 백엔드 프로젝트입니다.",
    tags: ["Role pending", "Details soon"],
    stage: "Foundation",
  },
  {
    id: "backend-02",
    order: "02",
    category: "backend",
    type: "Backend",
    title: "Backend Project 02",
    summary: "확장 가능한 시스템 설계 경험을 담을 두 번째 백엔드 프로젝트입니다.",
    tags: ["Role pending", "Details soon"],
    stage: "System",
  },
  {
    id: "vision-01",
    order: "03",
    category: "vision",
    type: "AI / Computer Vision",
    title: "Vision Research 01",
    summary: "연구 질문, 데이터셋과 정성·정량적 결과가 이곳에 기록됩니다.",
    tags: ["Dataset pending", "Metrics soon"],
    stage: "Transition",
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
  },
];

const projectGrid = document.querySelector("#project-grid");
const timeline = document.querySelector("#timeline");

function projectCard(project) {
  return `
    <article class="project-card reveal" data-category="${project.category}">
      <div class="project-image ${project.category}" style="--visual-color: ${project.category === "vision" ? "#1c55ff" : "#77ddd1"}">
        <div class="image-label"><span>CASE / ${project.order}</span><span>VISUAL PENDING</span></div>
        <span class="image-status">CONTENT IN PROGRESS</span>
      </div>
      <div class="project-info">
        <div class="project-meta"><span>${project.type}</span><span>${project.order} / ${String(projects.length).padStart(2, "0")}</span></div>
        <h3>${project.title}</h3>
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
        <span>Details pending</span>
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
