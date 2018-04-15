json.extract! restaurant, :id, :name, :cuisine, :rating, :accepts10bis, :address, :maxDeliveryTime, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
