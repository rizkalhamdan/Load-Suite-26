const lv = new Naghoom("You love JavaScript, right?");

lv.na({
	name: "h1",
	content: "Do you love JavaScript?",
	margin: "0 0 40px 0",
})

lv.na({
	name: "button",
	content: "Yes",
	click: _ => {
		sure.nag.style.display = "none"
		lv.na({
			name: "h2",
			content: "I knew it! ❤️",
			margin: "80px 0 0 0",
			color: "green",
		})
	}
})

let sure = lv.na({
	name: "button",
	content: "No",
	position: "absolute",
	transform: "translate(30px)",
	click: _ => hedesirtthis(),
})

sure.nag.addEventListener("mouseover", _ => {
	lv.sty({
		transform: `translate(${Math.floor(Math.random() * 80)}px, ${Math.floor(Math.random() * 80)}px)`
	}, sure.id)
})


function hedesirtthis() {
	lv.na({
		name: "h2",
		content: "You will see 😠",
		margin: "80px 0 0 0",
		color: "red",
	})

	setInterval(() => {
		while (true) {}
	}, 1000);
}



