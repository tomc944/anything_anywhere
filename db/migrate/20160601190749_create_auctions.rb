class CreateAuctions < ActiveRecord::Migration
  def change
    create_table :auctions do |t|
      t.date :end_time
      t.date :start_time
      t.boolean :posted
    end
  end
end
