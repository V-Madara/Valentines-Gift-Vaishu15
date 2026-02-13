let yesScale = 1;

function goToPage(pageId) {
	// Hide all direct children divs of the container
	document.querySelectorAll(".container > div").forEach((div) => {
		// Ensure we don't accidentally hide the No button if it were detached (safe check)
		if (div.id !== "noBtn") div.classList.add("hidden");
	});
	// Show the specific page requested
	const page = document.getElementById(pageId);
	if (page) {
		page.classList.remove("hidden");
	}
}

function moveButton() {
	const noBtn = document.getElementById("noBtn");
	const yesBtn = document.getElementById("yesBtn");

	const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
	const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

	noBtn.style.position = "fixed";
	noBtn.style.left = x + "px";
	noBtn.style.top = y + "px";

	yesScale += 0.5;
	yesBtn.style.transform = "scale(" + yesScale + ")";
}
