class AddChangesToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :reviews_count, :integer, default: 0
    rename_column :restaurants, :accepts_10bis, :accepts_10bis
    rename_column :restaurants, :maxDeliveryTime, :max_delivery_time

    change_column :restaurants, :rating, :integer, default: 0
    change_column :restaurants, :accepts_10bis, :boolean, default: false
    change_column :restaurants, :max_delivery_time, :integer, default: 120
  end
end
