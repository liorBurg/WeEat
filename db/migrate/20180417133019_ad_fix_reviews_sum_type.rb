class AdFixReviewsSumType < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :reviews_sum, :integer, default: 0
  end
end
