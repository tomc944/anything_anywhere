class Api::SessionsController < ApplicationController

  before_action :require_no_user!, only: [:new, :create]

  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    session[:cart] = []

    if user
      login_user!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Incorrect username and/or password"]
      render :new
    end
  end

  def destroy
    logout_user!
    render json: { wahooo: 'wahoooo!' }
  end

  def update(item)
    session[:cart].push(item)
  end
end
