class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :description
      t.string :name
      t.string :category
      t.float  :weight
      t.float  :dimension
    end
  end
end
