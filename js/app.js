// Lightbox Functionality
lightbox.option({
    'alwaysShowNavOnTouchDevices': true,
    'resizeDuration': 100,
    'wrapAround': true,
    'fadeDuration': 100,
    'showImageNumberLabel': false,
    'maxWidth': 900,
    'positionFromTop': 130,
    'disableScrolling': true
});


// Content Filtering Functionality
$('#search').on('keyup', function () {

    const inputValue = $(this).val().toLowerCase();
    // console.log(inputValue);

    $('.photo a').each(function () {

        const caption = $(this).attr('data-title').toLowerCase();
        // console.log($caption);

        // attr() and removeAttr() are used to prevent unmatch images to be navigated on Lightbox
        if (caption.includes(inputValue)) {
            $(this).parent().show();
            $(this).attr('data-lightbox', 'photo-gallery');
        } else {
            $(this).parent().hide();
            $(this).removeAttr('data-lightbox');
        }
    });

});