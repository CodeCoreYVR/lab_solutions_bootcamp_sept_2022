class AdminController < ApplicationController
  def panel
    # bellow if can? statment prevents a hacker from manually typing the url
    if !(can? :read, :admin)
      redirect_to home_path, error: "not authorized"
    end
    
    @products = Product.all
    @reviews = Review.all
    @users = User.all
  end
end
