class Api::V1::ReviewsController < Api::ApplicationController
    before_action :find_review, only: [:destroy]
    before_action :authenticate_user!

    def create
      @review = Review.new review_params
      @review.user = current_user
      @review.save!
      render json: { id: @review.id }
    end

    def destroy
      @review.destroy
      render(json: { status: 200 }, status: 200)
    end

    private

    def find_review
      @review ||= Review.find params[:id]
    end

    def review_params
      p params
      params.permit(:body, :rating, :product_id)
    end
  end