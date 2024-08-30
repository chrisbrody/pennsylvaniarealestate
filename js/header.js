
// Check if "articles" is in the URL
const isArticlesPage = window.location.pathname.includes('articles');
// Function to adjust image paths - if no an article page it needs to be ../images
function adjustImagePath(imagePath) {
    return isArticlesPage ? imagePath.replace('./images/', '../images/') : imagePath;
}
$(document).ready(function() {
    const header = $('<header>').append(
        $('<a>').attr({
            href: 'https://PennsylvaniaRealEstate.com',
            class: 'logo'
        }).append(
            $('<img>').attr({
                src: adjustImagePath('./images/logo.png'),
                alt: 'Pennsylvania Real Estate'
            })
        ),
        $('<nav>').append(
            $('<a>').attr('href', './search?type=sales').text('Sales'),
            $('<a>').attr('href', './search?type=rentals').text('Rentals'),
            $('<a>').attr('href', './contact').text('Contact')
        ),
        $('<ul>').addClass('social-icons').append(
            $('<li>').append(
                $('<a>').attr('href', 'https://www.facebook.com/amorealty').append(
                    $('<img>').attr({
                        src: adjustImagePath('./images/facebook.png'),
                        alt: 'facebook icon'
                    })
                )
            ),
            $('<li>').append(
                $('<a>').attr('href', 'https://www.linkedin.com/company/amo-realty/').append(
                    $('<img>').attr({
                        src: adjustImagePath('./images/linkedin.png'),
                        alt: 'linkedin icon'
                    })
                )
            ),
            $('<li>').append(
                $('<a>').attr('href', 'https://www.instagram.com/amorealty/').append(
                    $('<img>').attr({
                        src: adjustImagePath('./images/instagram.png'),
                        alt: 'instagram icon'
                    })
                )
            )
        )
    );

    // Append the header to the body (or any other container element)
    $('#header').prepend(header);
});