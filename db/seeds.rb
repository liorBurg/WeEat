# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'Restaurants.csv'))
csv = CSV.parse(csv_text.scrub, headers: true)
csv.each do |row|
  t = Restaurant.new
  t.name = row[0]
  t.accepts10bis = row['10bis']
  t.maxDeliveryTime = row['maxDT']
  t.cuisine = row['Cuisine']
  t.address = row['Address']
  t.save
end

puts "There are now #{Restaurant.count} rows in the transactions table"
