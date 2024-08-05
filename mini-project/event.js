// creates an event class
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }
}

// creates objects and assigns values to them
const eventObj1 = new Event (
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
);

const eventObj2 = new Event(
    'Skillet & Sevendust', 
    'Victorious war tour'
);

const eventObj3 = new Event(
    'Jenny Lewis', 
    'On the line tour 2019'
);

// creates an empty Event array
const eventArray = new Array();

//pushes the objects created into the array 
eventArray.push(eventObj1, eventObj2, eventObj3);

console.log(eventArray);

document.addEventListener('DOMContentLoaded', () => {
    let html = "";
    // iterates through the array of objects
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
});

// creates class TicketType that adds the ability for events to have different ticket types with differernt prices
class TicketType {
    constructor(ticketName, ticketPrice) {
    this.ticketName = ticketName;
    this.ticketPrice = ticketPrice;
    }
    // add function on Event Class addAvailableTickets that will create a ticket type for the event
    addAvailableTickes(ticketName, ticketPrice) {
        let html2 = 
    }
}


