/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('persons',(table)=>{
        table.increments('id').primary();
        table.string('F_name').notNullable();
        table.string('L_name').notNullable();
        table.string('Email').notNullable();
        table.string('password').notNullable();
        table.string('phone_number').notNullable();
        table.timestamps(true,true);

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('persons');
  
};
