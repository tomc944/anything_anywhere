class ChangeColumns < ActiveRecord::Migration
  def change
    add_column :items, :list, :integer
    add_column :items, :number, :integer
    add_column :items, :country, :string
    add_column :items, :reg, :string
    add_column :items, :dynasty, :string
    add_column :items, :DENC, :string
    add_column :items, :DAT, :string
    add_column :items, :mintno, :string
    add_column :items, :mint, :string
    add_column :items, :obv, :string
    add_column :items, :rev, :string
    add_column :items, :edge, :string
    add_column :items, :material, :string
    add_column :items, :diameter, :string
    add_column :items, :amw, :string
    add_column :items, :com, :string
    add_column :items, :CAT, :string
    add_column :items, :con, :string
    add_column :items, :Grade, :string
    add_column :items, :wh, :string
    add_column :items, :price, :string
    add_column :items, :quanity, :integer
    add_column :items, :unit_cost, :string
    add_column :items, :cost, :string
    add_column :items, :sold, :boolean
    add_column :items, :hold1, :string
    add_column :items, :hold2, :string
    add_column :items, :source, :string
    add_column :items, :date_acquired, :string
    add_column :items, :picture, :string
    add_column :items, :date_sold, :string
    add_column :items, :comment3, :string
    add_column :items, :comment4, :string
  end
end
