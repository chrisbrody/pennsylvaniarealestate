$(document).ready(function() {
    const footer = $('<footer>').append(
        $('<div>').append(
            $('<a>').attr({
                href: 'https://PennsylvaniaRealEstate.com/',
                class: 'home logo'
            }).append(
                $('<img>').attr({
                    src: adjustImagePath('./images/logo-reverse.png'),
                    alt: 'Pennsylvania Real Estate'
                })
            ),
            $('<a>').attr({
                href: 'tel:1-617-247-1933',
                class: 'phone'
            }).text('(617) 247-1933'),
            $('<span>').addClass('address').append(
                $('<strong>').css({
                    display: 'block',
                    paddingBottom: '5px'
                }).text('Pennsylvania Corporate Headquarters'),
                $('<br>'),
                '2001 Market St. Suite 2500',
                $('<br>'),
                'Philadelphia, PA 19103'
            ),
            $('<p>').addClass('languages').text('Languages we speak:'),
            $('<img>').attr({
                src: adjustImagePath('./images/flags.png'),
                alt: 'International Flags'
            }).addClass('flags')
        ),
        $('<div>').append(
            $('<ul>').append(
                $('<li>').append(
                    $('<a>').attr('href', './search?type=sales').text('Sales')
                ),
                $('<li>').append(
                    $('<a>').attr('href', './search?type=rentals').text('Rentals')
                ),
                $('<li>').append(
                    $('<a>').attr('href', './contact').text('Contact')
                )
            ),
            $('<img>').attr({
                src: adjustImagePath('./images/equal-housing-opportunity-logo-reverse.png'),
                alt: 'Equal Housing Opportunity',
                style: 'height:100px; width: auto;float:right; top:75px'
            }).addClass('eho'),
            $('<p>').addClass('copy').text('© Amo Realty 2024')
        )
    );

    // Append the footer to the body (or any other container element)
    $('#footer').append(footer);
});