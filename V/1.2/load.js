class Naghoom {
  #nag = document.body
  #status = false
  #version = "94"
  
  constructor(nag_name = "Not known") {
    // Initialization
    try {
      document.title = nag_name
      this.#nag = document.body
      
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
    
    this.#sty(n, id_na)
    
    
    return {
      id: id_na,
      nag: this.#nag.querySelector(`#${id_na}`),
      n: n,
      atr: s => this.atr(s, id_na)
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
}

const load = {
  version: {
    name: "Now-Beta",
    copy: '',
    number: "1.1"
  },
  setup: function(run_clc = true, run_fast = true, run_icon = true) {
    if (run_clc) {
      var clc = document.createElement("link")
      clc.setAttribute("href", "/cadoa.css")
      //clc.setAttribute("href", "//load.totalh.net/cadoa.css")
      clc.setAttribute("rel", "stylesheet")
      document.body.appendChild(clc)
      
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
      
      if(run_icon) ico.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
      else run_fast = false
      
      
      setTimeout(_=> document.querySelector(".loadsetup").style.display = "none", 500)
      document.body.appendChild(ico)
      /*ico.addEventListener("load", _=> {
        document.querySelector(".loadsetup").style.display = "none"
      })*/
      
      
      var navvs = document.createElement("div")
      navvs.classList.add("rc", "navs")
      navvs.id = "navs"
      document.body.appendChild(navvs)
      
      
      document.querySelectorAll(".rc.write").forEach(e => load.CLC.write(e, true))
      
      
      if(run_fast) this.fast()
      this.colors()
    }
  },
  
  colors: function(n) {
    localStorage.colors = localStorage.colors ?? 1
    if (!(n == 1 || n == 2 || n == 3 || n == 4)) n = localStorage.colors
    localStorage.colors = n
    
    
    var root = document.querySelector('body').style,
      nams = ["-dk", "-wh", "-dk-tow", "wh-tow"],
      vams = ["--background", "--second-col", "--opacit-col", "--text-color", "--chat-color"]
    
    for (var i = 0; i < vams.length; i++) {
      root.setProperty(vams[i], `var(${vams[i]}${nams[n-1]})`)
    }
  },
  
  view_themes: function() {
    var unio = document.createElement("div")
    
    unio.innerHTML = `
  <section class="rc full clicked" onclick="load.remo(this)">

  <div class="rc box bo box_shadow private">
    <h1 class="rc col">Load Suite</h1>
    <b>Set theme</b>
    <br>
    <br>
    <div class="rc icons ichs">
      <a class="rc icon ich" style="background-color: var(--background-wh)" id="s2" onclick="load.colors(2)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <div class="rc box" style="background-color: var(--second-col-wh)"></div>
          <b style="color: var(--text-color-wh)">WH_1</b>
        </div>
      </a>

      <a class="rc icon ich" style="background-color: var(--background-dk)" id="s1" onclick="load.colors(1)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <div class="rc box" style="background-color: var(--second-col-dk)"></div>
          <b style="color: var(--text-color-dk)">DK_1</b>
        </div>
      </a>

      <a class="rc icon ich" style="background-color: var(--background-wh-tow)" id="s4" onclick="load.colors(4)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-wh-tow)"></div>
          <div class="rc box" style="background-color: var(--second-col-wh-tow)"></div>
          <b style="color: var(--text-color-wh-tow)">WH_2</b>
        </div>

      </a>

      <a class="rc icon ich" style="background-color: var(--background-dk-tow)" id="s3" onclick="load.colors(3)">
        
        <div class="gro">
          <div class="rc box" style="background-color: var(--second-col-dk-tow)"></div>
          <div class="rc box" style="background-color: var(--second-col-dk-tow)"></div>
          <b style="color: var(--text-color-dk-tow)">DK_2</b>
        </div>

      </a>
</section>
  `;
    document.getElementsByTagName("body")[0].appendChild(unio)
  },
  
  resettingNoti: function() {
    document.querySelector("body").innerHTML += `
      <section class="rc full" id="sfull">
        <div class="rc box bo box_shadow private">
          <h1 class="col">Load Suite</h1>
          
          <b>Erase all data</b> <br>
          <b class="rc red"> You will not can back this step!</b>
          
          <br> <br>
          <button class='rc btn main' onclick='load.resetting()'>Confirm</button>
          
          <button class='rc btn' onclick='location.reload();'>back</button>
          
        </div>
      </section>
    `;
  },
  resetting: function() {
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
    let it = setInterval(function() {
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
    
    
    
    setTimeout(function() {
      clearInterval(it);
      location.reload()
    }, 7000);
  },
  remo: e => {
    e.style.filter = "brightness(.2)"
    setTimeout(_=> {
      e.style.display = "none";
      e.style.filter = "brightness(1)"
    }, 200)
  },
  CLC: {
    version: "1.0",
    address: "https://cadoa.epizy.com/libraries/css/",
    printAdress: function(ele) {
      ele = `${address}+${ele.innerHTML}ba`;
    },
    toast: function(msg, plusClass) {
      if (document.getElementById("navs").innerHTML == "") {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg} <span class='rc clear active' onclick='load.CLC.cleanToast()'>×</span></h1>`;
      }
      
      else {
        document.getElementById("navs").innerHTML += `<h1 class="rc toast true ${plusClass}">${msg}</h1>
    `;
      }
    },
    cleanToast: function() {
      document.getElementById("navs").innerHTML = ``;
    },
    write: function(el, speed) {
      el.classList.add("rc");
      el.classList.add("edit");
      el.classList.remove("no");
      var con = el.innerHTML;
      el.innerHTML = "";
      let i = 0;
      let interv = setInterval(function() {
        if (i < con.length) {
          el.innerHTML += con[i];
        }
        else {
          setTimeout(function() {
            el.classList.add("no");
          }, 0);
          clearInterval(interv);
        }
        i++;
      }, speed ? 50 : 100);
    },
    view_version: function() {
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
      
      setTimeout(function() {
        VersionMain.innerHTML += `
        <div class="rc CSV font martb" style="border-radius: 2rem">
          <span class="rc csv red">
            ${load.CLC.version}
          </span>
        </div>
      `;
        
        setTimeout(function() {
          VersionMain.innerHTML += `<div class="rc center" id="rezkhamdan94*_25">Rizk Hamdan built this suite.</div>`;
          let RezkHamdan = document.getElementById("rezkhamdan94*_25");
          load.CLC.write(RezkHamdan, 40);
          
          
          
          setTimeout(function() {
            versionMain.innerHTML = `
            <h1 class="rc big col">RC safety check</h1>
            <div class="rc osloading">
              <div class='one'></div>
              <div class='two'></div>
            </div>
            <b class='rc green'>pass..</b>
          `;
            
            setTimeout(function() {
              load.remo(document.getElementById("shve"));
            }, 3000);
            
          }, 4000);
        }, 4000);
      }, logo.length * sp * 2);
    }
  },
  
  fast: function() {
    var old = document.body.querySelector(".fast")?.innerHTML.toString() || "";
    
    var newCont = `
      <h1 class="rc big col">Load Suite - fast access</h1>
      <br>
      <div style='display: grid; grid-template-columns: auto auto; gap: 1rem'>
        <button class='rc btn main' onclick="load.view_themes()"><span class='material-symbols-rounded'>contrast</span>Themes</button>
        
        <button class='rc btn' onclick="load.CLC.view_version()"><span class='material-symbols-rounded'>info</span>version</button>
        
        <button class='rc btn' onclick=""><span class='material-symbols-rounded'>developer_guide</span>QDG beta</button>
        
        <button class='rc btn' onclick="load.resettingNoti()"><span class='material-symbols-rounded'>reset_settings</span>Default mode</button>
      </div>
      <br>
      <h2 style="display: flex;align-items: center; justify-content: space-between;gap: 1rem">View: ${document.title} <span class='material-symbols-rounded'>${navigator.onLine?'wifi':'wifi_off'}</span></h2>
    `
    
    document.querySelector(".fast")?.remove();
    var fas = document.createElement("div")
    fas.classList.add("rc", "fast")
    document.body.appendChild(fas)
    document.querySelector(".fast").replaceChildren()
    document.querySelector(".fast").insertAdjacentHTML("beforeend", old + newCont)
  }
}