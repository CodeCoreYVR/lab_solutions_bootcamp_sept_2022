class Api::ApplicationController < ApplicationController
  # created with:
  # $ rails g controller Api::Application --no-assets --no-helper --skip-template-engine

  skip_before_action :verify_authenticity_token




  private

  def authenticate_user!
    # Hacky way, it needs to be modifed
    # Todo: password param and authentication needs to be added. 
    unless current_user.present?
      user= User.find_by(email: params[:userEmail])
      session[:user_id]=user.id
    end
    # Hacky way, end

    unless current_user.present?
      render(json: { status: 401 }, status: 401)
    end
  end

end
