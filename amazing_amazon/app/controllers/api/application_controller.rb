class Api::ApplicationController < ApplicationController
  # created with:
  # $ rails g controller Api::Application --no-assets --no-helper --skip-template-engine

  skip_before_action :verify_authenticity_token
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

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

  def record_invalid(error)
    invalid_record = error.record
    errors = invalid_record.errors.map do |field, message|
      {
        type: invalid_record.class.to_s,
        field: field,
        message: message,
      }
    end
    render(
      json: { status: 422, errors: errors },
      status: 422,
    )
  end
  
  private

  def authenticate_user!
    redirect_to new_session_path, notice: "Please sign in" unless user_signed_in?
  end

end
