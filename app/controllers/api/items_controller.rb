class Api::ItemsController < ApplicationController
  # This filter argument allows us to query our DB for specific categories
  # If we are on the main page we don't need a filter - until we sort by newest.
  def index
    @items = Item.filter_search(params[:filter_hash])
    render json: @items
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
    @user = Item.find(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :weight,
                                 :category, :dimension)
  end

end
