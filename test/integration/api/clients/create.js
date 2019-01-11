const { expect } = require('code');
const { it, experiment, before, after } = exports.lab = require('lab').script();

const RegisterApp = require('../../index');

const stub = {};

experiment('INTEG API Clients Create', () => {

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
        method: 'POST',
        url: '/api/clients',
        payload
      });

      expect(response).to.be.an.object();
      expect(response.statusCode).to.equal(400);
    });
  })
  it(`should persist to database when post is successful`, async () => {

    const response = await stub.server.inject({
      method: 'POST',
      url: '/api/clients',
      payload: {
        company_name: 'Ed Test',
        address: 'I live in house1',
        phone_number: '7865567842',
        email: 'rowValue1',
        website: 'www.sharkTillIFart.com'
      }
    });

    const confirm = await stub.server.inject({
      method: 'GET',
      url: '/api/client/' + JSON.parse(response.payload).id
    });

    expect(JSON.parse(response.payload)).to.be.an.object();
    expect(response.statusCode).to.equal(200);
    expect(JSON.parse(response.payload).id).to.equal(JSON.parse(confirm.payload).id)
  });
})