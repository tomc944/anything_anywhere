class Item < ActiveRecord::Base
  validates :description, :name, :category, presence: true
  validates :name, uniqueness: true

  def self.filter_search(category)
    if category.nil?
      return Item.all
    else
      return Item.find_by_categorgy(category)
    end
  end
end
