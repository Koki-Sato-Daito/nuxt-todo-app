(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(t,e,n){n(173),t.exports=n(174)},221:function(t,e,n){"use strict";n.r(e);n(44),n(165);var o=n(41);e.default=function(){return new o.a.Store({state:function(){return{todos:[{content:"テスト",created:"2020-04-30 17:00",state:"作業前"},{content:"コーディング",created:"2020-04-30 16:00",state:"作業中"},{content:"環境構築",created:"2020-04-30 15:30",state:"完了"}],option:[{id:0,label:"作業前"},{id:1,label:"作業中"},{id:2,label:"完了"}]}},mutations:{insert:function(t,e){var n=new Date,o=n.getFullYear()+"-"+("00"+(n.getMonth()+1)).slice(-2)+"-"+("00"+n.getDate()).slice(-2)+" "+("00"+n.getHours()).slice(-2)+":"+("00"+n.getMinutes()).slice(-2);t.todos.unshift({content:e.content,created:o,state:"作業前"})},remove:function(t,e){for(var i=0;i<t.todos.length;i++){var n=t.todos[i];if(n.content==e.content&&n.created==e.created&&confirm('"'+n.content+'"を削除しますか？'))return void t.todos.splice(i,1)}},changeState:function(t,e){for(var n,o=null,i=0;i<t.todos.length;i++){var c=t.todos[i];c.content==e.content&&c.created==e.created&&c.state==e.state&&(o=e)}for(var r=0;r<t.option.length;r++)t.option[r].label==o.state&&(n=t.option[r].id);n=(n+1)%t.option.length,o.state=t.option[n].label}}})}}},[[172,5,1,6]]]);