# Preview all emails at http://localhost:3000/rails/mailers/product_mailer
class ProductMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/product_mailer/notify_product_owner
  def notify_product_owner
    ProductMailer.notify_product_owner
  end

end
