import type { MMOptions } from "./interface.ts";

export type MetisMenuEvents =
	| "show.metisMenu"
	| "shown.metisMenu"
	| "hide.metisMenu"
	| "hidden.metisMenu";

export const Default: MMOptions = {
	parentTrigger: "li",
	subMenu: "ul",
	toggle: true,
	triggerElement: "a",
};

export const ClassName = {
	ACTIVE: "mm-active",
	COLLAPSE: "mm-collapse",
	COLLAPSED: "mm-collapsed",
	COLLAPSING: "mm-collapsing",
	METIS: "metismenu",
	SHOW: "mm-show",
};