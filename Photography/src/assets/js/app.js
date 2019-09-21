import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

var navigation = require('../js/navigation');
navigation.Open();

function generateHtml([h,v]) {
    var  nr = randomNumber(43);
    return `
        <div class="item ih${h} iv${v}">
            <img src="../assets/img/${nr}.jpg" alt="img${nr}" />
            <div class="view-overlay">
                <button class="button view-button">View</button>
            </div
        </div>
    `;
}

function randomNumber(limit) {
    return Math.floor(Math.random()*limit) + 1;
}

$(document).ready(function() {
    $('button.view-button').on('click', function(){ 
        const image = $(this).parents('.item').find('img').clone();
        $('.reveal').append(image);
        $('.reveal-overlay').show();
        $('.reveal').show();
    });

    $('.reveal').on('click','.close-button', function () { 
        $('.reveal-overlay').hide();
        $('.reveal').hide();
        $('.reveal>img').remove();
    });
})

const digits = Array.from({ length:43}, () => [randomNumber(4), randomNumber(4)]);

const html = digits.map(generateHtml);

$('.gallery').html(html);