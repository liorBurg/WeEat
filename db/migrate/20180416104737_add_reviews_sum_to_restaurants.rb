class AddReviewsSumToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :reviews_sum, :decimal, default: 0, precision: 8, scale: 2
  end
end
