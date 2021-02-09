// Dependencies

const dessertsService = { 
  getLoggedOutDessert(db) {
    return db.
      raw(`
        select name
        from desserts 
        offset floor(random() * (
          select count(*) from desserts) 
        ) 
        limit 1;
      `)
  },
  getLoggedInDessert(db, userId) {
    return db.
      raw(`
        select name, id 
        from desserts d 
        where d.id not in (
          select dessert_id
          from excluded e
          where e.user_id = '${userId}'
        ) offset floor(random() * (
          select count(*)
          from desserts d
          where d.id not in (
            select dessert_id
            from excluded e
            where e.user_id = '${userId}'
          )
        )) limit 1;
      `)
    ;
  }
}

module.exports = dessertsService;