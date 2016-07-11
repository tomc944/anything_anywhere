class ChangeNumberType < ActiveRecord::Migration
  def change
    change_column :items, :number, :string
  end
end
