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

  if !!row['list']
    t.list = row['list'].strip
  end

  if !!row['weight']
    t.weight = row['weight'].strip
  end

  if !!row['number']
    t.number = row['number'].strip
  end

  if !!row['country']
    t.country = row['country'].split(",").first.strip
  end

  if !!row['region']
    t.region = row['region'].split(",").first.strip
  end

  if !!row['dynasty']
    t.dynasty = row['dynasty'].split(", ").first.strip
  end

  if !!row['denomination']
    t.denomination = row['denomination'].split(", ").first.strip
  end

  if !!row['date']
    t.date = row['date'].strip
  end

  if !!row['mintmark']
    t.mintmark = row['mintmark'].strip
  end

  if !!row['mint']
    t.mint = row['mint'].split(" ").first.strip
  end

  if !!row['obverse']
    t.obverse = row['obverse'].split(", ").first.strip
  end

  if !!row['reverse']
    t.reverse = row['reverse'].split(", ").first.strip
  end

  if !!row['edge']
    t.edge = row['edge'].split(", ").first.strip
  end

  if !!row['material']
    t.material = row['material'].split(", ").first.strip
  end

  if !!row['diameter']
    t.diameter = row['diameter'].split(", ").first.strip
  end

  if !!row['actual_metal_weight']
    t.actual_metal_weight = row['actual_metal_weight'].strip
  end

  if !!row['comment_1']
    t.comment_1 = row['comment_1'].split(" ").first.strip
  end

  if !!row['catalog']
    t.catalog = row['catalog'].split(", ").first.strip
  end

  if !!row['comment_2']
    t.comment_2 = row['comment_2'].split(", ").first.strip
  end

  if !!row['grade']
    t.grade = row['grade'].split(" ").first.strip
  end

  if !!row['wholesale']
    t.wholesale = row['wholesale'].strip
  end

  if !!row['price']
    t.price = row['price'].split(" ").first.strip
  end

  if !!row['quantity']
    t.quantity = row['quantity'].strip
  end

  if !!row['unit_cost']
    t.unit_cost = row['unit_cost'].split(" ").first.strip
  end

  if !!row['total_cost']
    t.total_cost = row['total_cost'].split(" ").first.strip
  end

  if !!row['quantity_sold']
    t.quantity_sold = row['quantity_sold'].strip
  end

  if !!row['hold_1']
    t.hold_1 = row['hold_1'].strip
  end

  if !!row['hold_2']
    t.hold_2 = row['hold_2'].strip
  end

  if !!row['source']
    t.source = row['source'].strip
  end

  if !!row['date_purchased']
    t.date_purchased = row['date_purchased'].strip
  end

  if !!row['picture']
    t.picture = row['picture'].strip
  end

  if !!row['date_sold']
    t.date_sold = row['date_sold'].strip
  end

  if !!row['comment_3']
    t.comment_3 = row['comment_3'].strip
  end

  if !!row['comment_4']
    t.comment_4 = row['comment_4'].strip
  end

  if !!row['category']
    t.category = row['category'].strip
  end

  if !!row['subcategory']
    t.subcategory = row['subcategory'].strip
  end

  if !!row['comment_5']
    t.comment_5 = row['comment_5'].strip
  end

  if !!row['consignment']
    t.consignment = row['consignment'].strip
  end

  t.save
end
