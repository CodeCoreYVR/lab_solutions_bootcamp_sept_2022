class Product < ApplicationRecord
  has_many :reviews, -> { order("updated_at DESC") }, dependent: :destroy
  has_many :favourites, dependent: :destroy
  has_many :favourite_users, through: :favourites, source: :user
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  belongs_to :user


  validates(:title,
          presence: { message: "Title must be provided" },
          :uniqueness => { :case_sensitive => false })
  validates :price, numericality: { greater_than: 0 }
  validates :description, presence: { message: "Description must be provided" }, length: { minimum: 10 }
  before_validation :set_default_price, :capitalize_title
  DEFAULT_PRICE = 1

  def tag_names
    self.tags.map(&:name).join(", ")
  end

  # Appending = at the end of a method name, allows to implement
  # a "setter". A setter is a method that is assignable.
  # Example:
  # p.tag_names = "stuff,yo"
  # The code in the example above would call the method we wrote
  # below where the value on the right-hand side of the = would
  # become the argument to the method.
  # This is similar to implementing an `attr_writer`.
  def tag_names=(rhs)
    self.tags = rhs.strip.split(/\s*,\s*/).map do |tag_name|
      Tag.find_or_initialize_by(name: tag_name)
    end
  end

  private

  def capitalize_title
    self.title.capitalize!
  end

  def set_default_price
      self.price ||= DEFAULT_PRICE
  end
end
