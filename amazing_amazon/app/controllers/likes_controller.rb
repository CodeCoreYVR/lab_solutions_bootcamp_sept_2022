class LikesController < ApplicationController
    before_action :authenticate_user!   

    def create
        review = Review.find(params[:review_id])
        if review.user.id == current_user.id
            flash[:alert] = "Reviewer cannot like his or her review"
            redirect_to product_path(review.product.id)
        else
            like = Like.new(user:current_user, review: review)
            if like.save
                flash[:notice] = "Review liked"
            else
                flash[:alert] = like.errors.full_messages.join(', ')
            end
            redirect_to product_path(review.product.id)
        end
    end

    def destroy
        like = Like.find(params[:id])
        if like.destroy
            flash[:notice] = "Review unliked"
        else
            flash[:alert] = like.errors.full_messages.join(', ')
        end
        redirect_to product_path(like.review.product)
    end
end
