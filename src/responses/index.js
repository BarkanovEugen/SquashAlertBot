module.exports = {
    // Ответ на приветственную команду
    greeting: 'Привет! Я бот по сквошу.',

    // Реакция на команду получения информации о ближайших матчах
    listUpcomingMatches: function (matches) {
        return 'Ближайшие матчи:\n\n' + matches.map(match => `${match.date} - ${match.player1} против ${match.player2}`).join('\n');
    },

    // Реакция на команду получения информации о конкретном игроке
    getPlayerInfo: function (player) {
        return `Игрок: ${player.name}\nРейтинг: ${player.rating}\nПобеды/Поражения: ${player.wins} / ${player.losses}`;
    },

    //... другие команды
};