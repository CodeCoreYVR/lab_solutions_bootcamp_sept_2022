class ProductCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :created_at, :updated_at
end
