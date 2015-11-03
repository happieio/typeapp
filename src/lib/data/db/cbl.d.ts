/// <reference path="../../../typedefs/tsd.d.ts" />


declare var cbl:cbl.IStatic;

// Support AMD require
declare module 'cbl' {
    export = cbl;
}

declare module cbl {
    interface IStatic {

        getServerURL(success:(url:string) => void, error:(error:any) => void):void;
    }

    interface IDoc {
        _id:string;
        _rev?:string;
        _deleted?:boolean;
    }

    interface IGetDbChangesParams {
        attachments:boolean; //Indicates whether to include the Base64-encoded content of attachments in the documents that are included when include_docs is true. this parameter is ignored when include_docs is false. default:false
        att_encoding_info:boolean; //Indicates whether to include encoding information in attachment stubs when include_docs is true. default:false
        conflicts:boolean; //Includes conflicts information in response. Ignored if include_docs isn’t true. default:false
        descending:boolean; //Return the change results in descending sequence order (most recent change first). default:false
        doc_ids:string[]; //List of document IDs to filter the changes feed as valid JSON array. Used with _doc_ids filter. default:none
        feed:string; //Specifies type of change feed. Valid values: normal, continuous, eventsource, longpoll default:normal
        filter:string; //Reference to a filter function from a design document that will filter whole stream emitting only filtered events. default:none
        heartbeat:number; //Period in milliseconds after which an empty line is sent in the results. Only applicable for longpoll or continuous feeds. Overrides any timeout to keep the feed alive indefinitely. default:60000
        include_docs:boolean; //Indicates whether to include the associated document with each result. f there are conflicts, only the winning revision is returned. default:false
        'last-event-id':number; //Alias for the Last-Event-ID header. default:none
        limit:number;//	Limits the number of result rows to the specified value. Using a value of 0 has the same effect as the value 1. default:none
        since:number;//	Starts the results from the change immediately after the given sequence number. The value can be an integer or a row value. default:0
        style:string; //Number of revisions to return in the changes array. main_only returns the current winning revision, all_docs returns all leaf revisions including conflicts and deleted former conflicts. default:main_only
        timeout:number; //Maximum period in milliseconds to wait for a change before the response is sent, even if there are no results. Only applicable for longpoll or continuous feeds. The default value is specified by the httpd/changes_timeout configuration option. If not specified, the default maximum timeout is used to prevent undetected dead connections. default:60000
        view:string; //Name of a view function to use as a filter	none
    }

    interface IGetPostDbDesignViewName {
        conflicts:boolean; //Include conflict information in the response. This parameter is ignored if the include_docs parameter is default:false.	false
        descending:boolean;	//Return documents in descending order	default:false
        endkey:string; //If this parameter is provided, stop returning records when the specified key is reached. default:none
        end_key:string; //Alias for the endkey parameter default:none
        endkey_docid:string; //If this parameter is provided, stop returning records when the specified document identifier is reached default:none
        end_key_doc_id:string; //Alias for the endkey_docid parameter default:none
        include_docs:boolean; //Indicates whether to include the full content of the documents in the response	default:false
        inclusive_end:boolean; //Indicates whether the specified end key should be included in the result	default:true
        key:string; //If this parameter is provided, return only document that match the specified key. default:none
        keys:string[]; //an array of explicit keys to pull from the view
        limit:number; //If this parameter is provided, return only the specified number of documents default:none
        skip:number; //If this parameter is provided, skip the specified number of documents before starting to return results default:0
        stale:string; //Allow the results from a stale view to be used, without triggering a rebuild of all views within the encompassing design document. Valid values: ok and update_after. default:none
        startkey:string; //If this parameter is provided, return documents starting with the specified key. default:none
        start_key:string; //Alias for startkey param	none
        startkey_docid:string; //If this parameter is provided, return documents starting with the specified document identifier. default:none
        update_seq:boolean; //Indicates whether to include the update_seq property in the response default:false
    }

    interface IGetDbDocParams {
        attachments:boolean; //Include attachment bodies in response default:false
        att_encoding_info:boolean; //Include encoding information in attachment stubs if the attachment is compressed default:false
        atts_since:string[]; //Include attachments only since specified revisions. Does not include attachments for specified revisions	default:none
        conflicts:boolean; //Include information about conflicts in document default:false
        deleted_conflicts:boolean; //Include information about deleted conflicted revisions	default:false
        latest:boolean; //Force retrieval of latest leaf revision, no matter what revision was requested default:false
        local_seq:boolean; //Include last update sequence number for the document default:false
        meta:boolean; //Acts same as specifying all conflicts, deleted conflicts and open revs query parameters default:false
        open_revs:string[]; //Retrieve documents of specified leaf revisions. You can specify the value all to return all leaf revisions default:none
        rev:string; //Retrieve the specified revision of the document	default:none
        revs:boolean; //Include a list of all known document revisions	default:false
        revs_info:boolean; //Include detailed information for all known document revisions	default:false
    }

    interface IHeaders {
        'Content-Type'?:string;
    }

    interface IPostDbBulkDocs {
        'all_or_nothing':boolean; //Optional. Indicates whether to use all-or-nothing semantics for the database commit mode. default:false
        docs:Object[]; //List containing new or updated documents. Each object in the array can contain the following properties: _id, _rev, _deleted, and values for new and updated documents. default:none
        new_edits:boolean; //Optional. Indicates whether to assign new revision identifiers to new edits.	default:true
    }

    interface IPutDbDocParams {
        batch:string; //Stores the document in batch mode. To use, set the value to 'ok'.
        rev:string; //Revision identifier
    }
}