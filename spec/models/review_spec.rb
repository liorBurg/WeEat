require 'rails_helper'

RSpec.describe Review, type: :model do
  let(:rest) { Restaurant.new(name: 'Burgerim', cuisine: 'Burger', address: 'some st. 22 Tel-Aviv') }
  let(:review1) { Review.new(rating: 3, restaurant: rest) }
  let(:review2) { Review.new(rating: 1, restaurant: rest) }

  describe 'validations' do
    it { is_expected.to be_valid }
    it { is_expected.to validate_presence_of :rating }
  end

  describe 'associations' do
    it { should belong_to(:restaurant) }
  end
  it 'verifies that the restaurant rating was updated' do
    review1.save
    expect(review1.restaurant.rating). to eq 3
    expect(review1.restaurant.reviews_sum). to eq 3
    expect(review1.restaurant.reviews_count). to eq 1
    review2.save
    expect(review2.restaurant.rating). to eq 2
    expect(review1.restaurant.reviews_sum). to eq 4
    expect(review1.restaurant.reviews_count). to eq 2
  end
end
