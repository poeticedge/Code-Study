"use strict";

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dormund',
    players: 
    [
        'Neuer',
        'Pravard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Mullar',
        'Gnarby',
        'Lewandowski',
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akaji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ],
score: '4.0',
scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
date: `Novemeber 9th, 2037`,
odds {
    team1: 1.33, 
    x: 3.25, 
    team2: 6.5,
},
};

//1.
const [players1, players2] = game.players;
//2.
const [gk, ...fieldPlayers] = players1;
//3.
const allPlayer = [...players1, ...players2];
//4.
const players1Final = [...players1, `Thiago`, 'Coutinho', 'Periscic'];
//5. nested destructuring, going inside the object above
const {odds: {team1, x: draw, team2}} = game;
//6.
const printGoals = function (...players) {}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
//7. Logical operator need the operator that shows true. This one is && (and)
team1 < team2 && console.log(`Team 1 is more likey to win`);