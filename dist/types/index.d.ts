import { IMMOptions } from './interface';
import { EventType, SpecificEventListener, CustomEventListener } from './types';
declare class MetisMenu {
    protected config: IMMOptions;
    protected element: Element;
    protected isTransitioning: boolean;
    protected disposed: boolean;
    protected triggerArr: Array<Element>;
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
    private init;
    private clickEvent;
    update(): void;
    dispose(): void;
    on<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): MetisMenu;
    on<E extends Event>(evtType: E, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): MetisMenu;
    off<K extends EventType>(evtType: K, handler: SpecificEventListener<K>, options?: AddEventListenerOptions | boolean): MetisMenu;
    off<E extends Event>(evtType: E, handler: CustomEventListener<E>, options?: AddEventListenerOptions | boolean): MetisMenu;
    emit<T extends object>(evtType: string, evtData: T, shouldBubble?: boolean): this;
    toggle(ul: Element): void;
    show(el: Element): void;
    hide(el: Element): void;
    private setTransitioning;
    static isElement(element: unknown): element is Element;
}
export default MetisMenu;
