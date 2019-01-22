(function () {
    var resourceCache = {};
    var loading = [];
    var readyCallbacks = [];


    function load(urlOrArr) {
        if (urlOrArr instanceof Array) {
            urlOrArr.forEach(function (url) {
                _load(url);
            });
            console.log('load przeszedl');
        } else {
            _load(urlOrArr);
        }
    }


    function _load(url) {
        if (resourceCache[url]) {
            console.log('pierwszy if');
            return resourceCache[url];
        } else {
            console.log('drugi if');
            var img = new Image();
            img.onload = () => {
                resourceCache[url] = img;
                if (isReady()) {
                    readyCallbacks.forEach((func) => { func(); });
                    console.log('if isReady')
                }
            };

            resourceCache[url] = false;
            img.src = url;
        }
    }

    function get(url) {
        return resourceCache[url];
    }

    function isReady() {
        var ready = true;
        for (var k in resourceCache) {
            if (resourceCache.hasOwnProperty(k) &&
                !resourceCache[k]) {
                ready = false;
            }
        }
        return ready;
    }


    function onReady(func) {
        readyCallbacks.push(func);
    }

    window.Resources = {
        load: load,
        get: get,
        onReady: onReady,
        isReady: isReady
    };
})();