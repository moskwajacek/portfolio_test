$('.skills-item')
    .hover(function () {
        $(this).find('span').addClass('showInfo')
    })
    .mouseleave(function () {
        $(this).find('span').removeClass('showInfo')
    });
