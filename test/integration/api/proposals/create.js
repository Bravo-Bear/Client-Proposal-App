const { expect } = require('code');
const { it, experiment, before, after } = exports.lab = require('lab').script();

const RegisterApp = require('../../index');

const stub = {};

experiment('INTEG API Proposals Create', () => {

  before(async () => {

    stub.server = await RegisterApp();
  });

  [
    ['undefined'],
    ['null', null],
    ['string', 'string'],
    ['number', 234],
    ['empty object', {}],
    ['bad title', { title: 123 }],
    ['bad subtitle', { subtitle: 123 }],
    ['bad dri', { dri: 123 }],
    ['bad project_details', { project_details: 123 }],
    ['bad target_completion_date', { target_completion_date: {} }],
    ['bad project_length', { project_length: 123 }],
    ['bad development_hours', { development_hours: {} }],
    ['bad total_price', { total_price: {} }],
    ['bad execution_timeline', { execution_timeline: 123 }],
    ['bad ongoing_charges', { ongoing_charges: 123 }],

  ].forEach(([description, payload]) => {

    it(`should not allow ${description} payloads`, async () => {

      const response = await stub.server.inject({
        method: 'POST',
        url: '/api/client/1/proposal',
        payload
      });

      expect(response).to.be.an.object();
      expect(response.statusCode).to.equal(400);
    });
  })
  it(`should persist to database when post is successful`, async () => {

    const response = await stub.server.inject({
      method: 'POST',
      url: '/api/client/1/proposal',
      payload: {
        "title": "Ed's Bake Shop",
        "subtitle": "Best Baked Goods Made by a dude named Ed",
        "dri": "Eduard Ferandnez",
        "project_details": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequuntur cumque officiis rem quasi enim aliquam temporibus optio exercitationem qui quis dignissimos laudantium perspiciatis nesciunt soluta doloremque illo, ex quia.",
        "target_completion_date": "Jan 09 2019",
        "project_length": "3 weeks",
        "development_hours": 140,
        "total_price": 0.5,
        "execution_timeline": [
          {
            "title": "Think of an Idea",
            "date": "Jan 29 2019",
            "description": "I should have done this sooner"
          },
          {
            "title": "Plan out modules",
            "date": "Jan 29 2019",
            "description": "Gonna need some Clients and Proposals"
          },
          {
            "title": "Crash an Burn due to Low Income",
            "date": "Jan 29 2019",
            "description": "Should have gotten more money"
          }
        ],
        "ongoing_charges": "Call me every few mounths to get the 50 cents I owe you"
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