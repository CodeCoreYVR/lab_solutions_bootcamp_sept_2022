class ProductsController < ApplicationController
  before_action :load_product, except: [:create, :index, :favourite_products]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    if params[:tag]
      @tag = Tag.find_or_initialize_by(name: params[:tag])
      @products = @tag.products.order(created_at: :DESC)
    else
      @products = Product.order(created_at: :DESC)
    end
  end

  def new
  end

  def create
    @product = Product.new(product_params)
    @product.user = @current_user

    # @product.save
    if @product.save

      # ProductMailer.notify_product_owner(@product).deliver
      ProductMailer.delay(run_at: 2.minutes.from_now).notify_product_owner(@product)
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def show
    @reviews = @product.reviews
    @review = Review.new
  end

  def destroy
    # bellow if can? statment prevents a hacker from typing the destroy command in the url
    # to see if passes.
    if !(can? :delete, @product)
      redirect_to @product, error: "not authorized"
      # redirect_to product_path(@product), error: "not authorized" -- also works
    end

    @product.destroy
    redirect_to products_path
  end

  def edit
  end

  def update
    # bellow if can? statment prevents a hacker from typing the update command in the url
    # to see if passes.
    if !(can? :update, @product)
      redirect_to @product, error: "not authorized"
      # redirect_to product_path(@product), error: "not authorized" -- also works
    end
    @product.update(product_params)

    if @product.save
      redirect_to product_path(@product)
    else
      render :edit
    end

  end

  def favourite_products
  end

  private

  def product_params
    params.require(:product).permit(:title, :description, :price, :tag_names)
  end

  def load_product
    if params[:id].present?
      @product = Product.find(params[:id])
    else
      @product = Product.new
    end
  end

end
