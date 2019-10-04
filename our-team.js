$(document).ready(function(){
    $('.officerOne > span').toggle(function(){
        $('.readMore.one').css({'display': 'initial'});
        $('#one').text('Read Less');
    }, function(){
        $('.readMore.one').css({'display' : 'none'});
        $('#one').text('Read More');
    });
});

$(document).ready(function(){
    $('.officerTwo > span').toggle(function(){
        $('.readMore.two').css({'display': 'initial'});
        $('#two').text('Read Less');
    }, function(){
        $('.readMore.two').css({'display' : 'none'});
        $('#two').text('Read More');
    });
});

$(document).ready(function(){
    $('.officerThree > span').toggle(function(){
        $('.readMore.three').css({'display': 'initial'});
        $('#three').text('Read Less');
    }, function(){
        $('.readMore.three').css({'display' : 'none'});
        $('#three').text('Read More');
    });
});

$(document).ready(function(){
    $('.officerFour > span').toggle(function(){
        $('.readMore.four').css({'display': 'initial'});
        $('#four').text('Read Less');
    }, function(){
        $('.readMore.four').css({'display' : 'none'});
        $('#four').text('Read More');
    });
});