process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const app = require('../../index');
const request = require('supertest');
const sequelize = require('../../server/models').sequelize;

before((done) => {
    sequelize.sync({
            force: true,
            logging: false
        })
        .then(() => {
            done();
        })
});

describe('Class', () => {
    const testClass = {
        name: "vertebrado"
    };
    it('Should create a New Class', (done) => {
        request(app)
            .post('/api/class')
            .send(testClass)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res).to.exist
                done();
            });
    });
    it('Should return a list of all Classes', (done) => {
        request(app)
            .get('/api/class')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                expect(res).to.exist;
                expect(res.body).to.be.an('array').with.lengthOf(1);
                expect(res.body[0].name).to.equal(testClass.name);
                done();
            });
    });
});

describe('Specie', () => {
    const testSpecie = {
        name: "perro",
        classId: 1
    };
    it('Should create a new Specie', (done) => {
        request(app)
            .post('/api/specie')
            .send(testSpecie)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res).to.exist
                done();
            });
    });
    it('Should  return a list of all Species', (done) => {
        request(app)
            .get('/api/specie')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                expect(res).to.exist;
                expect(res.body).to.be.an('array').with.lengthOf(1);
                expect(res.body[0].name).to.equal(testSpecie.name);
                expect(res.body[0].classId).to.equal(testSpecie.classId);
                done();
            });
    });
    it('Should fail to create a new Specie', (done) => {
        const testSpecie = {
            name: "gato",
            classId: 2
        };
        request(app)
            .post('/api/specie')
            .send(testSpecie)
            .set('Accept', 'application/json')
            .expect(400, done());
    });
});

describe('Animal', () => {
    const testAnimal = {
        name: "toto",
        color: "gris",
        specieId: 1
    };
    it('Should create a new Animal', (done) => {
        request(app)
            .post('/api/animal')
            .send(testAnimal)
            .set('Accept', 'application/json')
            .expect(201)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res).to.exist
                done();
            });
    });
    it('Should  return a list of all Animals', (done) => {
        request(app)
            .get('/api/animal')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    return done(err);
                }
                expect(res).to.exist;
                expect(res.body).to.be.an('array').with.lengthOf(1);
                expect(res.body[0].name).to.equal(testAnimal.name);
                expect(res.body[0].color).to.equal(testAnimal.color);
                expect(res.body[0].specieId).to.equal(testAnimal.specieId);
                done();
            });
    });
    it('Should fail to create a new Animal', (done) => {
            const testAnimal = {
                name: "gatoto",
                color: "negro",
                specieId: 2
            };
            request(app)
                .post('/api/Animal')
                .send(testAnimal)
                .set('Accept', 'application/json')
                .expect(400, done());
    });
});