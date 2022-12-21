export type EventType = keyof GlobalEventHandlersEventMap;
export type SpecificEventListener<K extends EventType> = (evt: GlobalEventHandlersEventMap[K]) => void;
export type CustomEventListener<E extends Event> = (evt: E) => void;
//# sourceMappingURL=types.d.ts.map