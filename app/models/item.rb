class Item < ActiveRecord::Base
  validates :description, :name, :category, presence: true
  validates :name, uniqueness: true

end
