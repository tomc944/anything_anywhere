Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :items

    resources :users, only: [:create, :new]
    resources :users, defaults: { format: :json }, only: :show

    resource :session, only: [:create, :new, :destroy, :update]
    resources :current_user, defaults: { format: :json }, only: :index
  end

  root 'static_pages#root'
end
