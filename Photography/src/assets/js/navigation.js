
import $ from 'jquery';
export function Open () {
    $('.mobile-menu').on('click', function() {
        $('nav').toggleClass('is-open');   
    });
}
