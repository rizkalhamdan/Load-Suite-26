class Naghoom {
  #nag = document.body
  #status = false
  #version = "0.1"
  #date = "08.12.2025"

  constructor(nag_name = "Not known") {
    // Initialization
    try {
      document.title = nag_name
      var nenag = document.createElement("section")
      nenag.id = "HAMDNAG94" // Change it! Go to cadoa.css after newnag body and it that
      document.body.appendChild(nenag)
      this.#nag = document.getElementById("HAMDNAG94")
      setTimeout(this.#head, 0)
      
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

    // Remove the update .. Big error
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
    var bgc = `#${(x == 1 || x == 3) ? "000" : "fff"}`
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