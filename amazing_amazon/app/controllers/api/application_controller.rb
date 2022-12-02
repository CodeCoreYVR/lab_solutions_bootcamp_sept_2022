class Api::ApplicationController < ApplicationController
  # created with:
  # $ rails g controller Api::Application --no-assets --no-helper --skip-template-engine

  skip_before_action :verify_authenticity_token

  def not_found
    render(
      json: {
        errors: [
          {
            type: "Not found",
          },
        ],
      },
      status: :not_found,
    )
  end


  private

  def authenticate_user!
    redirect_to new_session_path, notice: "Please sign in" unless user_signed_in?
  end

end
