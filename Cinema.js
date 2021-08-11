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
            profit: 0

        });
        console.log(`You can watch "${movieName}" movie for ${ticketPrice} ${this.currency}, now!`);
    }

    sellTickets(movieIndex, ticketsCount) {


        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];


        }
    }


    profit() {

        let cinemaInfoList = [];
        for (let i = 0; i < this.movieList.length; i++) {
            const movie = this.movieList[i];



            if (i > 0) {
                cinemaInfoList.push(`---------------\n ${i + 1}."${movie.title}": \n    paid: ${movie.cost} ${this.currency}; \n    profit: 6 ${this.currency}; \n    net profit: ${6 - movie.cost} ${this.currency}; `)
            } else {
                cinemaInfoList.push(`${i + 1}."${movie.title}": \n    paid: ${movie.cost} ${this.currency}; \n    profit: 8 ${this.currency}; \n    net profit: ${8 - movie.cost} ${this.currency}; `)
            }
        }
        console.log(`=============== `);
        console.log(`"${this.cinemaName}" profit: `);
        console.log(`=============== `);
        console.log(cinemaInfoList.join('\n'));
        console.log(`=============== `);
    }



    // }
    // addMovie() {

    //     console.log(`You can watch "${movieName}" movie for ${ ticketPrice } ${ this.currency }, now!`)
    // }

}
module.exports = Cinema;