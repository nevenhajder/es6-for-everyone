class MovieCollection extends Array {
    // The rest operator (...) collects all of the movies passed into the constructor
    // as an iterable collection
    constructor(name, ...movies) {
        // The spread (...) operator spreads each movie into its own item in the array
        super(...movies);
        this.name = name;
    }

    add(newMovie) {
        this.push(newMovie);
    }

    topRated(limit = 10) {
        return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
    }
}

const movies = new MovieCollection('Wes\'s favourite movies.',
    { name: 'Bee Movie', stars: 10 },
    { name: 'Star Wars Trek', stars: 1 },
    { name: 'Virgin Suicides', stars: 7 },
    { name: 'King of the Road', stars: 8 }
);

movies.add({ name: 'Spiderverse', stars: 9 });

// Console statement reassigns the name property to whatever is passed into it.
console.table(movies.topRated(4));
