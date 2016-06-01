class Api::ItemsController < ApplicationController

  def index
    render :index
  end

  def create
    @item = Item.new(item_params)

    if @item.save
      Item.create!
      render json: @item
    else
      redirect_to new_api_item_url
      render json: @item.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :weight,
                                 :category, :dimension)
  end

end
