class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.integer :rating, null: false
      t.text :comment

      t.timestamps
    end
  end
end
