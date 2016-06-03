class RemoveDimensionColumn < ActiveRecord::Migration
  def change
    remove_column :items, :dimension, :float
  end
end
