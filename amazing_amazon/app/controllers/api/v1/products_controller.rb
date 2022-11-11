class Api::V1::ProductsController < Api::ApplicationController
  # created with:
  # $ rails g controller api/v1/products --skip-template-engine

  before_action :authenticate_user!, except: [:index, :show]
  before_action :find_product,only:[:show, :destroy, :update]
  before_action :authorize!, only: [:update, :destroy]


  # postman requests for testing

  # product index
  #  - localhost:3000/api/v1/products
  #  - method: get

  # product show
  #  - localhost:3000/api/v1/products/<id of product i.e. 103>
  #  - method: get

  # product create
  #  - http://localhost:3000/api/v1/products
  #  - method: post
  #  - header: 
  #    - key: Content-Type, value: application/json
  #  - body: 
  #     {
  #       "title": "****** postman ********",
  #       "description": "afs fa fda sf fafs fsf s",
  #       "price": 1,
  #       "tag_names": "tag1,tag2,tag3"
  #     }

  # product update
  #  - localhost:3000/api/v1/products/<id of product i.e. 103>
  #  - method: update
  #  - header: 
  #    - key: Content-Type, value: application/json
  #  - body: 
  #     {
  #       "title": "****** updated postman ********",
  #       "description": "this has been updated through postman",
  #       "price": 1,
  #       "tag_names": "tag1,tag2,tag3"
  #     }

  # product delete
  #  - localhost:3000/api/v1/products/<id of product i.e. 103>
  #  - method: delete
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

  def update
    if @product.update product_params
      render json: { id: @product.id }
    else
      render(
        json: { errors: @product.errors },
        status: 422 # status: Unprocessable Entity
      )
    end
  end

  def destroy
    if @product.destroy
      render(json: { status: 200 }, status: 200) # status: success
    else
      render(json: { status: 422, errors: @product&.errors }, status: 422) # status: Unprocessable Entity
    end
  end


  private

  def find_product
     @product ||= Product.find params[:id]
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :tag_names)
  end

  def authorize!
    render(json: { status: 401 }, status: 401) unless can? :crud, @product
  end

end
