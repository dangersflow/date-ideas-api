// Dependencies

const activitiesService = {
  getActivity(db) {
    return db.
      raw(`
        select name, id 
        from activities 
        offset floor(random() * (
          select count(*) from activities) 
        ) 
        limit 1;
      `)
  }
}

module.exports = activitiesService;