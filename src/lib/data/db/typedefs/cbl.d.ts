/// <reference path="cblsubtypes.d.ts" />
/// <reference path="cblemitter.d.ts" />


declare module cblDB {

    interface instance {
        dbName: string;
        replicate: any;
        dbUrl;
        serverUrl;
        constructor(dbName:string);
        initDB(): Promise<{}>;
        allDocs(params:cbl.IAllDocsParams): Promise<{}>;
        bulkDocs(docs:Array<cbl.IDoc>): Promise<{}>;
        changes(params:cbl.IGetDbChangesParams): EventEmitter.instance;
        compact(): Promise<{}>;
        destroy(): Promise<{}>;
        get(docId:string, params?:cbl.IGetDbDocParams): Promise<{}>;
        getAttachment(docId:string, attachmentName:string, params?:cbl.IBatchRevParams): Promise<{}>;
        info(): Promise<{}>;
        post(doc:cbl.IDoc, params?:cbl.IPostDbDocParams): Promise<{}>;
        put(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        putAttachment(docId:string, attachmentId:string, attachment:any, mimeType:string, rev?:string): Promise<{}>;
        query(view:string, params:cbl.IGetPostDbDesignViewName): Promise<{}>;
        replicateFrom(): EventEmitter.instance;
        replicateTo(): EventEmitter.instance;
        remove(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        removeAttachment(docId:string, attachmentId:string, rev:string): Promise<{}>;
        revsDiff(): Promise<{}>;
        upsert(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        viewCleanup(): Promise<{}>;
        buildError(msg, err?);
        processRequest(verb, url, data, headers, cb, isAttach?);
    }
}

