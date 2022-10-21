class ChangePriceIntegerToFloat < ActiveRecord::Migration[7.0]
  def up
    change_table :products do |t|
      t.change :price, :float
    end
  end

  def down
    change_table :products do |t|
      t.change :price, :integer
    end
  end
end
