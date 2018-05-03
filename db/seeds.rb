# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
require 'json'

delivery_times_arr = (15..120).step(15).to_a
file = File.read(Rails.root.join('lib', 'seeds', 'Rests.json'))
data_hash = JSON.parse(file)
data_hash['restaurants'].each do |rest|
  r = Restaurant.new
  r.name = rest['restaurant']['name']
  r.cuisine = rest['restaurant']['cuisines']
  r.address = rest['restaurant']['location']['address']
  r.accepts_10bis = Faker::Boolean.boolean
  r.max_delivery_time = delivery_times_arr.sample
  r.save
end

puts "There are now #{Restaurant.count} rows in the restaurants table"

Restaurant.all.each do |restaurant|
  rev_count = Faker::Number.between(1, 6)
  rev_count.times do
    restaurant.reviews.create(
      reviewer_name: Faker::Name.name,
      rating: Faker::Number.between(1, 3),
      comment: Faker::Lorem.paragraph
    )
  end
end

puts "There are now #{Review.count} rows in the reviews table"
