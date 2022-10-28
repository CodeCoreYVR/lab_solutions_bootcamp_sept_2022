class AddIsHiddenToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :is_hidden, :boolean, default: false
  end
end
