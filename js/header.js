
// Check if "articles" is in the URL
const isArticlesPage = window.location.pathname.includes('articles');
// Function to adjust image paths - if no an article page it needs to be ../images
function adjustPath(path) {
    return isArticlesPage ? path.replace('./', '../') : path;
}
$(document).ready(function() {
    const header = $('<header>').append(
        $('<a>').attr({
            href: 'https://PennsylvaniaRealEstate.com',
            class: 'logo'
        }).append(
            $('<img>').attr({
                src: adjustPath('./images/logo.png'),
                alt: 'Pennsylvania Real Estate'
            })
        ),
        $('<nav>').append(
            $('<a>').attr('href', adjustPath('./search.html?type=sales')).text('Sales'),
            $('<a>').attr('href', adjustPath('./search.html?type=rentals')).text('Rentals'),
            $('<a>').attr('href', adjustPath('./contact.html')).text('Contact')
        ),
        $('<ul>').addClass('social-icons').append(
            $('<li>').append(
                $('<a>').attr('href', 'https://www.facebook.com/amorealty').append(
                    $('<img>').attr({
                        src: adjustPath('./images/facebook.png'),
                        alt: 'facebook icon'
                    })
                )
            ),
            $('<li>').append(
                $('<a>').attr('href', 'https://www.linkedin.com/company/amo-realty/').append(
                    $('<img>').attr({
                        src: adjustPath('./images/linkedin.png'),
                        alt: 'linkedin icon'
                    })
                )
            ),
            $('<li>').append(
                $('<a>').attr('href', 'https://www.instagram.com/amorealty/').append(
                    $('<img>').attr({
                        src: adjustPath('./images/instagram.png'),
                        alt: 'instagram icon'
                    })
                )
            )
        )
    );

    // Append the header to the body (or any other container element)
    $('#header').prepend(header);
});