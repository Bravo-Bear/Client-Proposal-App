const { expect } = require('code');
const { it, experiment, before, after } = exports.lab = require('lab').script();

const RegisterApp = require('../../index');

const stub = {};

experiment('INTEG API Proposals Edit', () => {

  before(async () => {

    stub.server = await RegisterApp();
  });

  [
    ['undefined'],
    ['null', null],
    ['string', 'string'],
    ['number', 234],
    ['empty object', {}],
    ['bad company_name', { company_name: 123 }],
    ['bad address', { address: 123 }],
    ['bad phone_number', { phone_number: 123 }],
    ['bad email', { email: 123 }],
    ['bad website', { website: 123 }]
  ].forEach(([description, payload]) => {

    it(`should not allow ${description} payloads`, async () => {

      const response = await stub.server.inject({
        method: 'PUT',
        url: '/api/client/1/proposal/1',
        payload
      });

      expect(response).to.be.an.object();
      expect(response.statusCode).to.equal(400);
    });
  })
})