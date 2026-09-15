document.addEventListener("DOMContentLoaded", () => {
	new MetisMenu("#menu")
		.on("show.metisMenu", (event) => {
			new Noty({
				text:
					event.detail.showElement.parentNode.querySelector("a").innerHTML +
					" opening ...",
				layout: "topRight",
				type: "information",
				theme: "relax",

				timeout: 1000,
			}).show();
		})
		.on("shown.metisMenu", (event) => {
			new Noty({
				text:
					event.detail.shownElement.parentNode.querySelector("a").innerHTML +
					" opened",
				layout: "topRight",
				type: "success",
				theme: "relax",
				timeout: 3000,
			}).show();
		})
		.on("hide.metisMenu", (event) => {
			new Noty({
				text:
					event.detail.hideElement.parentNode.querySelector("a").innerHTML +
					" collapsing ...",
				layout: "topRight",
				type: "warning",
				theme: "relax",
				timeout: 1000,
			}).show();
		})
		.on("hidden.metisMenu", (event) => {
			new Noty({
				text:
					event.detail.hiddenElement.parentNode.querySelector("a").innerHTML +
					" collapsed",
				layout: "topRight",
				type: "error",
				theme: "relax",
				timeout: 3000,
			}).show();
		});
});
