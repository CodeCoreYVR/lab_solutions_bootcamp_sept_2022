class ReviewMailer < ApplicationMailer
  def notify_product_owner(review)
    @review = review
    @review_owner = @review&.user
    @product = @review&.product
    @product_owner = @product&.user
    mail to: @product_owner&.email, subject: "Someone reviewed one of your products!"
  end
end
