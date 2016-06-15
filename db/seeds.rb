# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'instafind-aanat-obj-6616.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Item.new
  t.list = row['list']
  t.weight = row['weight']
  t.number = row['number']
  t.country = row['country']
  t.region = row['region']
  t.dynasty = row['dynasty']
  t.denomination = row['denomination']
  t.date = row['date']
  t.mintmark = row['mintmark']
  t.mint = row['mint']
  t.obverse = row['obverse']
  t.reverse = row['reverse']
  t.edge = row['edge']
  t.material = row['material']
  t.diameter = row['diameter']
  t.actual_metal_weight = row['actual_metal_weight']
  t.comment_1 = row['comment_1']
  t.catalog = row['catalog']
  t.comment_2 = row['comment_2']
  t.grade = row['grade']
  t.wholesale = row['wholesale']
  t.price = row['price']
  t.quantity = row['quantity']
  t.unit_cost = row['unit_cost']
  t.total_cost = row['total_cost']
  t.quantity_sold = row['quantity_sold']
  t.hold_1 = row['hold_1']
  t.hold_2 = row['hold_2']
  t.source = row['source']
  t.date_purchased = row['date_purchased']
  t.picture = row['picture']
  t.date_sold = row['date_sold']
  t.comment_3 = row['comment_3']
  t.comment_4 = row['comment_4']
  t.category = row['category']
  t.subcategory = row['subcatgory']
  t.comment_5 = row['comment_5']
  t.consignment = row['consignment']
  t.save
end
