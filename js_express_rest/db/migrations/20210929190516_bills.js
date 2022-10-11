exports.up = function (knex) {
    return knex.schema.createTable("bills", table => {
        table.increments("id");
        table.float("billTotal");
        table.float("taxPercent");
        table.float("tipPercent");
        table.integer("groupSize");
        table.timestamp("createdAt").default(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("bills");
};