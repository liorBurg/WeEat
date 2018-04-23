# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  reviewer_name :string
#  rating        :integer          not null
#  comment       :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :integer          not null
#

class Review < ApplicationRecord
  belongs_to :restaurant
  after_create :update_event_rating
  validates_presence_of :rating, :restaurant

  private

  def update_event_rating
    new_rating = (restaurant.reviews_sum + rating) / (restaurant.reviews_count + 1)
    restaurant.rating = new_rating.round
    restaurant.reviews_count += 1
    restaurant.reviews_sum += rating
    restaurant.save
  end
end
