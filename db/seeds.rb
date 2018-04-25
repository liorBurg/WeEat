# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'csv'
require 'json'

file = File.read(Rails.root.join('lib', 'seeds', 'Rests.json'))
data_hash = JSON.parse(file)
data_hash['restaurants'].each do |rest|
  r = Restaurant.new
  r.name = rest['restaurant']['name']
  r.cuisine = rest['restaurant']['cuisines']
  r.address = rest['restaurant']['location']['address'] + ', ' + rest['restaurant']['location']['city']
  r.save
end

# csv_text = File.read(Rails.root.join('lib', 'seeds', 'Restaurants.csv'))
# csv = CSV.parse(csv_text.scrub, headers: true)
# csv.each do |row|
#   t = Restaurant.new
#   t.name = row[0]
#   t.accepts_10bis = row['10bis']
#   t.max_delivery_time = row['maxDT']
#   t.cuisine = row['Cuisine']
#   t.address = row['Address']
#   t.save
# end
#
puts "There are now #{Restaurant.count} rows in the restaurants table"

Restaurant.all.each do |restaurant|
  rev_count = rand(1..4)
  rev_count.times do
    rand_rating = rand(1..3)
    restaurant.reviews.create(reviewer_name: Faker::Name.name, rating: rand_rating, comment: Faker::Lorem.sentence)
  end
end

puts "There are now #{Review.count} rows in the reviews table"
