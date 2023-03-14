// mobile menu section
function myFunction() {
  document.getElementById("mobile-menu").style.visibility = "visible";
  document.getElementById("menu-button").style.visibility = "hidden";
}
function myFunction2() {
  document.getElementById("mobile-menu").style.visibility = "hidden";
  document.getElementById("menu-button").style.visibility = "visible";
}

// projects section with popup window

function project() {
  let array = [
    {
      heading: "Tonic",
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      image:
        '<img src="images/Snapshoot Portfolio1.png" alt="Work 1" class="content-picture"/>',
      languages: ["html", "css", "javascript"],
      profession: ["Canopy", "Full Stack Dev", "2015"],
    },
    {
      heading: "Multi-Post Stories",
      description:
        "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      image:
        '<img src="images/Snapshoot Portfolio2.png" alt="Work 2" class="content-picture"/>',
      languages: ["html", "ruby on rails", "css", "javascript"],
      profession: ["FACEBOOK", "Full Stack Dev", "2015"],
    },
    {
      heading: "Facebook 360",
      description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      image:
        '<img src="images/Snapshoot Portfolio3.png" alt="Work 3" class="content-picture"/>',
      languages: ["html", "Ruby on rails", "css", "javascript"],
      profession: ["FACEBOOK", "Full Stack Dev", "2015"],
    },
    {
      heading: "Uber Navigation",
      description:
        "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      image:
        '<img src="images/Snapshoot Portfolio4.png" alt="Work 4" class="content-picture"/>',
      languages: ["html", "Ruby on rails", "css", "javascript"],
      profession: ["Uber", "Lead Developer", "2018"],
    },
  ];

  let a = document.getElementById("project-portfolio");
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      a.innerHTML += `
    <section class="works" id="portfolio">
    <div class="content" id="project1">
      ${array[i].image}
      <div class="content-body" id="content-body">
        <h2 class="content-title">${array[i].heading}</h2>
        <ul class="layout">
          <li class="call">${array[i].profession[0]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="profession">${array[i].profession[1]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="year">${array[i].profession[2]}</li>
        </ul>
        <p class="job-explanation">
          ${array[i].description}
        </p>
        <ul class="programming">
          <li class="platform">
            <a href="#html">${array[i].languages[0]}</a>
          </li>
          <li class="platform">
            <a href="#CSS">${array[i].languages[1]}</a>
          </li>
          <li class="platform">
            <a href="#JS">${array[i].languages[2]}</a>
          </li>
        </ul>
        <button type="button" class="content-view-button">See Project</button>
      </div>
    </div>
  </section>`;
    } else {
      a.innerHTML += `
    <section class="works" id="portfolio">
    <div class="content" id="project1">
      <div class="content-body" id="content-body">
        <h2 class="content-title">${array[i].heading}</h2>
        <ul class="layout">
          <li class="call">${array[i].profession[0]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="profession">${array[i].profession[1]}</li>
          <li><img src="images/point.svg" alt="." /></li>
          <li class="year">${array[i].profession[2]}</li>
        </ul>
        <p class="job-explanation">
          ${array[i].description}
        </p>
        <ul class="programming">
          <li class="platform">
            <a href="#html">${array[i].languages[0]}</a>
          </li>
          <li class="platform">
            <a href="#CSS">${array[i].languages[1]}</a>
          </li>
          <li class="platform">
            <a href="#JS">${array[i].languages[2]}</a>
          </li>
        </ul>
        <button type="button" class="content-view-button">See Project</button>
      </div>
      ${array[i].image}
    </div>
  </section>`;
    }
  }
}
