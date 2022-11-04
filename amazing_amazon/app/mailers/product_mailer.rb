class ProductMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.product_mailer.notify_product_owner.subject
  #
  def notify_product_owner(product)
    @product = product
    @product_owner = product&.user
    mail to: @product_owner&.email, subject: "You created a new product!"
  end
end
