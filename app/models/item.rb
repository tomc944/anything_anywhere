class Item < ActiveRecord::Base
  validates :description, :name, :category, presence: true
  validates :name, uniqueness: true

  def self.filter_search(filter)
    return Item.all if filter.nil?

    items = Item.find_by_category(filter)

    return items
  end
end
