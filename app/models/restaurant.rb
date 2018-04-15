# == Schema Information
#
# Table name: restaurants
#
#  id              :integer          not null, primary key
#  name            :string
#  cuisine         :string
#  rating          :integer
#  accepts10bis    :boolean
#  address         :string
#  maxDeliveryTime :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Restaurant < ApplicationRecord
end
