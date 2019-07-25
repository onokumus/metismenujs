import { MetisMenuEvents } from "./constant";
import { IMMOptions } from "./interface";
declare class MetisMenu {
    config: IMMOptions;
    element: HTMLElement;
    private isTransitioning;
    private disposed;
    private ulArr;
    private cacheEl;
    private cacheConfig;
    private listenerOb;
    /**
     * Creates an instance of MetisMenu.
     *
     * @constructor
     * @param {HTMLElement | string} element
     * @param {IMMOptions} [options]
     * @memberof MetisMenu
     */
    constructor(element: HTMLElement | string, options?: IMMOptions);
    update(): void;
    dispose(): void;
    on(event: MetisMenuEvents, fn: EventListenerOrEventListenerObject): this;
    off(event: MetisMenuEvents, fn: EventListenerOrEventListenerObject): this;
    private emit;
    private init;
    private clickEvent;
    private toggle;
    private show;
    private hide;
    private setTransitioning;
}
export default MetisMenu;
