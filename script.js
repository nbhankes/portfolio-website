gsap.from(".socialMediaContainer", { duration: 1, y: "-100" });

function portfolioLink() {
  var portfolio = document.getElementById("portfolio");

  portfolio.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function resumeLink() {
  var resume = document.getElementById("resume");

  resume.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

function contactLink() {
  var contact = document.getElementById("contact");

  contact.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
