function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'Halim mama'
// const numbers = [45, 54, 78];
// const laptop = { price: 45000, brand: 'lenovo', memory: '8gb' };

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetingEvening(name) {
    console.log('Good Evening', name);
}
function greetingNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetingEvening, 'Tom Hanks');
greeting(greetingEvening, 'Tom Hanks');
greeting(greetingNight, 'Tom Hanks');
