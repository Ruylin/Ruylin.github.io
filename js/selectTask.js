$('.tasksUl').on('click', 'button', function () {
    $('.tasksUl li button').removeClass('btn-success');
    $('.tasksUl li div').removeClass('choice');
    $('.tasksUl button').html('未选中');
    $(this).addClass('btn-success').html('已选中');
    $(this).siblings()[0].classList.add('choice');
})