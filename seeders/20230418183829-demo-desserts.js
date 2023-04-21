'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('desserts', [
      { name: `Cookies (out)`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Restaurant (any kind)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Bakery`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Donuts`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Cakes`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Bundt Cakes`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Frozen Yogurt`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Ice Cream`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Frozen Custard`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Soft-serve`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Homemade cake`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Pie`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade brownies`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Homemade ice cream`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Tiramisu`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Cobbler`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Carrot cake`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Muffins`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Molten cake`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Eclairs`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Lemon tarts`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Brownies`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Candy store`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Fudge`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Shaved ice`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Popsicles`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Sherbet`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Apple crisp (or any other fruit)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Turkish delight`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Cheesecake`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Assorted chocolates`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Cream puffs`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Milkshakes`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Malts`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade puppy chow`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Chocolate covered anything`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Rent a fondue fountain`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Caramels`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Big pretzels`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Popcorn from a movie theater`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Stove popped popcorn`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Jello`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Microwave popcorn`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Homemade banana bread`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Homemade zucchini bread`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Cupcakes (out)`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade cupcakes`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Shortcake`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Angelfood cake`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Homemade cookies (with decorations)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `Homemade cookies`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Tarts`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Mud pies`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Dirt pudding`, createdAt: new Date(), updatedAt: new Date() },
      {
        name: `Apple Snickers salad`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: `Dessert pizza`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Smores`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Fruit pizza`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Monkey bread`, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('desserts', null, {
      truncate: { cascade: true, restartIdentity: true },
    });
  },
};
