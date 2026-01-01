class Naghoom {
  #nag = document.body
  #status = false
  #version = "Load 1 Cadoa V:9.7"
  
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