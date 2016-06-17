/**
 * Created by 想 on 28/06/2015.
 */

$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '洗衣次数'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '所占比例（百分比）'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        exporting:{
            enabled:false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: data[0].name,
            data: [parseFloat(data[0].desc),parseFloat(data[3].desc),parseFloat(data[2].desc),
                parseFloat(data[1].desc),parseFloat(data[5].desc),parseFloat(data[4].desc)]
        }, {
            name: data[1].name,
            data: [parseFloat(data[1].desc),parseFloat(data[4].desc),parseFloat(data[3].desc),
                parseFloat(data[5].desc),parseFloat(data[2].desc),parseFloat(data[0].desc)]

        }, {
            name: data[2].name,
            data: [parseFloat(data[2].desc),parseFloat(data[5].desc),parseFloat(data[0].desc),
                parseFloat(data[1].desc),parseFloat(data[4].desc),parseFloat(data[3].desc)]

        }, {
            name: data[3].name,
            data: [parseFloat(data[3].desc),parseFloat(data[0].desc),parseFloat(data[5].desc),
                parseFloat(data[2].desc),parseFloat(data[4].desc),parseFloat(data[1].desc)]

        },{
            name: data[4].name,
            data: [parseFloat(data[4].desc),parseFloat(data[2].desc),parseFloat(data[1].desc),
                parseFloat(data[0].desc),parseFloat(data[3].desc),parseFloat(data[5].desc)]

        },{
            name: data[5].name,
            data: [parseFloat(data[5].desc),parseFloat(data[3].desc),parseFloat(data[2].desc),
                parseFloat(data[4].desc),parseFloat(data[0].desc),parseFloat(data[1].desc)]
        }]
    });
});

