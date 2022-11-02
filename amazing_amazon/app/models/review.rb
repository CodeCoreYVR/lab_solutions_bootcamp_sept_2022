class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  validates :rating, presence: :true, numericality: {greater_than: 0, less_than: 6}
end
