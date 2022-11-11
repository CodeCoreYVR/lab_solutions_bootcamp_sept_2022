class ReviewsController < ApplicationController
    before_action :authenticate_user!   

    def create
        @product = Product.find params[:product_id]
        @review = Review.new(params.require(:review).permit(:rating,:body,:is_hidden))
        @review.product = @product
        @review.user = @current_user
       
        if @review.save
            ReviewMailer.notify_product_owner(@review).deliver
            @reviews = @product.reviews.order(created_at: :desc)
            redirect_to product_path(@product.id)
        else
            @reviews = @product.reviews.order(created_at: :desc)
            redirect_to product_path(@product.id)
        end

    end
    def destroy
      @product = Product.find params[:product_id]
      @review = Review.find params[:id]
      
      # bellow if can? statment prevents a hacker from typing the destroy command in the url
      # to see if passes.
      if !(can? :delete, @review)
        redirect_to product_path(@product), error: "not authorized"
        return
      end

        if @review.destroy
            flash[:success] = "Deleted"
            redirect_to products_path
        else
            redirect_to root_path
        end

    end

    def unhide
      @product = Product.find params[:product_id]
      @review = Review.find params[:id]
      
      # bellow if can? statment prevents a hacker from typing the update command in the url
      # to see if passes.
      if !(can? :update, @review)
        redirect_to @product, error: "not authorized"
        # redirect_to product_path(@product), error: "not authorized" -- also works
      end
      
      @review.is_hidden = false
      
      if @review.save
          redirect_to product_path(@product.id)
      else
          redirect_to product_path(@product.id), error: 'review did not unhide!'
      end

  end

end
