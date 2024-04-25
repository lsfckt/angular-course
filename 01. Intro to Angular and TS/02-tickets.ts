function tickets(ticketDescriptions: any[], sortingCriteria: string) {
    const tickets: object[] = [];

    ticketDescriptions.forEach(ticket => {
        const [destination, price, status] = ticket.split('|');

        tickets.push({
            destination,
            price,
            status,
        });

    });

    if (sortingCriteria === 'destination') {
        tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingCriteria === 'price') {
        tickets.sort((a, b) => a.price - b.price);
    } else {

        tickets.sort((a, b) => {
            if (a.status === b.status) {
                return 0;
            } else if (a.status === 'available') {
                return -1;
            } else if (b.status === 'available') {
                return 1;
            } else if (a.status === 'departed') {
                return -1;
            } else {
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
],
    'price'
)
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


