"use strict";function createIndex(e,n,t){n=massageCreateIndexRequest(n),e.request({method:"POST",url:"_index",body:n},t)}function find(e,n,t){e.request({method:"POST",url:"_find",body:n},t)}function getIndexes(e,n){e.request({method:"GET",url:"_index"},n)}function deleteIndex(e,n,t){var d=n.ddoc,r=n.type||"json",o=n.name;if(!d)return t(new Error("you must provide an index's ddoc"));if(!o)return t(new Error("you must provide an index's name"));var s="_index/"+[d,r,o].map(encodeURIComponent).join("/");e.request({method:"DELETE",url:s},t)}var massageCreateIndexRequest=require("../../massageCreateIndexRequest");exports.createIndex=createIndex,exports.find=find,exports.getIndexes=getIndexes,exports.deleteIndex=deleteIndex;