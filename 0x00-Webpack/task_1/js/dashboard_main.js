import $ from 'jquery';
import _ from 'lodash';

// Add the elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
};

const debouncedUpdateCounter = _.debounce(updateCounter, 500);

// Bind the debounced function to the button click
$('button').on('click', debouncedUpdateCounter);
