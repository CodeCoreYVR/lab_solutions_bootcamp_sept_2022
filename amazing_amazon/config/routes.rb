Rails.application.routes.draw do
  get 'admin/panel'
  
  root "products#index"
  
  get "/home" => "welcome#home"
  get "/about" => "welcome#about"
  get "/contact_us" => "welcome#contact_us"
  get "/support_me" => "welcome#donate"
  get "/thank_you" => "welcome#thank_you"
  get "/favourites_products" => "products#favourite_products"

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

  resources :news_articles

end
