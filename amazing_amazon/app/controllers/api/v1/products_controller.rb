class Api::V1::ProductsController < Api::ApplicationController
  # created with:
  # $ rails g controller api/v1/products
  
  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_product,only:[:show]

  def index
    products = Product.order created_at: :desc 
    # or # products = Product.order(created_at: :desc)
    render(json: products, each_serializer: ProductCollectionSerializer)    
    # or # render json: products, each_serializer: ProductCollectionSerializer    
  end

  def show
    # each_serializer doesn't work because @product isn't an array.
      render json: @product
  end

  def create
    product = Product.new product_params
    product.user = current_user

    if product.save
      render json:{ id: product.id }
    else
      render(
        json:{ errors: product.errors },
        status: 422 # Unprocessable Entity
      )
    end
  end




  private

  def find_product
     @product ||= Product.find params[:id]
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :tag_names)
  end

end
