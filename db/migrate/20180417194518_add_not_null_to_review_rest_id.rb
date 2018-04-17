class AddNotNullToReviewRestId < ActiveRecord::Migration[5.1]
  def change
    change_column :reviews, :restaurant_id, :integer, null: false
  end
end
