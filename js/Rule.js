
$('.form').on('click', 'input', function () {
    if ($('#namedRuleOn').is(':checked')) {
        $('#namedRuleOn').parent().parent().siblings().show();
    }
    if ($('#namedRuleOff').is(':checked')) {
        $('#namedRuleOn').parent().parent().siblings().hide();
    }
    if ($('#blockPrefixOn').is(':checked')) {
        $('#blockPrefixOn').parent().siblings().eq(2).show();
        $('#hintText').children().eq(2).show();
    }
    if ($('#blockPrefixOff').is(':checked')) {
        $('#blockPrefixOn').parent().siblings().eq(2).hide();
        $('#hintText').children().eq(2).hide();
    }
    if ($('#townNameOn').is(':checked')) {
        $('#townNameOn').parent().siblings().eq(2).show();
        $('#hintText').children().eq(0).show();
    }
    if ($('#townNameOff').is(':checked')) {
        $('#townNameOn').parent().siblings().eq(2).hide();
        $('#hintText').children().eq(0).hide();
    }
    if ($('#villageNameOn').is(':checked')) {
        $('#villageNameOn').parent().siblings().eq(2).show();
        $('#hintText').children().eq(1).show();
    }
    if ($('#villageNameOff').is(':checked')) {
        $('#villageNameOn').parent().siblings().eq(2).hide();
        $('#hintText').children().eq(1).hide();
    }
    if ($('#numberOn').is(':checked')) {
        $('#numberOn').parent().siblings().eq(2).show();
        $('#hintText').children().eq(4).hide();
        $('#hintText').children().eq(3).show();
    }
    if ($('#numberOff').is(':checked')) {
        $('#numberOn').parent().siblings().eq(2).hide();
        $('#hintText').children().eq(3).hide();
    }

    if ($('#letterOn').is(':checked')) {
        $('#letterOn').parent().siblings().eq(2).show();
        if ($('#hintText').children().eq(3).is(':hidden')) {
            $('#hintText').children().eq(4).show();
        }
    }
    if ($('#letterOff').is(':checked')) {
        $('#letterOn').parent().siblings().eq(2).hide();
        $('#hintText').children().eq(4).hide();
    }
})
