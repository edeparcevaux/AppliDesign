export function parseUrl() {
  
    const url = window.location.href;
    var query = url.split('?')[1] || '';
    var delimiter = '&';
    return query.split(delimiter).map(function (p) {
      return p.split('=');
    }).reduce(function (acc, kv) {
      acc[kv[0]] = kv[1];
      return acc;
    }, {});
  
 }
