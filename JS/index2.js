var data=data;

var d =dataStr.split('<br><br><br>');
for(var i=0;i< d.length;i++){
    var c=d[i].split('<br><br>');
    var temp=c[0].indexOf('、');
    var t=c[0].split('、');
    data.push({
        name:t[1],
        desc:c[1]
    });
}

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 35,
                beta: 3
            }
        },
        title: {
            //表格标题
            text: '收支情况'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        exporting:{
            enabled:false
        },
        credits: {
            enabled: false
        },series: [{
            type: 'pie',
            name: '所占比例',
            data: [
                [data[0].name,   parseFloat(data[0].desc)],
                [data[1].name,       parseFloat(data[1].desc)],
                {
                    name: data[2].name,
                    y: parseFloat(data[2].desc),
                    sliced: true,
                    selected: true
                },
                [data[3].name,    parseFloat(data[3].desc)],
                [data[4].name,     parseFloat(data[4].desc)],
                [data[5].name,   parseFloat(data[5].desc)]
            ]
        }]
    });
});

