class AddUsersToNewsArticles < ActiveRecord::Migration[7.0]
  def change
    add_reference :news_articles, :user, null: false, foreign_key: true
  end
end
