process.env.NODE_ENV = 'test'

import { expect } from 'chai';
import request from "supertest";
import { openConneciton, closeConnection } from "../database";
import app from '../server';

describe('integration test for post endpoint', () => {
    before((done) => {
        openConneciton('mongodb://localhost/restapits')
            .then(() => {
                console.log('abriendo conexion de test')
                done()
            })
            .catch((err) => done(err));
    })

    after((done) => {
        closeConnection()
            .then(() => {
                console.log('cerrando conexion de test')
                done()
            })
            .catch((err) => done(err));
    })

    it('OK, getting posts has no posts', (done) => {
        request(app).get('/posts')
            .then((res) => {
                const body = res.body;
                expect(body.length).to.equal(0);
                done();
            })
            .catch((err) => done(err));
    });

    it('OK, getting posts has 1 post', (done) => {
        request(app).post('/posts')
            .send({
                title: "test title",
                url: "test url",
                content: "test content",
                imagen: "test image"
            })
            .then((res) => {
                request(app).get('/posts')
                    .then((res) => {
                        const body = res.body;
                        expect(body.length).to.equal(1);
                        done();
                    })
            })
            .catch((err) => done(err));
    });
});