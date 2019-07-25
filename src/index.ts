import { ClassName, Default, MetisMenuEvents } from "./constant";
import { IMMOptions } from "./interface";

class MetisMenu {
  public config: IMMOptions;
  public element: HTMLElement;
  private isTransitioning: boolean;
  private disposed: boolean;
  private ulArr: any[];
  private cacheEl: HTMLElement;
  private cacheConfig: IMMOptions;
  private listenerOb: any[];

  /**
   * Creates an instance of MetisMenu.
   *
   * @constructor
   * @param {HTMLElement | string} element
   * @param {IMMOptions} [options]
   * @memberof MetisMenu
   */

  constructor(element: HTMLElement | string, options?: IMMOptions) {
    this.element =
      typeof element === "string" ? document.querySelector(element) : element;
    this.cacheEl = this.element;
    this.config = { ...Default, ...options };
    this.cacheConfig = this.config;
    this.disposed = false;
    this.ulArr = [];
    this.listenerOb = [];
    this.init();
  }

  public update() {
    this.disposed = false;
    this.element = this.cacheEl;
    this.config = this.cacheConfig;
    this.init();
  }

  public dispose() {
    for (const lo of this.listenerOb) {
      for (const key in lo) {
        if (lo.hasOwnProperty(key)) {
          const el = lo[key];
          el[1].removeEventListener(el[0], el[2]);
        }
      }
    }
    this.ulArr = [];
    this.listenerOb = [];
    this.config = null;
    this.element = null;
    this.disposed = true;
  }

  public on(event: MetisMenuEvents, fn: EventListenerOrEventListenerObject) {
    this.element.addEventListener(event, fn, false);
    return this;
  }

  public off(event: MetisMenuEvents, fn: EventListenerOrEventListenerObject) {
    this.element.removeEventListener(event, fn);
    return this;
  }

  private emit(
    event: MetisMenuEvents,
    eventDetail: object,
    shouldBubble = false
  ) {
    let evt;
    if (typeof CustomEvent === "function") {
      evt = new CustomEvent(event, {
        bubbles: shouldBubble,
        detail: eventDetail
      });
    } else {
      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, shouldBubble, false, eventDetail);
    }
    this.element.dispatchEvent(evt);
    return this;
  }

  private init(): void {
    this.element.classList.add(ClassName.METIS);
    this.ulArr = [].slice.call(
      this.element.querySelectorAll(this.config.subMenu)
    );
    for (const ul of this.ulArr) {
      const li = ul.parentNode;
      ul.classList.add(ClassName.COLLAPSE);

      if (li.classList.contains(ClassName.ACTIVE)) {
        this.show(ul);
      } else {
        this.hide(ul);
      }
      const a = li.querySelector(this.config.triggerElement);
      if (a.getAttribute("aria-disabled") === "true") {
        return;
      }

      a.setAttribute("aria-expanded", "false");
      const listenerOb = {
        aClick: ["click", a, this.clickEvent.bind(this)]
      };

      for (const key in listenerOb) {
        if (listenerOb.hasOwnProperty(key)) {
          const listener = listenerOb[key];
          listener[1].addEventListener(listener[0], listener[2]);
        }
      }
      this.listenerOb.push(listenerOb);
    }
  }

  private clickEvent(ev?) {
    if (!this.disposed) {
      if (ev.currentTarget.tagName === "A") {
        ev.preventDefault();
      }

      const li = ev.currentTarget.parentNode;
      const ul = li.querySelector(this.config.subMenu);
      this.toggle(ul);
    }
  }

  private toggle(ul) {
    if (ul.parentNode.classList.contains(ClassName.ACTIVE)) {
      this.hide(ul);
    } else {
      this.show(ul);
    }
  }

  private show(ul) {
    if (this.isTransitioning || ul.classList.contains(ClassName.COLLAPSING)) {
      return;
    }
    const complete = () => {
      ul.classList.remove(ClassName.COLLAPSING);
      ul.style.height = "";
      ul.removeEventListener("transitionend", complete);
      this.setTransitioning(false);
      this.emit("shown.metisMenu", {
        shownElement: ul
      });
    };

    const li = ul.parentNode;
    li.classList.add(ClassName.ACTIVE);

    const a = li.querySelector(this.config.triggerElement);
    a.setAttribute("aria-expanded", "true");
    a.classList.remove(ClassName.COLLAPSED);

    ul.style.height = "0px";
    ul.classList.remove(ClassName.COLLAPSE);
    ul.classList.remove(ClassName.SHOW);
    ul.classList.add(ClassName.COLLAPSING);
    const eleParentSiblins = [].slice
      .call(li.parentNode.children)
      .filter(c => c !== li);
    if (this.config.toggle && eleParentSiblins.length > 0) {
      for (const sibli of eleParentSiblins) {
        const sibUl = sibli.querySelector(this.config.subMenu);
        if (sibUl !== null) {
          this.hide(sibUl);
        }
      }
    }

    this.setTransitioning(true);

    ul.classList.add(ClassName.COLLAPSE);
    ul.classList.add(ClassName.SHOW);
    ul.style.height = ul.scrollHeight + "px";
    this.emit("show.metisMenu", {
      showElement: ul
    });
    ul.addEventListener("transitionend", complete);
  }

  private hide(ul) {
    if (this.isTransitioning || !ul.classList.contains(ClassName.SHOW)) {
      return;
    }
    this.emit("hide.metisMenu", {
      hideElement: ul
    });

    const li = ul.parentNode;
    li.classList.remove(ClassName.ACTIVE);

    const complete = () => {
      ul.classList.remove(ClassName.COLLAPSING);
      ul.classList.add(ClassName.COLLAPSE);
      ul.style.height = "";
      ul.removeEventListener("transitionend", complete);
      this.setTransitioning(false);
      this.emit("hidden.metisMenu", {
        hiddenElement: ul
      });
    };

    ul.style.height = ul.getBoundingClientRect().height + "px";
    ul.style.height = ul.offsetHeight + "px";

    ul.classList.add(ClassName.COLLAPSING);
    ul.classList.remove(ClassName.COLLAPSE);
    ul.classList.remove(ClassName.SHOW);
    this.setTransitioning(true);

    ul.addEventListener("transitionend", complete);

    ul.style.height = "0px";

    const a = li.querySelector(this.config.triggerElement);
    a.setAttribute("aria-expanded", "false");
    a.classList.add(ClassName.COLLAPSED);
  }

  private setTransitioning(isTransitioning) {
    this.isTransitioning = isTransitioning;
  }
}

export default MetisMenu;
