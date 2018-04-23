class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # for testing with Postman:
  # protect_from_forgery with: :null_session
end
