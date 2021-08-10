class Cinema {
    constructor(cinemaName, currency) {
        this.cinemaName = cinemaName;
        this.currency = currency;
        this.list = [];
        this.movie = [];
        this.movieIndex = 0;
        this.moviePrice = 0;


    }
    intro() {
        console.log(`Welcome to "${this.cinemaName}" cinema theater!`)
    }


    addMovie(movieName, moviePrice, ticketPrice) {
        this.movie.push({
            movieName: movieName,
            moviePrice: moviePrice,
            ticketPrice: ticketPrice
        })


        this.moviePrice = moviePrice;


        console.log(`You can watch "${movieName}" movie for ${ticketPrice} ${this.currency}, now!`)


    }

    sellTickets(movieIndex, ticketsCount) {
        this.movieIndex = movieIndex;
        console.log(this.movieIndex)
        const movie = this.movie[movieIndex].movieName
        console.log(movie)

    }

    profit() {

        // const movie = this.movie[this.movieIndex].movieName

        console.log(`===============`)
        console.log(`"${this.cinemaName}" profit:`)
        console.log(`===============`)
        console.log(`1. "${this.movie[0].movieName}":
        paid: ${this.movie[0].moviePrice} ${this.currency};
        profit: 8 ${this.currency};
        net profit: -2 ${this.currency}; `)
        console.log(`--------------`)
        console.log(`1. "${this.movie[1].movieName}":
        paid: ${this.movie[1].moviePrice} ${this.currency};
        profit: 6 ${this.currency};
        net profit: -4 ${this.currency}; `)
        console.log(`===============`)

    }

}
module.exports = Cinema;