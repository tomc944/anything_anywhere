class Api::ItemsController < ApplicationController
  # This filter argument allows us to query our DB for specific categories
  # If we are on the main page we don't need a filter - until we sort by newest.
  def index
    case params[:requestOrigin]
    when "productSearch"
      @items = Item.edit_search(params[:searchPhrase])
    when "categoryLink"
      @items = Item.filter_search(params[:categories], params[:constraints])
    when "auction"
      @items = Item.where("auction" => true)
    end

    render json: @items
  end

  def create
    # item_params are all strings right now, need to convert weight, quantity, etc.
    @item = Item.new(item_params)

    if @item.save
      Item.create!
      render json: @item
    else
      render json: @item.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  def show
    @user = Item.find(params[:id])
  end

  def update
    @item = Item.find_by_id(item_params[:id])

    @item.update(item_params)

    render json: @item
  end

  private
  def item_params
    params.require(:item).permit(:weight, :list, :number, :country, :region,
                                 :dynasty, :denomination, :date, :mintmark,
                                 :mint, :obverse, :reverse, :edge, :material,
                                 :diameter, :actual_metal_weight, :comment_1,
                                 :catalog, :comment_2, :grade, :wholesale,
                                 :price, :quantity, :unit_cost, :total_cost,
                                 :quantity_sold, :hold_1, :hold_2, :source,
                                 :date_purchased, :picture, :date_sold, :comment_3,
                                 :comment_4, :category, :subcategory, :comment_5,
                                 :consignment, :auction, :id)
  end

end
