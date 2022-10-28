class CreateNewsArticles < ActiveRecord::Migration[7.0]
  def change
    create_table :news_articles do |t|
      t.string :title
      t.text :description
      t.datetime :published_at
      t.integer :view_count
      t.timestamps
    end
  end
end
