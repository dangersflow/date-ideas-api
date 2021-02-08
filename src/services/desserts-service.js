// Dependencies

const dessertsService = {
  getDessert(db) {
    return db.
      raw(`
        select name 
        from desserts 
        offset floor(random() * (
          select count(*) from desserts) 
        ) 
        limit 1;
      `)
  }
}

module.exports = dessertsService;