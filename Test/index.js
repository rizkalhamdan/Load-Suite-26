const dev = new Naghoom("Test my naghoom")

dev.na({
	content: "How old are you ?"
})

let your_age = dev.na({
	name: "input",
	hint: "Type your age.",
	type: "Number",
	margin: "8px"
})

dev.na({classes: "fix"})

let msg = dev.na({
	name: "b",
	content: "i am wait..."
})

your_age.nag.addEventListener("change", function() {
	var local = your_age.nag.value

	msg.nag.innerHTML = local > 90 ? "You are a lite": local < 12 ? "Go to sleep": "Your brithday is: " + (2025 - local)
})


your_age.nag.addEventListener("keydown", function() {
	msg.nag.innerHTML = "i am wait..."
})


