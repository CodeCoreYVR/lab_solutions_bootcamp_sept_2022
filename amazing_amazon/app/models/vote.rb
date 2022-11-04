class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :user_id, uniqueness: {
    scope: :review_id, 
    message: "has already been voted on"
  }

  # validates :user_id, comparison: { other_than: Review.find(@review.id).user_id }

  validate :not_reviewer

  def not_reviewer
    if user_id == self.review.user_id
      errors.add(:user_id, "can't vote on own review")
    end
  end

  def self.up 
    where(is_up: true)
  end 

  def self.down 
    where(is_up: false)
  end 
end
