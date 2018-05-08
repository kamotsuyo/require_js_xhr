require(['/js/XHR/XHR.js', 'js/XHR/callback.js'], function (XHR, callback) {
    var xhr = new XHR("post.php", callback.console_log);

    xhr.get('hoge="haaaaaaaaaaaaa?"');
});
