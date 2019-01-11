
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {
          company_name: 'Ed1',
          address: 'I live in house1',
          phone_number: '7865567842',
          email: 'rowValue1',
          website: 'www.sharkTillIFart.com'
        },
        { 
          company_name: 'Ed2', 
          address: 'I live in house2', 
          phone_number: '7865567842',
          email: 'rowValue2',
          website: 'www.sharkTillIFart.com' 
        },
        { 
          company_name: 'Ed3', 
          address: 'I live in house3', 
          phone_number: '7865567842', 
          email: 'rowValue3',
          website: 'www.sharkTillIFart.com' 
        }
      ]);
    });
};
