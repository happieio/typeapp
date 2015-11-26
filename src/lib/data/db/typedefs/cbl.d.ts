/// <reference path="cblsubtypes.d.ts" />
/// <reference path="cblemitter.d.ts" />


declare module cblDB {

    interface instance {
        dbName:string;
        dbUrl:string;
        localServerUrl:string;
        syncUrl:string;
        initDB(): Promise<{}>;
        activeTasks():any;
        allDocs(params:cbl.IAllDocsParams): Promise<{}>;
        bulkDocs(docs:Array<cbl.IDoc>): Promise<{}>;
        changes(params:cbl.IGetDbChangesParams): Promise<any>;
        compact(): Promise<{}>;
        destroy(): Promise<{}>;
        get(docId:string, params?:cbl.IGetDbDocParams): Promise<{}>;
        getAttachment(docId:string, attachmentName:string, params?:cbl.IBatchRevParams): Promise<{}>;
        info(): Promise<{}>;
        infoRemote(remoteUrl?:string): Promise<{}>;
        post(doc:cbl.IDoc, params?:cbl.IPostDbDocParams): Promise<{}>;
        put(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        putAttachment(docId:string, attachmentId:string, attachment:any, mimeType:string, rev?:string): Promise<{}>;
        query(view:string, params?:cbl.IDbDesignViewName): Promise<{}>;
        replicateFrom(bodyRequest?:cbl.IPostReplicateParams, otherDB?:string): Promise<any>;
        replicateTo(bodyRequest?:cbl.IPostReplicateParams, otherDB?:string): Promise<any>;
        remove(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        removeAttachment(docId:string, attachmentId:string, rev:string): Promise<{}>;
        revsDiff(): Promise<{}>;
        upsert(doc:cbl.IDoc, params?:cbl.IBatchRevParams): Promise<{}>;
        viewCleanup(): Promise<{}>;
        buildError(msg, err?);
        processRequest(verb, url, data, headers, cb, isAttach?);
    }
}