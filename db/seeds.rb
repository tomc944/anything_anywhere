# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



10.times do
  Item.create(
    weight: rand(1..30),
    number: rand(1..30),
    country: "USA",
    dynasty: "washington",
    price: "20",
    quanity: "20"
  )
end
