declare var EventSource: IEventSource.instance;

declare module IEventSource {

    interface instance {
        new(url:string):IEventSource.instance;
        onerror:(e:IEventSourceResponse)=>void;
        onmessage:(e:IEventSourceResponse)=>void;
        close():void;
    }

    interface IEventSourceResponse{
        event:string;
        data:any;
        id:string;
        retry:number; //milliseconds
    }
}