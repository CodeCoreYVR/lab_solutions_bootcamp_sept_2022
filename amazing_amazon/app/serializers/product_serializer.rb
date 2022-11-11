class ProductSerializer < ActiveModel::Serializer
  # created with:
  # $ rails g serializer product 

  attributes :id, :title, :description, :price, :created_at, :updated_at
  
  belongs_to :user, key: :seller

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :full_name
  end

  has_many :reviews

  class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :body, :rating
  end
end
