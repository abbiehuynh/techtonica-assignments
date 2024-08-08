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
       ((ticket, index) => `${index + 1}. ${ticket.ticketName} ($${ticket.price})`).join(" ")
    }
    searchTickets(low, high) {
        const eligibleTickets = this.availableTickets.filter(ticket => ticket.price >= low && ticket.price <= high);
        if (eligibleTickets.length === 0){
            return "No tickets available";
        }
        return "Eligible tickets: " + eligibleTickets.map((ticket, index) => `${index + 1 }. ${ticket.ticketName} 
        ($${ticket.price})`).join(" ");
    }
    // challenge: get cheapest tickets
    getCheapestTickets() {
        if(this.availableTickets.length === 0) {
            return "No tickets available";
        }
        const cheapestTicket = this.availableTickets.reduce((min, ticket) => ticket.price < min.price ? ticket : min);
        return `Cheapest Ticket: ${cheapestTicket.ticketName} ($${cheapestTicket.price})`
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

//pushes multiple objects created into the array 
eventArray.push(eventObj1, eventObj2, eventObj3);

// logs all of the objects as one array
console.log(eventArray);

// document.addEventListener('DOMContentLoaded', () => {
//     // handler when DOM is fully loaded
//     let html = "";
//     // iterates through the array of objects
//     eventArray.forEach((item) => {
//         html += `<li>${item.name} - ${item.description}`;
//     });
//     document.querySelector('#event').innerHTML = html;
// });

// document.addEventListener('DOMContentLoaded', () => {
//         let html = '';
//         eventArray.forEach((event) => {
//           html += `<li>${event.name} - ${event.description} - ${event.allTickets()}</li>`;
//         });
//         document.querySelector('#event').innerHTML = html;
//       });

// view the search tickets
document.addEventListener("DOMContentLoaded", () => {
    let html = '';
    eventArray.forEach((event) => {
        html += `<li> ${event.name} - ${event.description} = ${event.searchTickets(0, 100)}</li>`
    })
    document.querySelector('#event').innerHTML = html;
});

<<<<<<< HEAD
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


=======
// chalennge cheapest ticket show up on html
document.addEventListener("DOMContentLoaded", () => {
    let html = ""
    eventArray.forEach((event) => {
        html += `<li> ${event.name} - ${event.description} <br>
        ${event.getCheapestTickets()} <br>
        ${event.searchTickets(0,100)} </li>`;
    })
    document.querySelector("#cheapTix").innerHTML = html;
});

// adds available tickets to events 
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

//test cases for searchTickets
console.log("Test case 1:", eventObj3.searchTickets(0,250));

// test case for cheapest ticket
console.log("Event 1:", eventObj1.getCheapestTickets());
>>>>>>> 709e68390c34d147f282d45c7564b956cef70d69
