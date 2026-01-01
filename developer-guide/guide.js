core.na({name: "h1", classes: "fix"})

let cho = core.na({
  display: "flex",
  'justify-content': "space-around",
  'align-items': "center"
})

core.na({
  name: "button",
  classes: "rc btn lineout cho",
  content: "cadoa.css",
  nag: cho.nag,
  click: _=> chos(1)
})

core.na({
  name: "button",
  classes: "rc btn lineout cho",
  content: "load.js",
  nag: cho.nag,
  click: _=> chos(2)
})

core.na({
  name: "button",
  classes: "rc btn lineout cho",
  content: "naghoom.js",
  nag: cho.nag,
  click: _=> chos(3)
})

// cho algorithm

let chos = c => {
  document.querySelectorAll(".cho").forEach(e => {
    e.classList.remove("main")
  })
  document.querySelectorAll(".cho")[c-1].classList.add("main")
  
  load_data(c)
}

let container = core.na({
  name: "section",
  margin: "2rem 0 30rem"
})

let viewer = core.na({
  name: "section",
  classes: "rc full align load_guide",
  display: "none",
  'justify-content': "space-around"
})

core.na({
  name: "h2",
  classes: "rc col big",
  content: "Load Suite Guide <br> view code",
  nag: viewer.nag
})

let code = core.na({
  classes: "rc box",
  content: "Try it",
  nag: viewer.nag,
  'max-width': "90%"
})

core.na({
  name: "span",
  classes: "material-symbols-rounded",
  content: "cancel",
  nag: viewer.nag,
  'font-size': "5rem",
  click: _=> load.remo(document.querySelector(".load_guide")),
})

const load_data = n => {
  container.nag.innerHTML = ""
  
  if(n > 3 || n < 1) n = 1
  var ssdf = ["cadoa", "load", "naghoom"][n-1]
  
  fetch(`data/${ssdf}.json`)
    .then(resp => resp.json())
    .then(data => {
      var _data_ = data["guide"]
      
      for (var i = 0; i < _data_.length; i++) {
        core.na({
          content: _data_[i],
          margin: "5rem 0",
          'border-bottom': `.2rem solid ${i < _data_.length-1?'var(--second-col)':"transparent"}`,
          nag: container.nag,
          'font-size': "1.8rem"
        })
        .atr( {ondblclick: `vi("${_data_[i]}")`, onmouseover: `si("${_data_[i]}")`} )
      }
      core.na({name: "h1", classes: "fix"})
    })
    .catch(e=> load.CLC.toast(`Error: ${e}`, "error"))
    
  
}

function vi(s) {
  code.nag.innerText = s
  viewer.nag.style.display = "flex"
}

function si(s) {
  // Plus content
  document.querySelector("#plussidebarcontent").innerText = s
  // document.querySelector("#plussidebarcontent").innerHTML = "<br>" + s
}

window.addEventListener("DOMContentLoaded", function() {
  // load.CLC.toast("You should double click on the element whitch you want to copy source's code!", "warn")
})