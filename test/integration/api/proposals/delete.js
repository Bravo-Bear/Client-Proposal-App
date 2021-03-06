const { expect } = require('code');
const { it, experiment, before, after } = exports.lab = require('lab').script();

const RegisterApp = require('../../index');

const stub = {};

experiment('INTEG API Proposals Delete', () => {

  before(async () => {

    stub.server = await RegisterApp();
  });

  [
    ['undefined'],
    ['null', null],
    ['string', 'string'],
    ['empty object', {}],
  ].forEach(([description, id]) => {

    it(`should not allow ${description} ids for proposals`, async () => {

      const response = await stub.server.inject({
        method: 'DELETE',
        url: `/api/client/1/proposal/${id}`
      });

      expect(response).to.be.an.object();
      expect(response.statusCode).to.equal(400);
    });
  })

})