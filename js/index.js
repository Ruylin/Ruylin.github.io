$(document).ready(function () {
    $('#switchTab')
        .on('status.field.bv', function (data) {
            validator = data.bv,
                $tabPane = data.element.parents('.tab-pane'),
                tabId = $tabPane.attr('id');
            if (tabId) {
                var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');
                // Add custom class to tab containing the field
                if (data.status == validator.STATUS_INVALID) {
                    $icon.removeClass('fa-check').addClass('fa-times');
                } else if (data.status == validator.STATUS_VALID) {
                    var isValidTab = validator.isValidContainer($tabPane);
                    $icon.removeClass('fa-check fa-times')
                        .addClass(isValidTab ? 'fa-check' : 'fa-times');
                }
            }
        });
    // 滑动条
    $('#collection').click(() => {
        $('.slider').css({ 'left': '0' });
    });
    $('#expire').click(() => {
        $('.slider').css({ 'left': '100px' });
    });
    $('#view').click(() => {
        $('.slider').css({ 'left': '200px' });
    });
    // 控制当前选中任务高亮
    // 采集中
    $('#collection-tab').on('click', 'button', function () {
        $('#collection-tab button').removeClass('btn-success');
        $('#collection-tab h4').removeClass('nowChose');
        $(this).siblings()[0].classList.add('nowChose');
        $(this).addClass('btn-success');
    })
    // 已到期
    $('#expire-tab').on('click', 'button', function () {
        $('#expire-tab button').removeClass('btn-success');
        $('#expire-tab h4').removeClass('nowChose');
        $(this).siblings()[0].classList.add('nowChose');
        $(this).addClass('btn-success');
    })

    // 设置echarts
    function setEcharts(eid, data) {
        var dom = document.getElementById(eid);
        var myChart = echarts.init(dom);
        var option;
        option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    };

    setEcharts('echarts-item-1', [
        { value: 28525, name: '鱼塘' },
    ])
    setEcharts('echarts-item-2', [
        { value: 151857.886, name: '鱼塘' },
    ])
    setEcharts('echarts-item-3', [
        { value: 5, name: '5' },
        { value: 15, name: '15' },
        { value: 6661, name: '个体户' },
        { value: 486, name: '合作社' },
        { value: 32, name: '企业' },
    ])
    setEcharts('echarts-item-4', [
        { value: 28525, name: '鱼塘' },
    ]);

    getLength('.taskPlanName input', '.taskPlanName span', 20);
});