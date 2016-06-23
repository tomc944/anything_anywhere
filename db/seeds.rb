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

  if !!row['country']
    t.country = row['country'].split(", ").first
  end

  if !!row['region']
    t.region = row['region'].split(", ").first
  end

  if !!row['dynasty']
    t.dynasty = row['dynasty'].split(", ").first
  end

  if !!row['denomination']
    t.denomination = row['denomination'].split(", ").first
  end

  t.date = row['date']
  t.mintmark = row['mintmark']

  if !!row['mint']
    t.mint = row['mint'].split(" ").first
  end

  if !!row['obverse']
    t.obverse = row['obverse'].split(", ").first
  end

  if !!row['reverse']
    t.reverse = row['reverse'].split(", ").first
  end

  if !!row['edge']
    t.edge = row['edge'].split(", ").first
  end

  if !!row['material']
    t.material = row['material'].split(", ").first
  end

  if !!row['diameter']
    t.diameter = row['diameter'].split(", ").first
  end

  t.actual_metal_weight = row['actual_metal_weight']

  if !!row['comment_1']
    t.comment_1 = row['comment_1'].split(" ").first
  end

  t.catalog = row['catalog']

  if !!row['comment_2']
    t.comment_2 = row['comment_2'].split(", ").first
  end
  if !!row['grade']
    t.grade = row['grade'].split(", ").first
  end

  t.wholesale = row['wholesale']

  if !!row['price']
    t.price = row['price'].split(" ").first
  end

  t.quantity = row['quantity']

  if !!row['unit_cost']
    t.unit_cost = row['unit_cost'].split(" ").first
  end

  if !!row['total_cost']
    t.total_cost = row['total_cost'].split(" ").first
  end

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
