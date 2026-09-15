document.addEventListener("DOMContentLoaded", () => {
	new MetisMenu("#menu").on("shown.metisMenu", () => {
		Jump("#menu");
	});
});
