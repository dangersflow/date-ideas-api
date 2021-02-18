const { expect } = require('chai');
const knex = require('knex');
const supertest = require('supertest');

const app = require('../src/app');
const config = require('../src/config');

describe('App', () => {
  it('GET /api responds with 200 containing "Hello, Date Ideas!"', () => {
    return supertest(app)
      .get('/api')
      .expect(200, 'Hello, Date Ideas!')
    ;
  });
});

// ***************************************************


describe('Activities Endpoints', () => {

  let db;

  before('make knex instance', () => {

    db = knex({
      client: 'pg',
      connection: config.TEST_DATABASE_URL,
    });

    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('truncate table activities restart identity cascade'));

  afterEach('cleanup', () => db.raw('truncate table activities restart identity cascade'));

  describe('GET api/activities', () => {
    
    context('Given a populated db and matches', () => {

      const activities = {name: 'test activity'};

      before('populate the db', () => {
        return db
          .into('activities')
          .insert(activities)
        ;
      });

      it('should return test activity', () => {
        return supertest(app)
          .get('/api/activities')
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test activity');
          })
        ;
      });
    });
  });

  describe('POST api/activities', () => {

    context('Given a user and a populated db and matches', () => {
      
      const activities = [{name: 'test activity 1'}, {name: 'test activity 2'}];

      before('populate the db', () => {
        return db
          .into('activities')
          .insert(activities)
        ;
      });

      const excluded = {user_id: 1, activity_id: 1};

      before('populate the db', () => {
        return db
          .into('excluded')
          .insert(excluded)
        ;
      });

      it('should return test activity 2 and id 2', () => {
        return supertest(app)
          .post('/api/activities')
          .send({userId: 1})
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test activity 2');
            expect(res.body.id).to.equal(2);
          })
        ;
      });
    });
  });
});

// ***************************************************

describe('Meals Endpoints', () => {
  
  let db;

  before('make knex instance', () => {

    db = knex({
      client: 'pg',
      connection: config.TEST_DATABASE_URL,
    });

    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('truncate table meals restart identity cascade'));

  afterEach('cleanup', () => db.raw('truncate table meals restart identity cascade'));
  
  describe('GET api/meals', () => {

    context('Given a populated db and matches', () => {
      
      before('populate the db', () => {

        const meals = {name: 'test meal'};

        return db
          .into('meals')
          .insert(meals)
        ;
      });

      it('should return test meal', () => {
        return supertest(app)
          .get('/api/meals')
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test meal');
          })
        ;
      });
    });
  });

  describe('POST api/meals', () => {

    context('Given a user and a populated db and matches', () => {

      const meals = [{name: 'test meal 1'}, {name: 'test meal 2'}];

      before('populate the db', () => {
        return db
          .into('meals')
          .insert(meals)
        ;
      });

      const excluded = {user_id: 1, meal_id: 1};

      before('populate the db', () => {
        return db
          .into('excluded')
          .insert(excluded)
        ;
      });

      it('should return test meal 2 and id 2', () => {
        return supertest(app)
          .post('/api/meals')
          .send({userId: 1})
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test meal 2');
            expect(res.body.id).to.equal(2);
          })
        ;
      });
    });
  });
});

// ***************************************************


describe('Desserts Endpoints', () => {
  
  let db;

  before('make knex instance', () => {

    db = knex({
      client: 'pg',
      connection: config.TEST_DATABASE_URL,
    });

    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('truncate table desserts restart identity cascade'));

  afterEach('cleanup', () => db.raw('truncate table desserts restart identity cascade'));
  
  describe('GET api/desserts', () => {

    context('Given a populated db and matches', () => {

      const desserts = {name: 'test dessert'};

      before('populate the db', () => {
        return db
          .into('desserts')
          .insert(desserts)
        ;
      });

      it('should return test dessert', () => {
        return supertest(app)
          .get('/api/desserts')
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test dessert');
          })
        ;
      });
    });
  });

  describe('POST api/desserts', () => {

    context('Given a user and a populated db and matches', () => {

      const desserts = [{name: 'test dessert 1'}, {name: 'test dessert 2'}];

      before('populate the db', () => {
        return db
          .into('desserts')
          .insert(desserts)
        ;
      });

      const excluded = {user_id: 1, dessert_id: 1};

      before('populate the db', () => {
        return db
        .into('excluded')
        .insert(excluded)
      });

      it('should return test dessert 2 and id 2', () => {
        return supertest(app)
          .post('/api/desserts')
          .send({userId: 1})
          .expect(res => {
            expect(res.status).to.equal(200);
            expect(res.body.name).to.equal('test dessert 2');
            expect(res.body.id).to.equal(2);
          })
        ;
      });
    });
  });
});

// ***************************************************


describe('Excluded Endpoints', () => {
  
  let db;

  before('make knex instance', () => {

    db = knex({
      client: 'pg',
      connection: config.TEST_DATABASE_URL,
    });

    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('truncate table excluded restart identity cascade'));

  afterEach('cleanup', () => db.raw('truncate table excluded restart identity cascade'));

  describe('POST api/excluded', () => {

    const activities = [{name: 'test activity 1'}, {name: 'test activity 2'}];

    before('populate the db', () => {
      return db
        .into('activities')
        .insert(activities)
      ;
    });

    const excluded = {user_id: 1, activity_id: 1};

    beforeEach('populate the db', () => {
      return db
        .into('excluded')
        .insert(excluded)
      ;
    });
    
    it('should respond with a 201 upon successful post', () => {
      return supertest(app)
        .post('/api/excluded')
        .send({userId: 1, categoryId: 2, category: 'activity'})
        .expect(res => {
          expect(res.status).to.equal(201);
        })
      ;
    });

    it('should respond with a 204 upon successful delete', () => {
      return supertest(app)
        .post('/api/excluded')
        .send({userId: 1, categoryId: 1, category: 'activity'})
        .expect(res => {
          expect(res.status).to.equal(204);
        })
      ;
    });
  });
});