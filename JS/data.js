var data=[];
//显示数据
/*
 1、1**大学<br>\    （内容）
 <br>\
 45.0<br>\    （比例）
 <br>\
 <br>\
 */
var dataStr='1、A大学<br>\
<br>\
45.0<br>\
<br>\
<br>\
2、B大学<br>\
<br>\
26.8<br>\
<br>\
<br>\
3、C大学<br>\
<br>\
12.8<br>\
<br>\
<br>\
\4、D大学<br>\
<br>\
8.5<br>\
<br>\
<br>\
\5、E大学<br>\
<br>\
6.2<br>\
<br>\
<br>\
\6、F大学<br>\
<br>\
0.7<br>\
';

var d =dataStr.split('<br><br><br>');
for(var i=0;i< d.length;i++){
    var c=d[i].split('<br><br>');
    var temp=c[0].indexOf('、');
    var t=c[0].split('、');
    data.push({
        name:t[1],
        desc:c[1]
    });
    //console.log(c[0].replace('、',' ')+'.png');
}