class Item < ActiveRecord::Base


  # filters come in as a hash of where categories are keys and constraints or searching is done by the values
  # need to test this
  def self.filter_search(filter_hash)
    items = Items.all
    filter_hash.each do |category, constraint|
      items = items.where(category => constraint)
    end

    return items
  end
end
