exports.up = function(knex) {
    return knex.schema.createTable('articles', articlesTable => {
      articlesTable.increments('article_id');
      articlesTable.string('title', 200).notNullable();
      articlesTable.text('body').notNullable();
      articlesTable.integer('votes').defaultTo(0);
      articlesTable.string('topic').references('topics.slug');
      articlesTable.string('author').references('users.username');
      articlesTable.timestamp('created_at').defaultTo(knex.fn.now())
    });
  };
  
  exports.down = function(knex) {
      console.log('removing articles table....');
      return knex.schema.dropTable('articles')
  };
  