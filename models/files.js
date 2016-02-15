/*jshint strict:false */
/*global Files:true*/

/**
 * Global files collection
 * @type {FS.Collection}
 */
Files = new FS.Collection('files', {
    stores: [new FS.Store.FileSystem('filesStore')]
});