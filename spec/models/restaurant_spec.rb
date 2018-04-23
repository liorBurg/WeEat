require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  subject { described_class.new(name: 'Burgerim', cuisine: 'Burger', address: 'some st. 22 Tel-Aviv') }
  describe 'validations' do
    it { is_expected.to be_valid }
    it { is_expected.to validate_presence_of :name }
    it { is_expected.to validate_presence_of :cuisine }
    it { is_expected.to validate_presence_of :address }
  end

  describe 'associations' do
    it { should have_many(:reviews) }
  end
end
