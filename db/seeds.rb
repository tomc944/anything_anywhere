# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Item.create!(description: 'small turkish coin', name: "Turkish 1432", category: 'small')
Item.create!(description: 'small native american coin', name: 'Native American 1500' , category:'large')
