fetch("assets/json/info.json")
  .then((res) => res.json())
  .then((res) => {
    showProjects(res);
  });
function showProjects(json) {
  const projectsContainer = document.querySelector(".projects-container");
  const projects = json.projects;

  projectsContainer.appendChild(getProjectsHTML(projects));
}

function getProjectsHTML(projects) {
  const fragment = document.createDocumentFragment();
  projects.forEach((project) => {
    const projectElement = document.createElement("DIV");

    projectElement.innerHTML = `
                                <div class="card col-12 col-md-8 col-lg-12 m-auto m-lg-0 p-0 mb-3 text-start" style="background-color: #111827">
            <div class="row g-0 ">
              <div class=" col-md-12  col-lg-4" style="background-color: #374151;">
                <img src="${project.image}" class="img-fluid h-100" alt="...">
              </div>
              <div class="col-md-12  col-lg-8">
                <div class="card-body p-lg-4">
                  <h5 class="card-title text-light">${project.name}</h5>
                  <p class="card-text text-secondary">${project.description}</p>
                  <div class="d-flex gap-1 flex-wrap">
                    ${getSkills(project.skills)}
                  </div>
                  <div class="d-flex align-items-center gap-2 mt-3">
                    <a href="${project.demo}" target="_blank" class="links">
                      <svg class="svg-1" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 17.3333V25.3333C24 26.0406 23.719 26.7189 23.219 27.219C22.7189 27.719 22.0406 28 21.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V10.6667C4 9.95942 4.28095 9.28115 4.78105 8.78105C5.28115 8.28095 5.95942 8 6.66667 8H14.6667" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 4H28V12" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.3333 18.6667L27.9999 4" stroke="#F3F4F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </a>
                    <a href="${
                      project.github
                    }" target="_blank" class="links"><svg class="svg-2" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.9561 3.29419C20.9947 3.16864 21.0082 3.03672 20.9958 2.90596C20.9834 2.7752 20.9454 2.64815 20.884 2.53208C20.8225 2.41601 20.7388 2.31318 20.6375 2.22947C20.5363 2.14575 20.4196 2.08279 20.2941 2.04419C20.1685 2.00558 20.0366 1.99207 19.9059 2.00445C19.7751 2.01682 19.648 2.05483 19.532 2.1163C19.4159 2.17777 19.3131 2.26151 19.2294 2.36272C19.1456 2.46393 19.0827 2.58064 19.0441 2.70619L11.0441 28.7062C10.9661 28.9597 10.992 29.2339 11.1162 29.4683C11.2403 29.7027 11.4525 29.8782 11.7061 29.9562C11.9596 30.0342 12.2338 30.0082 12.4682 29.8841C12.7026 29.7599 12.8781 29.5477 12.9561 29.2942L20.9561 3.29419ZM9.70808 8.29219C9.8012 8.38508 9.87509 8.49543 9.9255 8.61692C9.97592 8.73841 10.0019 8.86865 10.0019 9.00019C10.0019 9.13172 9.97592 9.26196 9.9255 9.38345C9.87509 9.50494 9.8012 9.61529 9.70808 9.70819L3.41408 16.0002L9.70808 22.2922C9.89585 22.48 10.0013 22.7346 10.0013 23.0002C10.0013 23.2657 9.89585 23.5204 9.70808 23.7082C9.52031 23.896 9.26563 24.0014 9.00008 24.0014C8.73453 24.0014 8.47985 23.896 8.29208 23.7082L1.29208 16.7082C1.19895 16.6153 1.12507 16.5049 1.07465 16.3835C1.02424 16.262 0.998291 16.1317 0.998291 16.0002C0.998291 15.8687 1.02424 15.7384 1.07465 15.6169C1.12507 15.4954 1.19895 15.3851 1.29208 15.2922L8.29208 8.29219C8.38497 8.19906 8.49532 8.12517 8.61681 8.07476C8.7383 8.02435 8.86854 7.9984 9.00008 7.9984C9.13161 7.9984 9.26186 8.02435 9.38335 8.07476C9.50484 8.12517 9.61519 8.19906 9.70808 8.29219ZM22.2921 8.29219C22.199 8.38508 22.1251 8.49543 22.0747 8.61692C22.0242 8.73841 21.9983 8.86865 21.9983 9.00019C21.9983 9.13172 22.0242 9.26196 22.0747 9.38345C22.1251 9.50494 22.199 9.61529 22.2921 9.70819L28.5861 16.0002L22.2921 22.2922C22.1991 22.3852 22.1253 22.4955 22.075 22.617C22.0247 22.7385 21.9988 22.8687 21.9988 23.0002C21.9988 23.1317 22.0247 23.2619 22.075 23.3834C22.1253 23.5048 22.1991 23.6152 22.2921 23.7082C22.3851 23.8012 22.4954 23.8749 22.6169 23.9252C22.7384 23.9756 22.8686 24.0014 23.0001 24.0014C23.1316 24.0014 23.2618 23.9756 23.3832 23.9252C23.5047 23.8749 23.6151 23.8012 23.7081 23.7082L30.7081 16.7082C30.8012 16.6153 30.8751 16.5049 30.9255 16.3835C30.9759 16.262 31.0019 16.1317 31.0019 16.0002C31.0019 15.8687 30.9759 15.7384 30.9255 15.6169C30.8751 15.4954 30.8012 15.3851 30.7081 15.2922L23.7081 8.29219C23.6152 8.19906 23.5048 8.12517 23.3833 8.07476C23.2619 8.02435 23.1316 7.9984 23.0001 7.9984C22.8685 7.9984 22.7383 8.02435 22.6168 8.07476C22.4953 8.12517 22.385 8.19906 22.2921 8.29219Z" />
                      </svg>
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;

    function getSkills(skills) {
      let skillHTML = "";
      skills.forEach((skill) => {
        skillHTML += `<h2 class="fs-6"></h2>
                      <button 
                        type="button" 
                        class="btn btn-secondary text-muted border-0 rounded-4" 
                        style="pointer-events: none;">
                        ${skill}
                      </button>
                    </h2>`;
      });
      return skillHTML;
    }

    fragment.appendChild(projectElement);
  });
  return fragment;
}

// CONTACT COPY ACTIONS

document.querySelectorAll(".copyButton").forEach((button, index) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const text = document.getElementById(`textToCopy${index + 1}`).textContent;

    // Usamos la API moderna para copiar el texto
    navigator.clipboard
      .writeText(text)
      .then(() => {
        const toastEl = document.querySelector(".toast");
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  });
});

const toastEl = document.querySelector(".toast");
const toast = new bootstrap.Toast(toastEl);
