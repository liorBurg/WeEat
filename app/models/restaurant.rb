# == Schema Information
#
# Table name: restaurants
#
#  id                :integer          not null, primary key
#  name              :string
#  cuisine           :string
#  rating            :integer          default(0)
#  accepts_10bis     :boolean          default(FALSE)
#  address           :string
#  max_delivery_time :integer          default(120)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  reviews_count     :integer          default(0)
#  reviews_sum       :decimal(8, 2)    default(0.0)
#

class Restaurant < ApplicationRecord
end
