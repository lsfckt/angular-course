function tickets(ticketDescriptions, sortingCriteria) {
    var tickets = [];
    ticketDescriptions.forEach(function (ticket) {
        var _a = ticket.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        tickets.push({
            destination: destination,
            price: price,
            status: status,
        });
    });
    if (sortingCriteria === 'destination') {
        tickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (sortingCriteria === 'price') {
        tickets.sort(function (a, b) { return a.price - b.price; });
    }
    else {
        tickets.sort(function (a, b) {
            if (a.status === b.status) {
                return 0;
            }
            else if (a.status === 'available') {
                return -1;
            }
            else if (b.status === 'available') {
                return 1;
            }
            else if (a.status === 'departed') {
                return -1;
            }
            else {
                return 1;
            }
        });
    }
    console.log(tickets);
}
tickets(['Philadelphia|300|available',
    'New York City|95.99|available',
    'New York City|0.99|sold',
    'Boston|126.20|departed'
], 'price');
//OUTPUT:
// [Ticket {
//     destination: 'Philadelphia',
//         price: 94.20,
//             status: 'available'
// },
//   Ticket {
//     destination: 'New York City',
//         price: 95.99,
//             status: 'available'
// },
//   Ticket {
//     destination: 'Boston',
//         price: 126.20,
//             status: 'departed'
// },
//   Ticket {
//     destination: 'New York City',
//         price: 95.99,
//             status: 'sold'
// } ]
