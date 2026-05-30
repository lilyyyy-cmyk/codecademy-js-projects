const team = {
  _players: [
    {firstName: 'Ayumi', lastName: 'Shinozaki', age: 16},
    {firstName: 'Sara', lastName: 'Chidouin', age: 17},
    {firstName: 'Asya', lastName: 'Shubina', age: 14}
  ],
  _games: [
    {opponent: 'Knicks', teamPoints: 121, opponentPoints: 32},
    {opponent: 'Celtics', teamPoints: 102, opponentPoints: 59},
    {opponent: 'Wizards', teamPoints: 87, opponentPoints: 45}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName, 
      lastName: newLastName, 
      age: newAge
    };
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

team.addPlayer('Mion', 'Sonozaki', 14);
team.addGame('Bulls', 85, 64);

console.log(team._players);
console.log(team._games);
