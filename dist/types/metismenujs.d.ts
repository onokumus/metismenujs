import { IMMOptions } from "./interface.js";
import { CustomEventListener, EventType, SpecificEventListener } from "./types.js";
declare class MetisMenu {
    protected config: IMMOptions;
    protected element: Element;
    protected isTransitioning: boolean;
    protected disposed: boolean;
    protected triggerArr: Array<Element>;
    boundEventHandler: (evt?: Event) => void;
    /**
     * Creates an instance of MetisMenu.
     *
     * @constructor
     * @param {Element | string} element
     * @param {IMMOptions} [options]
     * @memberof MetisMenu
     */
    constructor(element: Element | string, options?: IMMOptions);
    static attach(el: Element, opt?: IMMOptions): MetisMenu;
    update(): void;
    dispose(): void;
    on<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): MetisMenu;
    on<E extends Event>(evtType: E, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): MetisMenu;
    off<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): MetisMenu;
    off<E extends Event>(evtType: E, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): MetisMenu;
}
export default MetisMenu;
//# sourceMappingURL=metismenujs.d.ts.map