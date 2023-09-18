/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('students',(table)=>{
        table.increments('id').primary();
        table.string('f_Name').notNullable();
        table.string("l_Name").notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('ph_number').notNullable();
        table.timestamps(true,true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
