require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  subject { described_class.new(name: 'Burgerim', cuisine: 'Burger', address: 'some st. 22 Tel-Aviv')}
  describe 'validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end
    it 'is not valid without a name' do
      subject.name = nil
      expect(subject).to_not be_valid
    end
    it 'is not valid without a cuisine' do
      subject.cuisine = nil
      expect(subject).to_not be_valid
    end
    it 'is not valid without an address' do
      subject.address = nil
      expect(subject).to_not be_valid
    end
  end

  describe 'associations' do
    it { should have_many(:reviews)}
  end

end
