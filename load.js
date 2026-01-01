class Naghoom {
  #nag = document.body
  #status = false
  #version = "0.2"
  #date = "25.12.2025"
  constructor(nag_name = "Not known") {
    // Initialization
    try {
      document.title = nag_name
      var nenag = document.createElement("section")
      nenag.id = "HAMDNAG94" // Change it! Go to cadoa.css after newnag body and it that
      document.body.appendChild(nenag)
      this.#nag = document.getElementById("HAMDNAG94")
      // setTimeout(this.#head, 0) just to test it

      this.#status = true
    } catch (e) {
      this.#system_failure(e)
    }
  }

  #system_failure(cause = "Not known") {
    this.#status = false
    document.write(`Nago: System failure -- cause <br> '${cause}' . ${new Date().getUTCDate()}`)
  }

  #na(n = {}) {
    var new_ele = document.createElement(n.name || 'div')

    var classes = n.classes ? n.classes.toString().split(" ") : []
    new_ele.innerHTML = n.content || ""
    new_ele.classList.add(...classes)

    var local_nag = n.nag || this.#nag
    var id_na = `na${Math.floor(Math.random() * 10e6)}`
    new_ele.id = id_na

    local_nag.appendChild(new_ele)
    var el = this.#nag.querySelector(`#${id_na}`)
    if (n.click !== undefined) el.addEventListener("click", n.click)

    if (n.hint) el.placeholder = n.hint

    // Remove it
    this.#sty(n, id_na)

    var _nag_ = this.#nag.querySelector(`#${id_na}`)
    var tis = this

    _nag_.style.opacity = "0"
    if (+n.preload > 80) _nag_.style.transition = "1s"
    setTimeout(_ => _nag_.style.opacity = "1", +n.preload || 0)
    return {
      id: id_na,
      nag: _nag_,
      n: n,
      atr: s => this.atr(s, id_na),
      na: function (t = {}) {
        t.nag = _nag_
        return tis.na(t)
      }
    }
  }

  na(n) {
    return this.#na(n)
  }


  #sty(st = {}, id_na = "unknown940000") {
    var el = this.#nag.querySelector(`#${id_na}`)
    var keys = Object.keys(st)

    for (var i = 0; i < keys.length; i++) {
      if (el.style[keys[i]] !== undefined) el.style.setProperty(keys[i], st[keys[i]])
    }

  }

  sty(st, id) {
    this.#sty(st, id)
  }

  #atr(at = {}, id = "no940000") {
    var keys = Object.keys(at)
    for (var i = 0; i < keys.length; i++) {
      this.#nag.querySelector(`#${id}`).setAttribute(keys[i], at[keys[i]])
    }
  }

  atr(at, id) {
    this.#atr(at, id)
  }

  nag() {
    return this.#nag
  }

  #head(p = {}) {
    var the = document.createElement("meta")
    the.name = "theme-color"
    var x = localStorage.colors
    var bgc = `#${(x == 1 || x == 3) ? "fff" : "000"}`
    
    the.content = p.theme || bgc

    document.head.appendChild(the)

    // <link rel="shortcut icon" href="Images/ic_cadoa.png" type="image/x-icon">
    var ico = document.createElement("link")
    ico.rel = "shortcut icon"
    ico.type = "image/x-icon"
    ico.href = p.icon || "//load.totalh.net/res/load-suite.jpg"

    document.head.appendChild(ico)
    var key = document.createElement("meta")
    key.name = "keywords"
    key.content = `Load Suite page, Naghoom, Rizk Hamdan, Cadoa LC, cadoa.css, load.js, ${p.keywords || "Kernal"}`
    document.head.appendChild(key)
  }

  head(sp = {}) {
    this.#head(sp)
  }

  get_icon_rounded(name) {
    return `<span class='material-symbols-rounded'>${name}</span>`
  }
}

const load = {
  version: {
    name: "Pre final",
    copy: 'PreF',
    number: "0.3"
  },
  is_set_size: true,
  side_bar_id: "HAMDSIDE94",
  setup_arg: {},
  snooze: function() {},
  loaded: false,
  setup: function (run_clc = true, run_fast = true, run_icon = true, run_side = true) {
    if(this.loaded) return 0
    this.loaded = true

    this.setup_arg = arguments
    
    if (true) {
      var clc = document.createElement("link")
      if (run_clc) {
        clc.setAttribute("href", "/cadoa.css")
        // clc.setAttribute("href", "//load.totalh.net/cadoa.css")
        clc.setAttribute("rel", "stylesheet")
        document.body.appendChild(clc)
      }

      var fu = document.createElement("section")
      fu.classList.add("rc", "full", "loadsetup")
      fu.style.background = "var(--second-col)"
      fu.innerHTML = `
        <div class="rc osloading">
          <div class="one"></div>
          <div class="two"></div>
        </div>
      `
      document.body.appendChild(fu)

      var ico = document.createElement("link")
      ico.rel = "stylesheet"

      if (run_icon) ico.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
      else run_fast = false


      setTimeout(_ => document.querySelector(".loadsetup").style.display = "none", 500)
      document.body.appendChild(ico)
      /*ico.addEventListener("load", _=> {
        document.querySelector(".loadsetup").style.display = "none"
      })*/


      document.querySelectorAll(".rc.write").forEach(e => load.CLC.write(e, true))

      // No navs in side bar currently
      var navvs = document.createElement("div")
      navvs.classList.add("rc", "navs")
      navvs.id = "navs"
      document.body.appendChild(navvs)


      this.is_set_size = run_side // && run_fast
      var isexistsidebar = this.side_bar(this.is_set_size)
      
      // One problem if resize the widnow size will not update this because cannot repeat the setup function again
      if (run_fast && run_clc && !isexistsidebar) this.fast()
      this.colors()


    }

    // 08.12.2025
    // Identity script
    // load.identity()
    // Closed . tech problems

    // Snooze for a few secs ...
    setTimeout(_=> load.snooze(), 1000)
  },

  colors: function (n) {
    if (n == undefined) n = localStorage.colors // For this.colors() it's same not reset or set now
    localStorage.colors = localStorage ?? 0 // Changed to system
    localStorage.colors = n % 2 == 0 ? 0 : 1
    n = localStorage.colors

    var root = document.querySelector('body').style
    var vams = ["--background", "--second-col", "--opacit-col", "--text-color", "--chat-color"]

    for (let i = 0; i < vams.length; i++) {
      const e = vams[i];
      // root.setProperty(e, e + '-' + (n % 2 == 0 ? "-dk" : "wh"))
      root.setProperty(e, `var(${e}-${n % 2 == 0 ? 'dk' : 'wh'})`)
    }
  },

  view_themes: function () {
    var unio = document.createElement("div")

    unio.innerHTML = `
  <section class="rc full clicked" onclick="load.remo(this)">

  <div class="rc box bo box_shadow private">
    <h1 class="rc col">Load Suite</h1>
    <b>Set theme</b>
    <br>
    <br>
    
    <div class="rc icons ichs" style="grid-template-columns: 1fr 1fr !important;gap: 1.4rem">
      <a class="rc icon ich" style="background-color: var(--background-wh)" id="s2" onclick="load.colors(1)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <b style="color: var(--text-color-wh)">WH_1</b>
        </div>
      </a>

      <a class="rc icon ich" style="background-color: var(--background-dk)" id="s1" onclick="load.colors(0)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <b style="color: var(--text-color-dk)">DK_1</b>
        </div>
      </a>
</section>
  `;
    document.getElementsByTagName("body")[0].appendChild(unio)
  },

  resettingNoti: function () {
    document.querySelector("body").innerHTML += `
      <section class="rc full" id="sfull">
        <div class="rc box bo box_shadow private">
          <h1 class="col">Load Suite</h1>
          
          <b>Erase all data</b> <br>
          <b class="rc red"> You will not can back this step!</b>
          
          <br> <br>
          
          <button class='rc btn' onclick='location.reload();'>back</button>
          <button class='rc btn main' onclick='load.resetting()'>Confirm</button>
          
        </div>
      </section>
    `;
  },
  resetting: function () {
    let sfu = document.getElementById("sfull");
    let con = `
      <div class="rc osloading"><div class="one"></div> <div class="two"></div></div>
    `;


    sfu.innerHTML = `
      <h1><span class="rc big">RC Security</span></h1>
      ${con}
      <b id="mas">Please, wait</b>
    `;
    let mas = document.getElementById('mas');

    let count = 0;
    let it = setInterval(function () {
      switch (count) {
        case 1:
          mas.innerHTML = '<span style="color: var(--cadoa-red)">Resetting all data</span>';
          localStorage.clear();
          sessionStorage.clear();
          break;
        case 5:
          mas.innerHTML = 'Load Suite system works in the default mode';
          break;
        case 6:
          mas.innerHTML = 'Erase all Data';
          break;
      }
      count++;
    }, 1000);



    setTimeout(function () {
      clearInterval(it);
      location.reload()
    }, 7000);
  },
  remo: e => {
    e.style.filter = "brightness(.2)"
    setTimeout(_ => {
      e.style.display = "none";
      e.style.filter = "brightness(1)"
    }, 200)
  },
  CLC: {
    version: "LC:Lab stable 0.2",
    address: "https://cadoa.epizy.com/libraries/css/",
    printAdress: function (ele) {
      ele = `${address}+${ele.innerHTML}ba`;
    },
    toast: function (msg, plusClass) {
      if (document.getElementById("navs").innerHTML == "") {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg} <span class='rc clear active' onclick='load.CLC.cleanToast()'>×</span></h1>`;
      }

      else {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg}</h1>
    `;
      }
    },
    cleanToast: function () {
      document.getElementById("navs").innerHTML = ``;
    },
    write: function (el, speed) {
      el.classList.add("rc");
      el.classList.add("edit");
      el.classList.remove("no");
      var con = el.innerHTML;
      el.innerHTML = "";
      let i = 0;
      let interv = setInterval(function () {
        if (i < con.length) {
          el.innerHTML += con[i];
        }
        else {
          setTimeout(function () {
            el.classList.add("no");
          }, 0);
          clearInterval(interv);
        }
        i++;
      }, speed ? 50 : 100);
    },
    view_version: function () {
      let bod = document.querySelector("html body");
      let logo = "Load Suite LC";
      let sp = 60
      bod.innerHTML += `
      <section class="rc full align" id="shve">
        <div class="rc private" id="versionMain">
          <h1 class="rc col big" id="wri">${logo}</h1>
        </div>
      </section>
    `;
      let Wri = document.getElementById("wri");
      let VersionMain = document.getElementById("versionMain");
      load.CLC.write(Wri, sp);

      setTimeout(function () {
        VersionMain.innerHTML += `
        <div class="rc CSV font martb" style="border-radius: 2rem">
          <span class="rc csv red">
            ${load.CLC.version}
          </span>
        </div>
      `;

        setTimeout(function () {
          VersionMain.innerHTML += `<div class="rc center" id="rezkhamdan94*_25">Rizk Hamdan built this suite.</div>`;
          let RezkHamdan = document.getElementById("rezkhamdan94*_25");
          load.CLC.write(RezkHamdan, 40);



          setTimeout(function () {
            versionMain.innerHTML = `
            <h1 class="rc big col">RC safety check</h1>
            <div class="rc osloading">
              <div class='one'></div>
              <div class='two'></div>
            </div>
            <b class='rc green'>pass..</b>
          `;

            setTimeout(function () {
              load.remo(document.getElementById("shve"));
            }, 3000);

          }, 4000);
        }, 4000);
      }, logo.length * sp * 2);
    }
  },

  fast: function () {
    var old = document.body.querySelector(".fast")?.innerHTML.toString() || "";

    var newCont = `
      <h1 class="rc big col">Load Suite - fast access</h1>
      <br>
      <div style='display: grid; grid-template-columns: auto auto; gap: 1rem'>
        <button class='rc btn main' onclick="load.view_themes()"><span class='material-symbols-rounded'>contrast</span>Themes</button>
        
        <button class='rc btn' onclick="load.CLC.view_version()"><span class='material-symbols-rounded'>info</span>version</button>
        
        <button class='rc btn' onclick="location.assign('https://load.totalh.net/developer-guide/')"><span class='material-symbols-rounded'>developer_guide</span>QDG beta</button>
        
        <button class='rc btn' onclick="load.resettingNoti()"><span class='material-symbols-rounded'>reset_settings</span>Default mode</button>
      </div>
      <br>
      <h2 style="display: flex;align-items: center; justify-content: space-between;gap: 1rem">View: ${document.title} <span class='material-symbols-rounded'>${navigator.onLine ? 'wifi' : 'wifi_off'}</span></h2>
    `

    document.querySelector(".fast")?.remove();
    var fas = document.createElement("div")
    fas.classList.add("rc", "fast")
    document.body.appendChild(fas)
    document.querySelector(".fast").replaceChildren()
    document.querySelector(".fast").insertAdjacentHTML("beforeend", old + newCont)
  },

  side_bar: function (isexist = true, with_fast = true) {
    // ITS CONTENT FAST CONTENT, LOCATION ADRESS, DEVTOOLS OPTIONAL AND INFO FOR DESCTOP VIEW (BIGGER 1000PX)
    // WARN ADD NAVS TO SIDE BAR NOT MAIN NAG IF THE VIEW NOT MOBILE

    // SET NAGHOOM FATHER .. Done
    

    // Code
    var sidenow = document.createElement("div")
    sidenow.id = "HAMDSIDE94" // Change it back to cadoa.css #HAMDSIDE94 {...} and changed it
    document.body.appendChild(sidenow)

    // All done .. Just append sidebar content here 

    return this.set_side(isexist)
  },

  set_side: function(isexist) {
    const isbigger = _ => {
      return window.innerWidth > 1100 // 100px for less width with sidebar
    }
    const isb = _ => {
      return isbigger() && isexist
    }

    var getsidenow = document.getElementById("HAMDSIDE94");
    getsidenow.style.width = isb()?innerWidth-1000 + 'px':"0px"
    getsidenow.style.display = isb() && innerWidth > 1200 ?"block":"none" // Fix for 1000px max width + side bar 200px

    
    // document.getElementById("HAMDNAG94").style.maxWidth = "1000px"

    // side bar content
    getsidenow.innerHTML = `
      <div class="rc box"> 
        <h3><span class="col">Open: </span> ${document.title} <br></h3>
        
        <h4>Location: ${window.location.href}</h4>
      </div>
      `

      +

      ( (this.setup_arg[1]) ? `
        <div class="rc box">
        
        <div style='display: grid; grid-template-columns: auto auto; gap: 1rem'>
          <button class='rc btn main' onclick="load.view_themes()" title="Theme"><span class='material-symbols-rounded'>contrast</span></button>
          
          <button class='rc btn' onclick="load.CLC.view_version()" title="About"><span class='material-symbols-rounded'>info</span></button>
          
          <button class='rc btn' onclick="location.assign('https://load.totalh.net/developer-guide/')" title="Developer guide"><span class='material-symbols-rounded'>developer_guide</span></button>
          
          <button class='rc btn' onclick="load.resettingNoti()" title="Erase all data"><span class='material-symbols-rounded'>reset_settings</span></button>
        </div>
      </div>
      ` : "")

      +

      `
      <div>Local version: ${load.version.name}, Number: ${load.version.number}</div>
      `

    return isb()
  },
}


// window.addEventListener("resize", _=> load.set_side(load.is_set_size))
// window.addEventListener("resize", location.reload)


window.addEventListener("resize", _load_check_reponsive_)

var _load_is_checked_ = false
function _load_check_reponsive_() {
  if(!_load_is_checked_) {
    load.CLC.toast("To show a responsive content you should reload page now! <button onclick='location.reload()' class='rc btn'>Reload</button>", "error const")
    _load_is_checked_ = true

    // Toast one time becasuse its will  be const not hidden
    // setTimeout(() => {
    //   isrere = false
    // }, 10000);
  }
}