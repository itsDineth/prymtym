"use strict";function indexToSignature(e){return e.ddoc.substring(8)+"/"+e.name}function doAllDocs(e,t){var r=clone(t);return r.descending?("endkey"in r&&"string"!=typeof r.endkey&&(r.endkey=""),"startkey"in r&&"string"!=typeof r.startkey&&(r.limit=0)):("startkey"in r&&"string"!=typeof r.startkey&&(r.startkey=""),"endkey"in r&&"string"!=typeof r.endkey&&(r.limit=0)),"key"in r&&"string"!=typeof r.key&&(r.limit=0),e.allDocs(r)}function find(e,t){return t.selector&&(t.selector=massageSelector(t.selector)),t.sort&&(t.sort=massageSort(t.sort)),validateFindRequest(t),getIndexes(e).then(function(r){var i=planQuery(t,r.indexes),s=i.index,n=utils.extend(!0,{include_docs:!0,reduce:!1},i.queryOpts);if("startkey"in n&&"endkey"in n&&collate(n.startkey,n.endkey)>0)return{docs:[]};var l=t.sort&&"string"!=typeof t.sort[0]&&"desc"===getValue(t.sort[0]);return l&&(n.descending=!0,n=reverseOptions(n)),i.inMemoryFields.length||("limit"in t&&(n.limit=t.limit),"skip"in t&&(n.skip=t.skip)),Promise.resolve().then(function(){if("_all_docs"===s.name)return doAllDocs(e,n);var t=indexToSignature(s);return abstractMapper.query.call(e,t,n)}).then(function(e){return n.inclusive_start===!1&&(e.rows=filterInclusiveStart(e.rows,n.startkey,s)),i.inMemoryFields.length&&(e.rows=filterInMemoryFields(e.rows,t,i.inMemoryFields)),{docs:e.rows.map(function(e){var r=e.doc;return t.fields?utils.pick(r,t.fields):r})}})})}var utils=require("../../../utils"),clone=utils.clone,getIndexes=require("../get-indexes"),collate=require("pouchdb-collate").collate,abstractMapper=require("../abstract-mapper"),planQuery=require("./query-planner"),localUtils=require("../utils"),filterInMemoryFields=require("./in-memory-filter"),massageSelector=localUtils.massageSelector,massageSort=localUtils.massageSort,getValue=localUtils.getValue,validateFindRequest=localUtils.validateFindRequest,reverseOptions=localUtils.reverseOptions,filterInclusiveStart=localUtils.filterInclusiveStart,Promise=utils.Promise;module.exports=find;