class User < ApplicationRecord
    has_secure_password
    
    has_many :products, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :news_articles, dependent: :destroy

    has_many :likes, dependent: :destroy
    has_many :liked_reviews, through: :likes, source: :review
    
    has_many :favourites, dependent: :destroy
    has_many :favourite_products, through: :favourites, source: :product

    has_many :votes, dependent: :destroy 
    has_many :voted_reviews, through: :votes, source: :review  

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true, format: VALID_EMAIL_REGEX

    
    def full_name
        "#{first_name} #{last_name}".strip.titleize
    end

    #GEOCODE

    #We are stating that we will be converting the address to geocode

    geocoded_by :address

    #And when a user saves an address, it will be automatically converted to longitude and lattitude,

    #and will automatically be saved in the longitude and lattitude columns of the user

    after_validation :geocode
end
