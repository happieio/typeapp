/** Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface. converted to typescript from https://github.com/primus/eventemitter3*/
declare module EventEmitter {

    interface instance {
        /** Holds the assigned EventEmitters by name*/
        _events;
        off: any;
        addListener: any;
        cancel:Function;
        cancelId:string;
        constructor();
        /** Emit an event to all registered event listeners. */
        emit(event:string, a1:any, a2:any, a3:any, a4:any, a5:any): boolean;
        /** Return a list of assigned event listeners. event: The events that should be listed. exists: We only need to know if there are listeners. */
        listeners(event:string, exists:boolean): Array<any> | boolean;
        /** Register a new EventListener for the given event. event: Name of the event. fn: Callback function. [context=this] The context of the function. */
        on(event:string, fn:Function, context:any): Object;
        /** Add an EventListener that's only called once. event: Name of the event. fn: Callback function. [context=this] The context of the function. */
        once(event:string, fn:Function, context:any): Object;
        /** Remove event listeners. event: The event we want to remove.   fn: The listener that we need to find.
         * cntxt: Only remove listeners matching this context.   once: Only remove once listeners.  */
        removeListener(event:string, fn:Function, cntxt:any, once:boolean): Object;
        /** Remove all listeners or only the listeners for the specified event. event: The event want to remove all listeners for. */
        removeAllListeners(event:string): Object;
    }
}
