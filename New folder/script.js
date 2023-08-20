class CssPropControl {
  constructor(element) {
    this.element = element
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName)
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val)
  }
}

const bodyCssProps = new CssPropControl(document.body)

let toggle = document.querySelector("#dark-mode-toggle")
toggle.addEventListener("click", () => { 
  let mode = toggle.checked ? "dark" : "light"
  bodyCssProps.set("--background", bodyCssProps.get(`--${mode}-background`))
  bodyCssProps.set("--primary", bodyCssProps.get(`--${mode}-primary`))
  bodyCssProps.set("--link", bodyCssProps.get(`--${mode}-link`))
})

let header = document.getElementById("header-name");
header.addEventListener("click", () => {
  // Simulate a mouse click:
  window.location.href = "index.html";
});


document.getElementById('header-text').innerHTML = `
    <header>
      <nav>
        <h1 id="header-name" style="cursor:pointer">Sathiya Murthi Sankaran</h1>
        <ul>
          <li><a href="index.html"><img style="margin:0 auto" class="header-img" src="media/IMG_1803.jpg"/></a></li>
          <li><a href="#">Work</a></li>
          <li><a href="resume.html">Resume</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </nav>
      <div class="controls">
        <label class="toggle-switch">
          Dark Mode
          <input type="checkbox" id="dark-mode-toggle">
          <div class="toggle-switch-border">
            <div class="toggle-switch-dot"></div>
          </div>
        </label>
      </div>
    </header>`;