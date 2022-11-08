class FavouritesController < ApplicationController
    before_action :authenticate_user!   

    def create
        product = Product.find(params[:product_id])
        if product.user.id == current_user.id
            flash[:alert] = "Product owner cannot make his/her item favourite"
            redirect_to product_path(product.id)
        else
            favourite = Favourite.new(user:current_user, product: product)
            if favourite.save
                flash[:notice] = "Added to favourites"
            else
                flash[:alert] = favourite.errors.full_messages.join(', ')
            end
            redirect_to product_path(favourite.product.id)
        end
    end

    def destroy
        favourite = Favourite.find(params[:id])
        if favourite.destroy
            flash[:notice] = "Removed from favourites"
        else
            flash[:alert] = favourite.errors.full_messages.join(', ')
        end
        redirect_to product_path(favourite.product.id)
    end
end
