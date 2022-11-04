class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user

  has_many :votes, dependent: :destroy 
  has_many :voters, through: :votes, source: :user

  def vote_total 
    votes.up.count - votes.down.count 
  end 

  validates :rating, presence: :true, numericality: {greater_than: 0, less_than: 6}
end
