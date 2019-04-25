/**
 * @description 导出文件
 * @param {Blob} blob 
 * @param {String} filename 
 */
export default function saveAs (blob, filename) {
  let type = blob.type;
  let force_saveable_type = 'application/octet-stream';

  if (type && type != force_saveable_type) { // 强制下载，而非在浏览器中打开
    let slice = blob.slice || blob.webkitSlice;
    blob = slice.call(blob, 0, blob.size, force_saveable_type);
  }

  let url = URL.createObjectURL(blob);
  let link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  
  link.href = url;
  link.download = filename;

  let event = document.createEvent('MouseEvents');

  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  link.dispatchEvent(event);
  URL.revokeObjectURL(url);

  link = null;
}