// Dependencies

const excludedService = { 
  findExcluded(db, userId, categoryId, category) {
    return db
      .raw(`
        select id 
        from excluded e
        where e.user_id = '${userId}'
          and e.${category}_id = '${categoryId}'
        ;
      `)
    ;
  },
  addExcluded(db, userId, categoryId, category) {
    return db
      .raw(`
        insert into excluded (user_id, ${category}_id)
        values ('${userId}', ${categoryId});
      `)
    ;
  },
  deleteExcludedId(db, excludedId) {
    return db
      .raw(`
        delete from excluded
        where id = ${excludedId};
      `)
    ;
  },
  deleteExcludedYear(db, userId) {
    return db
      .raw(`
        delete from excluded
        where user_id = '${userId}'
          and date_created <= now() - interval '365 DAYS';
      `)
    ;
  }
}

module.exports = excludedService;