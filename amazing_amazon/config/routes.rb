Rails.application.routes.draw do
  get 'admin/panel'
  
  root "products#index"
  
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/contact_us" => "welcome#contact_us"
  get "/support_me" => "welcome#donate"
  get "/thank_you" => "welcome#thank_you"
  get "/favourites_products" => "products#favourite_products"
  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post],
  )

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :products do
    resource :favourites, only: [:create]
    delete '/favourites/:id', to: 'favourites#destroy', as: :remove_favourite
    resources :reviews, only: [:create, :destroy] do
      resources :likes, shallow: true, only: [:create, :destroy]
      resources :votes, only: [:create, :update, :destroy]
    end
    post '/reviews/:id', to: 'reviews#unhide', as: :review_unhide
  end


  # In Rails the namespace method routes in the below code will make your 
  # app look in a directory called api, in a sub directory called v1, for 
  # a fill called products_controller.rb 
  # i.e. <app_of_name>/app/controllers/api/v1/products_controller.rb

  # The option 'defaults: { format: :json }' will set 'json' as
  # the default response format for all routes contained within
  # the block instead of rails regulare default format of HTML.

  namespace :api, defaults: { format: :json } do # we can set default response format of the block
    namespace :v1 do
      resources :products, only:[:index, :show]
      resource :session, only:[:create, :destroy]
    end
  end


  resources :news_articles

  default_url_options :host => "http://localhost:3000"

end
