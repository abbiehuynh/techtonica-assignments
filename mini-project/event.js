// creates class TicketType that adds the ability for events to have different ticket types with differernt prices
class TicketType {
    constructor(ticketName, price) {
    this.ticketName = ticketName;
    this.price = price;
    }
}

// creates an event class
class Event {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.availableTickets = [];
    }

    // adds fucntion that will create a ticket type for the event
    addAvailableTickets(ticketName, price) {
        const newTicket = new TicketType(ticketName, price);
        this.availableTickets.push(newTicket);
    }

    // adds function that returns string representing all ticket types and prices
    allTickets() {
        return "All tickets " + this.availableTickets.map
       ((ticket, index) => `${index + 1}. ${ticket.name} ()`
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
    // handler when DOM is fully loaded
    let html = "";
    // iterates through the array of objects
    eventArray.forEach((item) => {
        html += `<li>${item.name} - ${item.description}`;
    });
    document.querySelector('#event').innerHTML = html;
});

// adds available tickets to events 
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

