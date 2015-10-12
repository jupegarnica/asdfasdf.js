/**
 * author: jupegarnica.com
 * License: MIT
 * Date: 2015-01-16
 * Time: 12:12 PM
 * Version 1.02
 */

if(!String.prototype.contains) {
    String.prototype.contains = function() {
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}
if(!Array.prototype.some) {
    Array.prototype.some = function(fun /*, thisArg*/ ) {
        'use strict';
        if(this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }
        if(typeof fun !== 'function') {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        for(var i = 0; i < len; i++) {
            if(i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }
        return false;
    };
}
//init on DOM ready
function asdfasdf(a, b) {
    $(function() {
        asdfasdfInit(a, b);
    });
    window.asdfasdfStarted = window.asdfasdfStarted || undefined;
    if (!asdfasdfStarted) {
        asdfasdfInit(a, b);
    }

};

function asdfasdfInit(options, $) {
    $ = $ || jQuery;
    options = options || {};
    var setting = {
        showFeedback: true,
        showLoaded: true,
        msgLoadDataText: "Data Loaded",
        msgStyle: "position: fixed;top: 2em;color: white;background: tomato;right: 50%;transform: translateX(50%);width: auto;display: inline-block;padding: 0.5em;border-radius: 0.3em;text-transform: uppercase;",
        msgText: "auto saved",
        msgHide: 500,
        elements: 'input, textarea, select',
        expires: 2,
    }
    for(var prop in setting) {
        setting[prop] = options[prop] || setting[prop];
        options[prop] && console.log('Default setting changed:', prop, options[prop]);
    }
    (function autosave() {
        $(setting.elements)
            .on('change', onChangeInput);

        function onChangeInput() {
            var cookie = loadCookie() || '{}';
            cookie = JSON.parse(cookie);
            var ids = Object.keys(cookie);
            var that = $(this);
            var id, value, name;
            if(that.prop('type') === "checkbox") {
                value = that.prop('checked');
                id = '[name="' + that.prop('name') + '"]' + '[value="' + that.prop('value') + '"]';
            } else if(that.prop('type') == "radio") {
                value = that.prop('checked');
                name = '[name="' + that.prop('name') + '"]';
                id = name + '[value="' + that.prop('value') + '"]';
                var borrar;
                if(ids.some(function(identificador) {
                    borrar = identificador;
                    return identificador.contains(name)
                })) {
                    cookie[borrar] = undefined;
                }
            } else if(that.is('select')) {
                var option = that.find('option:selected');
                id = 'select[name="' + that.prop('name') + '"]' + ' option:contains("' + option.val() + '")';
                value = option.prop('selected');
            } else {
                value = that.val();
                id = '[name="' + that.prop('name') + '"]';
            }
            console.log(id, value);
            cookie[id] = value;
            saveCookie(cookie);
        };
    })();
    (function autoload() {
        var done = false;
        $(document)
            .ready(function() {
                if(window.asdfasdfStarted) {
                    return;
                }
                var cookie = loadCookie();
                var that;
                if(cookie) {
                    cookie = JSON.parse(cookie);
                    var loadMsgShowed = false;
                    Object.keys(cookie)
                        .forEach(function(id) {
                            that = $(id);
                            if(that.length == 0) {
                                return; //skip if not field found
                            } else if(that.prop('type') === "checkbox") {
                                that.prop('checked', cookie[id]);
                            } else if(that.prop('type') === "radio") {
                                that.prop('checked', cookie[id]);
                            } else if(that.is('option')) {
                                that.prop('selected', cookie[id]);
                            } else {
                                that.val(cookie[id]);
                            }
                            if(!loadMsgShowed && setting.showFeedback) {
                                var msg = '<span style="' + setting.msgStyle + '">' + setting.msgLoadDataText + '</span>';
                                $(msg)
                                    .appendTo('body')
                                    .delay(setting.msgHide)
                                    .fadeOut(2000);
                                loadMsgShowed = true;
                            }
                        });
                }
                window.asdfasdfStarted = true;
            });
    })();

    function removeCookie() {
        $.removeCookie('__asdfasdf', {
            expires: setting.expires
        });
    }
    window.deleteAutoSaveFormData = removeCookie;

    function saveCookie(cookie) {
        var strCookie;
        if(window.btoa && cookie) {
            strCookie = window.btoa(JSON.stringify(cookie));
        } else {
            strCookie = JSON.stringify(cookie);
        }
        $.cookie('__asdfasdf', strCookie, {
            expires: setting.expires
        });
        if(setting.showFeedback) {
            var msg = '<span style="' + setting.msgStyle + '">' + setting.msgText + '</span>';
            $(msg)
                .appendTo('body')
                .delay(setting.msgHide)
                .fadeOut(1000);
        }
    }

    function loadCookie() {
        var strCookie;
        var cookie = $.cookie('__asdfasdf') || "";
        if(window.atob) {
            strCookie = window.atob(cookie);
        } else {
            strCookie = cookie;
        }
        return strCookie;
    }
}
