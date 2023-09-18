/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('persons').del()
  await knex('persons').insert([
    { F_name: 'Eswar', L_name:'sai', Email:'eswar@mail', password:'123', phone_number:'1234567891'}
    // {id: 2, F_name: 'rowValue2'},
    // {id: 3, F_name: 'rowValue3'}
  ]);
};
