class ProductCollectionSerializer < ActiveModel::Serializer
  # Created with:
  # $ rails g serializer product_collection 

  attributes :id, :title, :description, :price, :created_at, :updated_at
end
