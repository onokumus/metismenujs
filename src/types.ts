export type EventType = keyof GlobalEventHandlersEventMap;
// eslint-disable-next-line max-len
export type SpecificEventListener<K extends EventType> = (evt: GlobalEventHandlersEventMap[K]) => void;
export type CustomEventListener<E extends Event> = (evt: E) => void;
