(() => {
    let winner = { name: 'Arsenal', year: 2004, tournament: 'EPL'};
    console.log(`${winner.tournament} ${winner.year} winner`, winner);

    with (winner){
        name = 'Liverpool';
        year = 2020;
        console.log(`${tournament} ${year} winner`, winner);
    };
})();
