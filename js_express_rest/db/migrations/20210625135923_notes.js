exports.up = function (knex) {
    return knex.schema.createTable("notes", table => {
        table.increments("id");
        table.string("title");
        table.text("body");
        table.timestamp("createdAt").default(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("notes");
};