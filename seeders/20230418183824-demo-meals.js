'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('meals', [
      {
        name: `Mexican (authentic)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Tex-Mex`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Dive bar`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Any fancy restaurant`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Breakfast place`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Drive-in`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Sandwich shop`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Italian`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Progressive dinner (each dinner course somewhere else)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Fast food`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Food truck`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Diner`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Seafood`, createdAt: new Date(), updatedAt: new Date() },
      { name: `BBQ`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Steakhouse`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Hibachi grill`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Food court`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Sushi`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Buffet`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Family-style`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Picnic`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Indian`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Thai`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Chinese (authentic)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Chinese (American)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Hotdog stand`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Concession stand`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Pizza`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Vegetarian`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Vegan`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Mediterranean`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Cuban`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Gas station`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Random meal from existing supplies at home`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Homemade Italian`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Homemade pizza`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade burgers`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Homemade BBQ`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Homemade soup`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Soup`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Hotel restaurant`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `French`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Brazilian steakhouse`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Salad bar`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Wings`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Campfire food`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade breakfast`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Bakery`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Delivery`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Brunch`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Homemade subs`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade sandwiches`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('meals', null, {
      truncate: { cascade: true, restartIdentity: true },
    });
  },
};
