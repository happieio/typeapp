/// <reference path="../../../../typedefs/tsd.d.ts" />
///<reference path="cbl.d.ts" />
///<reference path="eventsource.d.ts" />



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

    interface IGetAllDocsParams {
        conflicts?:boolean; //Include conflict information in the response. This parameter is ignored if the include_docs parameter is false. default:false
        descending?:boolean; //Return docs in descending order	false
        endkey?:string; //If this parameter is provided, stop returning records when the specified key is reached.	none
        end_key?:string; //Alias for the endkey parameter	none
        endkey_docid?:string; //If this parameter is provided, stop returning records when the specified doc identifier is reached	none
        end_key_doc_id?:string; //Alias for the endkey_docid parameter	none
        include_docs?:boolean; //Indicates whether to include the full content of the docs in the response	false
        inclusive_end?:boolean; //Indicates whether the specified end key should be included in the result	true
        key?:string;//If this parameter is provided, return only doc that match the specified key.	none
        limit?:number; //If this parameter is provided, return only the specified number of docs	none
        skip?:number; //If this parameter is provided, skip the specified number of docs before starting to return results	0
        stale?:string; //Allow the results from a stale view to be used, without triggering a rebuild of all views within the encompassing design doc. Valid values: ok and update_after.	none
        startkey?:string; //If this parameter is provided, return docs starting with the specified key.	none
        start_key?:string; //Alias for startkey param	none
        startkey_docid?:string; //If this parameter is provided, return docs starting with the specified doc identifier.	none
        update_seq?:boolean; //Indicates whether to include the update_seq property in the response	false
    }

    interface IPostAllDocsParams {
        keys?:string[]; //List of identifiers of the docs to retrieve
    }

    interface IAllDocsParams extends IPostAllDocsParams, IGetAllDocsParams { }

    interface IAllDocsResponse {
        offset:number; //Starting index of the returned rows.
        rows:IDoc[]; //Array of row objects. Each row contains the following objects: id, key, and value. The value object contains the revision identifier in a rev object.
        total_rows:number; //Number of docs in the DB.This number is not the number of rows returned.
        update_seq:number; //Sequence identifier of the underlying DB that the view reflects
    }

    interface IGetDbChangesParams {
        attachments?:boolean; //Indicates whether to include the Base64-encoded content of attachments in the docs that are included when include_docs is true. this parameter is ignored when include_docs is false. default:false
        att_encoding_info?:boolean; //Indicates whether to include encoding information in attachment stubs when include_docs is true. default:false
        conflicts?:boolean; //Includes conflicts information in response. Ignored if include_docs isn’t true. default:false
        descending?:boolean; //Return the change results in descending sequence order (most recent change first). default:false
        doc_ids?:string[]; //List of doc IDs to filter the changes feed as valid JSON array. Used with _doc_ids filter. default:none
        feed?:string; //Specifies type of change feed. Valid values: normal, continuous, eventsource, longpoll default:normal
        filter?:string; //Reference to a filter function from a design doc that will filter whole stream emitting only filtered events. default:none
        heartbeat?:number; //Period in milliseconds after which an empty line is sent in the results. Only applicable for longpoll or continuous feeds. Overrides any timeout to keep the feed alive indefinitely. default:60000
        include_docs?:boolean; //Indicates whether to include the associated doc with each result. f there are conflicts, only the winning revision is returned. default:false
        'last-event-id'?:number; //Alias for the Last-Event-ID header. default:none
        limit?:number;//	Limits the number of result rows to the specified value. Using a value of 0 has the same effect as the value 1. default:none
        since?:number | string;//	Starts the results from the change immediately after the given sequence number. The value can be an integer or a row value. default:0
        style?:string; //Number of revisions to return in the changes array. main_only returns the current winning revision, all_docs returns all leaf revisions including conflicts and deleted former conflicts. default:main_only
        timeout?:number; //Maximum period in milliseconds to wait for a change before the response is sent, even if there are no results. Only applicable for longpoll or continuous feeds. The default value is specified by the httpd/changes_timeout configuration option. If not specified, the default maximum timeout is used to prevent undetected dead connections. default:60000
        view?:string; //Name of a view function to use as a filter	none
    }

    interface IGetDbChangesResponse {
        committed_update_seq:number; //Number of committed updates to the database
        db_name:string; //Name of the database
        db_uuid:string; //Database identifier
        disk_format_version:number; //Database schema version
        disk_size:number; //Total amount of data stored on the disk. Units: bytes
        doc_count:number; //Number of documents in the database
        instance_start_time:number; //Date and time the database was opened. Units: microseconds since the epoch (1 January 1970)
        purge_seq:number; //Returns 0.
        update_seq:number; //Number of updates to the database
    }

    interface IGetPostDbDesignViewName {
        conflicts?:boolean; //Include conflict information in the response. This parameter is ignored if the include_docs parameter is default:false.	false
        descending?:boolean;	//Return docs in descending order	default:false
        endkey?:string; //If this parameter is provided, stop returning records when the specified key is reached. default:none
        end_key?:string; //Alias for the endkey parameter default:none
        endkey_docid?:string; //If this parameter is provided, stop returning records when the specified doc identifier is reached default:none
        end_key_doc_id?:string; //Alias for the endkey_docid parameter default:none
        include_docs?:boolean; //Indicates whether to include the full content of the docs in the response	default:false
        inclusive_end?:boolean; //Indicates whether the specified end key should be included in the result	default:true
        key?:string; //If this parameter is provided, return only doc that match the specified key. default:none
        keys?:string[]; //an array of explicit keys to pull from the view
        limit?:number; //If this parameter is provided, return only the specified number of docs default:none
        skip?:number; //If this parameter is provided, skip the specified number of docs before starting to return results default:0
        stale?:string; //Allow the results from a stale view to be used, without triggering a rebuild of all views within the encompassing design doc. Valid values: ok and update_after. default:none
        startkey?:string; //If this parameter is provided, return docs starting with the specified key. default:none
        start_key?:string; //Alias for startkey param	none
        startkey_docid?:string; //If this parameter is provided, return docs starting with the specified doc identifier. default:none
        update_seq?:boolean; //Indicates whether to include the update_seq property in the response default:false
    }

    interface IGetDbDocParams {
        attachments?:boolean; //Include attachment bodies in response default:false
        att_encoding_info?:boolean; //Include encoding information in attachment stubs if the attachment is compressed default:false
        atts_since?:string[]; //Include attachments only since specified revisions. Does not include attachments for specified revisions	default:none
        conflicts?:boolean; //Include information about conflicts in doc default:false
        deleted_conflicts?:boolean; //Include information about deleted conflicted revisions	default:false
        latest?:boolean; //Force retrieval of latest leaf revision, no matter what revision was requested default:false
        local_seq?:boolean; //Include last update sequence number for the doc default:false
        meta?:boolean; //Acts same as specifying all conflicts, deleted conflicts and open revs query parameters default:false
        open_revs?:string[]; //Retrieve docs of specified leaf revisions. You can specify the value all to return all leaf revisions default:none
        rev?:string; //Retrieve the specified revision of the doc	default:none
        revs?:boolean; //Include a list of all known doc revisions	default:false
        revs_info?:boolean; //Include detailed information for all known doc revisions	default:false
    }

    interface IHeaders {
        'Content-Type'?:string;
        'Accept'?:string;
    }

    interface IPostDbBulkDocs {
        'all_or_nothing'?:boolean; //Optional. Indicates whether to use all-or-nothing semantics for the DB commit mode. default:false
        docs?:IDoc[]; //List containing new or updated docs. Each object in the array can contain the following properties: _id, _rev, _deleted, and values for new and updated docs. default:none
        new_edits?:boolean; //Optional. Indicates whether to assign new revision identifiers to new edits.	default:true
    }

    interface IPostDbDocParams{
        batch:string; //Stores the doc in batch mode. To use, set the value to ok. default none.
    }

    interface IPostReplicateParams {
        create_target?:boolean; //Indicates whether to create the target DB. Required No
        source?:string | cblDB.instance; //Id of DB to copy from. Either string of local DB name or remote DB URL, or cblInstance. Required:Yes
        target?:string | cblDB.instance; //ID of DB to copy to. Same format and interpretation as source. Required:Yes
        continuous?:boolean; //Specifies whether the replication should be in continuous mode. Required:No
    }

    interface IPostReplicateResposne {
        ok:boolean; //Indicates whether the replication operation was successful
        session_id:string; //Session identifier
    }

    interface IBatchRevParams {
        batch?:string; //Stores the doc in batch mode. To use, set the value to 'ok'.
        rev?:string; //Revision identifier
    }
}