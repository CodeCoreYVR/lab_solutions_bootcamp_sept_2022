class Api::V1::SessionsController < Api::ApplicationController
  # created with:
  # $ rails g controller api/v1/sessions --no-helper --skip-template-engine

  
  # postman requests for testing

  # create new collection(plus sign)
  #  - name collection amazing_amazon
  # view actions(three dots on new collection) 
  #  -  add request

  # sessions create
  #  - localhost:3000/api/v1/session
  #  - method: post
  #  - header: 
  #    - key: Content-Type, value: application/json
  #  - body:
  #     {
  #       "email": "js@winterfell.gov", 
  #       "password": "supersecret"
  #     }
  #  - you will need cookie value from response to authenticate for other requests
  #    - cookie > name & value copy
  #    - click on amazing_amazon collection
  #      - past cookie name in key section
  #      - past cookie value in key section
  #      - type is: API Key
      
  # sessions delete
  #  - localhost:3000/api/v1/session
  #  - method: delete
  #  - header: 
  #    - key: Content-Type, value: application/json
  def create
    user = User.find_by(email: params[:email])
     if user&.authenticate(params[:password])
       session[:user_id] = user.id
       render json: { id: user.id }
     else
       render(
         json: { status: 404 },
         status: 404,
       )
    end
  end
  
  def get_current_user
    render json: current_user
  end

  def destroy
    session[:user_id] = nil
    render(json: { status: 200 }, status: 200)
  end
end
