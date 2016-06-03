class RemoveColumns < ActiveRecord::Migration
  def change
    remove_column :items, :category, :string
    remove_column :items, :name, :string
    remove_column :items, :description, :string
  end
end
