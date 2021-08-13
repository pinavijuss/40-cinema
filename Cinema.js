class Cinema {
    constructor(cinemaName, currency) {
        this.cinemaName = cinemaName;
        this.currency = currency;
        this.movieList = [];
    }

    intro() {
        console.log(`Welcome to "${this.cinemaName}" cinema theater!`);
    }

    addMovie(movieName, moviePrice, ticketPrice) {
        this.movieList.push({
            title: movieName,
            cost: moviePrice,
            price: ticketPrice,
            profit: 0,
            ticketsSold: 0,
            available: true

        });

        console.log(`You can watch "${movieName}" movie for ${ticketPrice} ${this.currency}, now!`);
    }

    sellTickets(movieIndex, ticketsCount) {

        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];
            if (!movie.available && i === movieIndex) {
                console.log(`Sorry, you can no longer buy tickets to movie "${movie.title}".`)
                break;
            } else if (i === movieIndex) {
                movie.ticketsSold += ticketsCount;
                movie.profit += ticketsCount * movie.price;
                break;
            }
        }
    }

    profit() {

        let cinemaInfoList = [];

        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];

            if (i > 0) {
                cinemaInfoList.push(`---------------\n ${i + 1}."${movie.title}": \n    paid: ${movie.cost} ${this.currency}; \n    profit: ${movie.profit} ${this.currency}; \n    net profit: ${movie.profit - movie.cost} ${this.currency}; `)
            } else {
                cinemaInfoList.push(`${i + 1}."${movie.title}": \n    paid: ${movie.cost} ${this.currency}; \n    profit: ${movie.profit} ${this.currency}; \n    net profit: ${movie.profit - movie.cost} ${this.currency}; `)
            }
        }
        console.log(`=============== `);
        console.log(`"${this.cinemaName}" profit: `);
        console.log(`=============== `);
        console.log(cinemaInfoList.join('\n'));
        console.log(`=============== `);
    }

    updateMoviePrice(movieIndex, newTicketPrice) {

        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];

            if (i === movieIndex) {
                movie.price = newTicketPrice;

                console.log(`You can watch "${movie.title}" movie for ${newTicketPrice} ${this.currency}, now!`)
                break;
            }
        }
    }

    removeMovie(movieIndex) {
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];
            if (i === movieIndex) {
                movie.available = false;

                console.log(`No more "${this.movieList[movieIndex].title}" : (`)
            }
        }
    }
}

module.exports = Cinema;