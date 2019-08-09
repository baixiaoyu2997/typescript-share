"use strict";
var ud;
var age = 25;
var name2 = "gaga";
var b = true;
var PERSON;
(function (PERSON) {
    PERSON[PERSON["men"] = 0] = "men";
    PERSON[PERSON["women"] = 1] = "women";
})(PERSON || (PERSON = {}));
var PERSON2;
(function (PERSON2) {
    PERSON2["men"] = "\u7537\u4EBA";
    PERSON2["women"] = "\u5973\u4EBA";
})(PERSON2 || (PERSON2 = {}));
var persion3;
(function (persion3) {
    persion3[persion3["test"] = 0] = "test";
    persion3[persion3["bar"] = 1] = "bar";
    persion3[persion3["tet"] = 2] = "tet";
})(persion3 || (persion3 = {}));
var t = 10;
t = "gaga";
t = true;
// void类型
var unusable = undefined;
