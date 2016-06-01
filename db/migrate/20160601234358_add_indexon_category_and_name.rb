class AddIndexonCategoryAndName < ActiveRecord::Migration
  def change
    add_index :items, :name
    add_index :items, :category
  end
end
