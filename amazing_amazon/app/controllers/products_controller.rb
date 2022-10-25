class ProductsController < ApplicationController

  def index
    @products = Product.order(created_at: :DESC)
  end

  def show
    @product = Product.find(params[:id])
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.save
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    redirect_to products_path
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    @product = Product.find(params[:id])
    @product.update(product_params)
    if @product.save
      redirect_to product_path(@product)
    else
      render :new
    end

  end

  private

  def product_params
    params.require(:product).permit(:title, :description, :price)
  end

end
