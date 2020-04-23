export declare type EventType = keyof GlobalEventHandlersEventMap;
export declare type SpecificEventListener<K extends EventType> = (evt: GlobalEventHandlersEventMap[K]) => void;
export declare type CustomEventListener<E extends Event> = (evt: E) => void;
