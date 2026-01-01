
load.setup(1, 0, 1, 1)

const core = new Naghoom("Load Suite - Developer Guide")


load.snooze = function() {
  core.head({...publ_head, keywords: "Load Suite, Developers Guide, Quick start with load suite"})
}




let head = core.na({ name: "section", classes: "head center" })

core.na({ name: "h2", content: "<span>Load Suite</span>", nag: head.nag, click: _=> location.replace("/")})

core.na({ name: "h1", classes: "fix" })


core.na({ name: "h1", content: core.get_icon_rounded("code") + " Pre coding", classes: "rc md_center"})

let inst = core.na({ classes: "rc box", opacity: "0", transition: ".4s", preload: 300})


core.na({
  name: "p",
  content: `Add the following tag inside your HTML head or before body: <br><span class='rc orange'> &lt;script src=&quot;//load.totalh.net/load.js&quot;&gt;&lt;/script&gt;</span>`,
  nag: inst.nag
})

core.na({
  name: "p",
  content: `<br> In a separate JavaScript file, initialize the suite with: <span class='col'>load.setup()</span>`,
  nag: inst.nag
})

core.na({
  name: "p",
  content: `<br> (Optional)If you're using the Naghoom suite, instantiate it like this:  <span class='col'>const nagh = new Naghoom("Page name")</span>`,
  nag: inst.nag
})

core.na({
  name: "p",
  content: `<br> <span class='rc red'>The Load Suite script must be loaded before your working script to avoid reference errors.</span>`,
  nag: inst.nag,
})


core.na({
  name: "p",
  content: `<br> <span class='rc blue'>Once setup is complete, you're ready to use Load Suite components and features.</span>`,
  nag: inst.nag
})

core.na({
  classes: "rc go big private",
  content: "You can download the suite <br> <a href='//load.totalh.net/'><span class='material-symbols-rounded'>cloud_download</span></a>",
  padding: "1rem"
})


setTimeout(_=> core.sty({opacity: "1"}, inst.id), 2000)


// Beta .. Try change side bar content
let sbs = document.getElementById(load.side_bar_id)
sbs.innerHTML += `
  <br><br><br>
  <div class=''rc box>
    <button class='rc btn main width' onclick='load.view_themes()'>${core.get_icon_rounded('contrast')} Theme</button>
    <button class='rc btn width' onclick='load.CLC.toast("Cadoa Helper smart is not avaible now!", "warning")'>${core.get_icon_rounded('info')} Help</button>
  </div>

  <div class='rc box'>
    <h3 class='col'>Real time</h3>
    <section id='plussidebarcontent'>
      You should double click on the element whitch you want to copy source's code!
    </section>
  </div>
`















