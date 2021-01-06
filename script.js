//! **************** GSAP ANIMATIONS ****************

gsap.from(".socialMediaContainer", { duration: 1, y: "-100" })

//! **************** DARKMODE TOGGLE ****************

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
)

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark")
  } else {
    document.documentElement.setAttribute("data-theme", "light")
  }
}

toggleSwitch.addEventListener("change", switchTheme, false)

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark") //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light") //add this
  }
}

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme)

  if (currentTheme === "dark") {
    toggleSwitch.checked = true
  }
}

//! **************** LINK SMOOTH SCROLLING ****************

function portfolioLink() {
  var portfolio = document.getElementById("portfolio")

  portfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

function resumeLink() {
  var resume = document.getElementById("resume")

  resume.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

function contactLink() {
  var contact = document.getElementById("contact")

  contact.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  })
}

//! **************** INTRO TEXT ****************

var introText = document.getElementById("introText")

var typewriter = new Typewriter(introText, {
  loop: false,
})

typewriter
  .typeString("My name is Nate.")
  .pauseFor(300)
  .typeString(" And This is my journey into Tech.")
  .pauseFor(3000)
  .start()

//! **************** PORTFOLIO BEHAVIOR ****************

function portfolioCohort() {
  event.preventDefault()
  Swal.fire({
    title: "This project was all about teamwork, work flow, and communication!",
    html: `
    <ul style="text-align:left">
      <li>As team leader, I set project scope and provided design guidance while relying on agile methodology, 
      GitHub workflows, and remote communication to deliver this product to spec and on time. </li>
      </br> </br> 
      <li>My contribution to the project design was the team member introduction cards and the iframe embed.</li>
      </br> </br>
      <li>This project is built in HTML and CSS and was deployed to the web via Surge.
      Our team utilized pull requests, issue tickets, Zoom, and Slack messenger to work together remotely as a team.</li>
    </ul>
      `,
    backdrop: `
    rgba(0,0,0,0.7)
    `,
    showConfirmButton: false,
  })
}

//! **************** FORM BEHAVIOR ****************

function submissionAlert() {
  event.preventDefault()
  Swal.fire({
    icon: "success",
    title: "Thank you!",
    text: "You'll hear back shortly.",
    showConfirmButton: false,
    backdrop: `
    rgba(0,0,0,0.7)
    `,
  })
}
