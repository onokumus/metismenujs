/* eslint-disable max-len */
import { ClassName, Default, MetisMenuEvents } from "./constant.js";
import { IMMOptions } from "./interface.js";
import {
  CustomEventListener,
  EventType,
  SpecificEventListener,
} from "./types.js";

class MetisMenu {
  protected config: IMMOptions;

  protected element: Element;

  protected isTransitioning!: boolean;

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

  constructor(element: Element | string, options?: IMMOptions) {
    this.element = MetisMenu.isElement(element) ? element : document.querySelector<HTMLElement>(element)!;
    this.config = { ...Default, ...options };
    this.disposed = false;
    this.triggerArr = [];
    this.boundEventHandler = this.clickEvent.bind(this);
    this.init();
  }

  static attach(el: Element, opt?: IMMOptions) {
    return new MetisMenu(el, opt);
  }

  /**
   * @internal
   */
  private init(): void {
    const { METIS, ACTIVE, COLLAPSE } = ClassName;
    this.element.classList.add(METIS);

    const uls = [...this.element.querySelectorAll<HTMLElement>(this.config.subMenu!)];

    if (uls.length === 0) {
      return;
    }

    uls.forEach((ul: Element) => {
      ul.classList.add(COLLAPSE!);
      const li = ul.closest(this.config.parentTrigger!);

      if (li?.classList.contains(ACTIVE!)) {
        this.show(ul as HTMLElement);
      } else {
        this.hide(ul);
      }

      const a = li?.querySelector<HTMLElement>(this.config.triggerElement!);
      if (a?.getAttribute("aria-disabled") === "true") {
        return;
      }

      a?.setAttribute("aria-expanded", "false");

      a?.addEventListener("click", this.boundEventHandler);
      this.triggerArr.push(a!);
    });
  }
  /**
   * @internal
   */

  private clickEvent(evt?: Event) {
    if (!this.disposed) {
      const target = evt?.currentTarget as Element | null;
      if (target && target.tagName === "A") {
        evt!.preventDefault();
      }

      const li = target!.closest(this.config.parentTrigger!);
      const ul = li?.querySelector(this.config.subMenu!);
      this.toggle(ul!);
    }
  }

  update() {
    this.disposed = false;
    this.init();
  }

  dispose() {
    this.triggerArr.forEach((arr) => {
      arr.removeEventListener("click", this.boundEventHandler);
    });
    this.disposed = true;
  }

  on<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
    options?: AddEventListenerOptions | boolean,
  ): MetisMenu;

  on<E extends Event>(
    evtType: E,
    handler: CustomEventListener<E>,
    options?: AddEventListenerOptions | boolean,
  ): MetisMenu;

  on(
    evtType: MetisMenuEvents,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean,
  ) {
    this.element.addEventListener(evtType, handler, options);
    return this;
  }

  off<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>,
    options?: AddEventListenerOptions | boolean,
  ): MetisMenu;

  off<E extends Event>(
    evtType: E,
    handler: CustomEventListener<E>,
    options?: AddEventListenerOptions | boolean,
  ): MetisMenu;

  off(
    evtType: MetisMenuEvents,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean,
  ): MetisMenu {
    this.element.removeEventListener(evtType, handler, options);
    return this;
  }

  /**
   * @internal
   */
  emit<T extends object>(
    evtType: string,
    evtData: T,
    shouldBubble = false,
  ): void {
    const evt = new CustomEvent<T>(evtType, {
      bubbles: shouldBubble,
      detail: evtData,
    });
    this.element.dispatchEvent(evt);
  }

  /**
   * @internal
   */
  toggle(ul: Element) {
    const li = ul.closest(this.config.parentTrigger!);
    if (li?.classList.contains(ClassName.ACTIVE)) {
      this.hide(ul);
    } else {
      this.show(ul);
    }
  }

  /**
   * @internal
   */
  show(el: Element) {
    const ul = el as HTMLElement;
    const { ACTIVE, COLLAPSE, COLLAPSED, COLLAPSING, SHOW } = ClassName;

    if (this.isTransitioning || ul.classList.contains(COLLAPSING!)) {
      return;
    }
    const complete = () => {
      ul.classList.remove(COLLAPSING!);
      ul.style.height = "";
      ul.removeEventListener("transitionend", complete);
      this.setTransitioning(false);
      this.emit("shown.metisMenu", {
        shownElement: ul,
      });
    };

    const li = ul.closest(this.config.parentTrigger!);
    li?.classList.add(ACTIVE!);

    const a = li?.querySelector<HTMLElement>(this.config.triggerElement!);
    a?.setAttribute("aria-expanded", "true");
    a?.classList.remove(COLLAPSED!);

    ul.style.height = "0px";
    ul.classList.remove(COLLAPSE!);
    ul.classList.remove(SHOW!);
    ul.classList.add(COLLAPSING!);
    const eleParentSiblins = [].slice.call(li?.parentNode?.children).filter((
      c,
    ) => c !== li);
    if (this.config.toggle && eleParentSiblins.length > 0) {
      eleParentSiblins.forEach((sibli: Element) => {
        const sibUl = sibli.querySelector<HTMLElement>(this.config.subMenu!);
        if (sibUl) {
          this.hide(sibUl);
        }
      });
    }

    this.setTransitioning(true);

    ul.classList.add(COLLAPSE!);
    ul.classList.add(SHOW!);
    ul.style.height = `${ul.scrollHeight}px`;
    this.emit("show.metisMenu", {
      showElement: ul,
    });
    ul.addEventListener("transitionend", complete);
  }

  /**
   * @internal
   */
  hide(el: Element) {
    const { ACTIVE, COLLAPSE, COLLAPSED, COLLAPSING, SHOW } = ClassName;
    const ul = el as HTMLElement;
    if (this.isTransitioning || !ul.classList.contains(SHOW!)) {
      return;
    }
    this.emit("hide.metisMenu", {
      hideElement: ul,
    });

    const li = ul.closest(this.config.parentTrigger!);
    li?.classList.remove(ACTIVE!);

    const complete = () => {
      ul.classList.remove(COLLAPSING!);
      ul.classList.add(COLLAPSE!);
      ul.style.height = "";
      ul.removeEventListener("transitionend", complete);
      this.setTransitioning(false);
      this.emit("hidden.metisMenu", {
        hiddenElement: ul,
      });
    };

    ul.style.height = `${ul.getBoundingClientRect().height}px`;
    ul.style.height = `${ul.offsetHeight}px`;

    ul.classList.add(COLLAPSING!);
    ul.classList.remove(COLLAPSE!);
    ul.classList.remove(SHOW!);
    this.setTransitioning(true);

    ul.addEventListener("transitionend", complete);

    ul.style.height = "0px";

    const a = li?.querySelector(this.config.triggerElement!);
    a?.setAttribute("aria-expanded", "false");
    a?.classList.add(COLLAPSED!);
  }

  /**
   * @internal
   */
  private setTransitioning(isTransitioning: boolean) {
    this.isTransitioning = isTransitioning;
  }

  /**
   * @internal
   */
  static isElement(element: unknown): element is Element {
    return Boolean((element as Element).classList);
  }
}

export default MetisMenu;
