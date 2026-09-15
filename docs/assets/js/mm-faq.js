document.addEventListener("DOMContentLoaded", () => {
	new MetisMenu(".faq-menu", {
		toggle: false,
		triggerElement: ".faq-link",
		parentTrigger: ".faq-item",
		subMenu: ".faq-answer",
	});
});
