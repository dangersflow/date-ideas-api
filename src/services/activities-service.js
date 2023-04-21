// Dependencies

const activitiesService = {
  getLoggedOutActivity(db) {
    return db.raw(`
        select name
        from "activities" 
        offset floor(random() * (
          select count(*) from "activities") 
        ) 
        limit 1;
      `);
  },
  getLoggedInActivity(db, userId) {
    return db.raw(`
        select name, id 
        from "activities" a 
        where a.id not in (
          select activity_id
          from excluded e
          where e.user_id = '${userId}'
        ) offset floor(random() * (
          select count(*)
          from "activities" a
          where a.id not in (
            select activity_id
            from excluded e
            where e.user_id = '${userId}'
          )
        )) limit 1;
      `);
  },
};

module.exports = activitiesService;
