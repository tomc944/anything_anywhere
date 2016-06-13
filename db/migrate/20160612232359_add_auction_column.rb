class AddAuctionColumn < ActiveRecord::Migration
  def change
    add_column :items, :auction, :boolean
  end
end
