// Dependencies

const mealsService = {
  getLoggedOutMeal(db) {
    return db.raw(`
        select name
        from "meals" 
        offset floor(random() * (
          select count(*) from "meals") 
        ) 
        limit 1;
      `);
  },
  getLoggedInMeal(db, userId) {
    return db.raw(`
        select name, id 
        from "meals" m
        where m.id not in (
          select meal_id
          from excluded e
          where e.user_id = '${userId}'
        ) offset floor(random() * (
          select count(*)
          from "meals" m
          where m.id not in (
            select meal_id
            from excluded e
            where e.user_id = '${userId}'
          )
        )) limit 1;
      `);
  },
};

module.exports = mealsService;
