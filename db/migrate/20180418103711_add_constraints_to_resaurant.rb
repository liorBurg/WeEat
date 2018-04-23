class AddConstraintsToResaurant < ActiveRecord::Migration[5.1]
  def change
    change_column :restaurants, :name, :string, null: false
    change_column :restaurants, :cuisine, :string, null: false
    change_column :restaurants, :address, :string, null: false
  end
end
