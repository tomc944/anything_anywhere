class Item < ActiveRecord::Base

  def self.filter_search(category, constraint)
    if category.nil?
      return Item.all
    else
      items = Item.where(category => constraint)
    end
  end
end
