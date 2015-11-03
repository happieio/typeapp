class EventEmitter {
    events = {};

    constructor(){ }

    on(name, fn) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(fn);
    }

    trigger(name, args) {
        this.events[name] = this.events[name] || [];
        args = args || [];
        this.events[name].forEach((fn) => { fn.apply(this, args); });
    }
}

export = EventEmitter;