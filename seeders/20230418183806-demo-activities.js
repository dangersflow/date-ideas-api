'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('activities', [
      { name: `Go hiking`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go (real) golfing`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Attend a high school sporting event`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Attend a college sporting event`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Attend a professional sporting event`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Walk downtown`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go dancing`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go hiking`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go camping`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Stay in a hotel`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go to an amusement park`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go to a flea market`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Serve somewhere together`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `See a movie in theaters`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Watch a movie at home`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go to a drive-in movie`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Visit a local park`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Visit a museum`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Stay at a bed + breakfast`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Watch the sunset`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go putt-putt golfing`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go to a driving range`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go stargazing`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Play a video game together`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go to a state park`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Do a scavenger hunt in a grocery/superstore`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Watch the sunrise`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go swimming`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go play with animals at a local shelter`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go ice skating`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go rock climbing`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Play H.O.R.S.E. (the basketball game)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go for a long drive`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Play a board game`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Play a card game`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go fishing`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go skydiving`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Build a fort at home`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Camp inside`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go to the beach`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go sledding`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go skiing/snowboarding`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Build a snowman`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go to a zoo`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go geocaching`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go to a concert`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go to a local community class (ex. cooking)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go bowling`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Play lazer tag`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go go-karting`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Go to an arcade`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go to a water park`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Test drive a cool vehicle`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Do a random home science experiment from YouTube`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Paint`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Play a sport`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Build a lego set`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Carve pumpkins`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Visit a botanical garden`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Do an excape room`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Rent scooters, segways, or bikes to ride around town`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go to an archery range`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go axe throwing`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Go to a shooting range`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Make pottery`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Take to the skies (helicopter, local plane, or hot air balloon ride`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Go to a play`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Make bucket lists (and check at least one idea off`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Visit to a bookstore or library`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Build sandcastles`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Visit a trampoline park`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go fruit-picking`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Go out for coffee/drinks`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('activities', null, {
      truncate: { cascade: true, restartIdentity: true },
    });
  },
};
