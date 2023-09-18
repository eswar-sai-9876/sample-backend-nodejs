/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('students').del()
  await knex('students').insert([
    { f_Name: 'Eswar', l_Name:'sai', email:'eswar@mail', password:'123', ph_number:'1234567891'}

    // {id: 1, colName: 'rowValue1'},
    // {id: 2, colName: 'rowValue2'},
    // {id: 3, colName: 'rowValue3'}
  ]);
};
