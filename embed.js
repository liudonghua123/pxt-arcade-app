(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-arcade-app/",
    "verprefix": "",
    "workerjs": "/pxt-arcade-app/worker.js",
    "monacoworkerjs": "/pxt-arcade-app/monacoworker.js",
    "gifworkerjs": "/pxt-arcade-app/gifjs/gif.worker.js",
    "serviceworkerjs": "/pxt-arcade-app/serviceworker.js",
    "typeScriptWorkerJs": "/pxt-arcade-app/tsworker.js",
    "pxtVersion": "10.0.11",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/pxt-arcade-app/",
    "commitCdnUrl": "/pxt-arcade-app/",
    "blobCdnUrl": "/pxt-arcade-app/",
    "cdnUrl": "/pxt-arcade-app/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "arcade",
    "simUrl": "/pxt-arcade-app/simulator.html",
    "simserviceworkerUrl": "/pxt-arcade-app/simulatorserviceworker.js",
    "simworkerconfigUrl": "/pxt-arcade-app/workerConfig.js",
    "partsUrl": "/pxt-arcade-app/siminstructions.html",
    "runUrl": "/pxt-arcade-app/run.html",
    "docsUrl": "/pxt-arcade-app/docs.html",
    "multiUrl": "/pxt-arcade-app/multi.html",
    "asseteditorUrl": "/pxt-arcade-app/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/pxt-arcade-app/kiosk.html",
    "teachertoolUrl": "/pxt-arcade-app/teachertool.html",
    "skillmapUrl": "/pxt-arcade-app/skillmap.html",
    "multiplayerUrl": "/pxt-arcade-app/multiplayer.html",
    "authcodeUrl": "/pxt-arcade-app/authcode.html"
};

    var scripts = [
        "/pxt-arcade-app/highlight.js/highlight.pack.js",
        "/pxt-arcade-app/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-arcade-app/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-arcade-app/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-arcade-app/target.js");
    scripts.push("/pxt-arcade-app/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
