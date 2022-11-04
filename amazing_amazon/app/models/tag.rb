class Tag < ApplicationRecord
  has_many :taggings, dependent: :destroy
  has_many :products, through: :taggings

  before_validation :downcase_name
  validates :name, presence: true, uniqueness: true

  private

  def downcase_name
    # self.name = self.name.downcase
    # self.name && self.name.downcase!
    # &. is the safe navigation operator. Like the dot, it will
    # execute a method. However, it will only execute if the
    # the caller is not `nil`.
    self.name&.downcase!
  end
end
