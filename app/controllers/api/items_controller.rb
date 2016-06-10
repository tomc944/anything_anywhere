class Api::ItemsController < ApplicationController
  # This filter argument allows us to query our DB for specific categories
  # If we are on the main page we don't need a filter - until we sort by newest.
  def index
    case params[:requestOrigin]
    when "productSearch"
      @items = Item.edit_search(params[:searchPhrase])
    when "categoryLink"
      debugger
      @items = Item.filter_search(params[:filter_hash])
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

  private
  def item_params
    params.require(:item).permit(:WEIGHT, :LIST, :NUMBER, :COUNTRY, :REGION,
                                 :DYNASTY, :DENOMINATION, :DATE, :MINTMARK,
                                 :MINT, :OBVERSE, :REVERSE, :EDGE, :MATERIAL,
                                 :DIAMETER, :ACTUAL_METAL_WEIGHT, :COMMENT_1,
                                 :CATALOG, :COMMENT_2, :GRADE, :WHOLESALE,
                                 :PRICE, :QUANTITY, :UNIT_COST, :TOTAL_COST,
                                 :QUANTITY_SOLD, :HOLD_1, :HOLD_2, :SOURCE,
                                 :DATE_PURCHASED, :PICTURE, :DATE_SOLD, :COMMENT_3,
                                 :COMMENT_4, :CATEGORY, :SUBCATEGORY, :COMMENT_5,
                                 :CONSIGNMENT)
  end

end
