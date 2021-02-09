// Dependencies

const mealsService = {
  getMeal(db) {
    return db.
      raw(`
        select name, id
        from meals 
        offset floor(random() * (
          select count(*) from meals) 
        ) 
        limit 1;
      `)
  }
}

module.exports = mealsService;