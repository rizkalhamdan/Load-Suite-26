load.setup(true, false, true)

document.querySelector('html').style.setProperty("--main-color", "#44ff88")

const nagh = new Naghoom("About Load Suite")

let head = nagh.na({ name: "section", classes: "rc head" })

nagh.na({ name: "h2", content: "Load Suite", 'font-family': "Ubuntu, Arial", nag: head.nag })

nagh.na({
  name: "h3",
  content: "<span class='material-symbols-rounded'>contrast</span>",
  nag: head.nag,
  click: load.view_themes
})

nagh.na( {name: "h1", classes: "fix"} )

function go(title, dis, btn, fun) {
  var about = nagh.na( {classes: "rc go"} )
  
  nagh.na( {name: "h2", classes: "rc big", content: title, nag: about.nag, 'text-align': "left"} )
  
  nagh.na({
    name: "h2",
    content: `<br> ${dis}`,
    nag: about.nag
  })
  
  nagh.na({
    name: "button",
    classes: "rc btn main",
    content: btn,
    nag: about.nag,
    padding: "2rem",
    'border-radius': "5rem",
    'margin-top': "2rem",
    click: fun,
    display: btn?"inline":"none"
  })
}

go("About", `Load Suite — where precision meets elegance.  
      A modular toolkit for seamless control, crafted to elevate your digital architecture. It redefines how systems breathe.`, "", _=> location.assign(`#${first.id}`))


go("<u>Developer Guide</u>", `Get Quick Developer Guidelines now`, "Get it", _=> location.assign('developer-guide/'))

go("Quick setup", "I know how install and setup the suite.", "<span class='material-symbols-rounded'>link</span>", _=> location.assign('quick/'))

let ready = nagh.na({
  display: "flex",
  'justify-content': "space-between",
  'align-items': "center",
  gap: "2rem",
  'margin-top': "6rem"
})

nagh.na({
  classes: "rc osloading small",
  content: '<div class ="one"></div> <div class="two"></div>',
  nag: ready.nag,
  visibility: "hidden"
})

nagh.na( {name: "p", content: "See the difference for yourself", nag: ready.nag} )

nagh.na({
  name: "button",
  classes: "rc btn text",
  content: "<span class='material-symbols-rounded weight-900 fill'>vertical_align_bottom</span>",
  nag: ready.nag,
  click: _=> location.assign(`#${first.id}`)
})


let first = nagh.na( {name: "h1", 'margin-bottom': "28rem"} )


// Magic touches 
const magic = function (a = {}) {
  a.name = a.name || "Not found"
  a.mname = a.mname || "button"
  a.nname = a.nname || ""
  a.mclass = a.mclass || "rc btn"
  
  nagh.na( {name: "h1", 'margin-top': "25rem"} )
  
  var sec = nagh.na({
    name: "section",
    border: ".4rem solid var(--second-col)",
    padding: "1rem",
    'border-radius': "2.4rem"
  })
  
  nagh.na({ name: "b", classes: "rc big", content: a.name, nag: sec.nag })
  
  nagh.na({
    classes: "rc box",
    content: `<${a.mname}>${a.nname}</${a.mname}>`,
    nag: sec.nag
  })
  
  nagh.na({
    name: "h1",
    'text-align': "center",
    color: "var(--cadoa-orange)",
    content: `<span class="material-symbols-rounded">wand_stars</span>`,
    nag: sec.nag
  })
  
  nagh.na({
    classes: "rc box",
    content: `<${a.mname} class='${a.mclass}'>${a.nname}</${a.mname}>`,
    nag: sec.nag
  })
}

magic({name: "Button", mname: "button", nname: "click", mclass: "rc btn main"})

magic({name: "Input", mname: "input", nname: "", mclass: "rc inp"})

magic({name: "h1 - title", mname: "h1", nname: "Title", mclass: "rc title form1"})

magic({name: "b - A message", mname: "b", nname: "This is a simple message", mclass: "rc msg right"})


nagh.na( {name: "h1", 'margin-top': "8rem"} )

