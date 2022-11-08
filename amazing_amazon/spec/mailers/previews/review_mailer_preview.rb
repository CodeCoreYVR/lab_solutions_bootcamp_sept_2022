# Preview all emails at http://localhost:3000/rails/mailers/review_mailer
class ReviewMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/review_mailer/notify_product_owner
  def notify_product_owner
    ReviewMailer.notify_product_owner
  end

end
