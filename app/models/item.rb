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

  def self.edit_search(phrase)
    products = []

    if phrase.length > 0
      products = Item.where("LOWER(DENOMINATION) LIKE ? OR
                              # LOWER(DYNASTY) LIKE ? OR
                              # LOWER(MINT) LIKE ?",

                              "%#{phrase.downcase}%",
                              "%#{phrase.downcase}%",
                              "%#{phrase.downcase}%"
                            )

                            #add more to this search as needed
    end

    products
  end
end
