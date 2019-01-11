const { expect } = require('code');
const { it, experiment, before, after } = exports.lab = require('lab').script();

const RegisterApp = require('../../index');

const stub = {};

experiment('INTEG API Proposals Read All', () => {

  before(async () => {

    stub.server = await RegisterApp();
  });

  [
    ['string', 'string', 'string'],
    ['null', null, null],
    ['empty object', {}, {}],
    ['negative number values', -1, -1]
  ].forEach(([description, pages, limit]) => {

    it(`should not allow ${description} limits or pages`, async () => {

      const response = await stub.server.inject({
        method: 'GET',
        url: `api/client/1/proposals?pages=${pages}&limit=${limit}`
      });

      expect(response).to.be.an.object();
      expect(response.statusCode).to.equal(400);
    });
  })
})