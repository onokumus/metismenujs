document.addEventListener("DOMContentLoaded", () => {
	const leftAside = document.getElementById("left-aside");
	new OnoffCanvas(leftAside);

	const leftMenu = document.getElementById("menu1");
	new MetisMenu(leftMenu);
});
