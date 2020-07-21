let url = {
    scope : 'search',
    paramReg: /^(?:([A-Za-z]+):(\/{0,3}))?([0-9.\-A-Za-z]+\.[0-9A-Za-z]+)?(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
    
    names: ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'],
    
    query : function (name , scope) {
        if(scope === 'hash'){
            return this.queryHash(name,scope);
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
            scope = scope || this.scope,
            r = location[scope].substr(1).match(reg);
        if (r != null) {
            return decodeURIComponent(r[2]); 
        }
        return null;
    },
    queryHash : function (name,scope) {
        let url = location[scope]+ "";
        let regstr = "/(\\?|\\&)" + name + "=([^\\&]+)/";
        let reg = eval(regstr);
        let result = url.match(reg);
        if (result && result[2]) {
            return result[2];
        } 
    },
    addParam : function (url , data) {
        if (typeof data === 'undefined') {
            return;
        }

        var hashReg = /#.*$/gi,
            hashMatch = url.match(hashReg),
            hash = '';

        if (hashMatch) {
            hash = hashMatch[0];
        }
        
        // 去除hash值的url
        var preUrl = url.replace(hash , '');
        
        var searchReg = /\?(.*?)$/gi;
        var result = searchReg.exec(preUrl)
        var query, newUrl;
        if (result) {
            query = result[1].split('#')[0];
        }
  
        var id = !query ? '' : '&';
        
        return preUrl + (query && query.length > 0 ? '' : '?') +  ( id + $.param(data)) + hash;
    },


    delQuery : function (url, key) {
        var path = '', param = '', hash = '';
        if (url.indexOf('?') == -1) {
            path = url;
        } else {
            path = url.substr(0, url.indexOf('?'));
            param = url.substr(url.indexOf('?')+1);
            if (param.indexOf('#') != -1) {
                hash = param.substr(param.indexOf('#')+1);
                param = param.substr(0, param.indexOf('#'));
            }
        }
        var params = param.split('&');
        for (var i = params.length - 1; i >= 0; i--) {
            if(params[i].indexOf(key + '=') > -1) {
                params.splice(i, 1);
                break;
            }
        }
        
        return path + (params.join('&') ? ('?' + params.join('&')) : '') + (hash ? ('#' + hash) : '');
    },
    /**
     * 将URL query的字符串解析成对象
     */
    parseQuery: function(query){
        var ret = {},
            qs,
            q,
            _qs;
        if (typeof query == 'object') {
            for (var p in query) {
                if (query.hasOwnProperty(p) && query[p] !== null) {
                    ret[p] = query[p];
                }
            }
        } else {
            qs = query.split('&');
            for (var i = 0; i < qs.length; i++) {
                if ((q = qs[i]) && (_qs = q.split('=')) && _qs[0]) {
                    ret[_qs[0]] = _qs[1] ? decodeURIComponent(_qs[1]) : '';
                }
            }
        }

        return ret;
    },
    /**
     * 将URL解析为对象
     * @name parse
     * @return {
     *      url: '',
     *      hash: '',
     *      query: '',
     *      host: ''
     *      ...
     * }
     */
     parse: function(url){
        var results = this.paramReg.exec(url),
            names = this.names,
            ret = {},
            key;
        
        for (var i = 0, len = names.length; i < len; i += 1) {
            key = names[i];
            ret[key] = (key == 'path' ? '/' : '') + (results[i] || '');
        }

        return ret;
     },
     /**
      * 将对象解析为URL字符串
      */
     stringify: function (data) {
        var ret = '';
        var names = this.names;
        for (var i = 1; i < names.length; i++) {
            var key = names[i],
                value = data[key];
            if (typeof value != 'undefined') {
                ret += (function (key, value) {
                    if (key == 'scheme') {
                        return value + ':';
                    }
                    if (key == 'port') {
                        return value ? ':' + value : '';
                    }
                    if (key == 'host') {
                        return value;
                    }

                    if (key == 'query') {
                        return value ? '?' + value : '';
                    }
                    if (key == 'hash') {
                        return value ? '#' + value : '';
                    }

                    return value;
                })(key, value);
            }
        }
        return ret;
    }
};

module.exports = url;
