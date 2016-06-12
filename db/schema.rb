# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160612212845) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auctions", force: :cascade do |t|
    t.date    "end_time"
    t.date    "start_time"
    t.boolean "posted"
  end

  create_table "items", force: :cascade do |t|
    t.float   "weight"
    t.integer "list"
    t.integer "number"
    t.string  "country"
    t.string  "region"
    t.string  "dynasty"
    t.string  "denomination"
    t.string  "date"
    t.string  "mintmark"
    t.string  "mint"
    t.string  "obverse"
    t.string  "reverse"
    t.string  "edge"
    t.string  "material"
    t.string  "diameter"
    t.string  "actual_metal_weight"
    t.string  "comment_1"
    t.string  "catalog"
    t.string  "comment_2"
    t.string  "grade"
    t.string  "wholesale"
    t.string  "price"
    t.integer "quantity"
    t.string  "unit_cost"
    t.string  "total_cost"
    t.boolean "quantity_sold"
    t.string  "hold_1"
    t.string  "hold_2"
    t.string  "source"
    t.string  "date_purchased"
    t.string  "picture"
    t.string  "date_sold"
    t.string  "comment_3"
    t.string  "comment_4"
    t.string  "category"
    t.string  "subcategory"
    t.string  "comment_5"
    t.string  "consignment"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "address"
    t.string "phone_number"
    t.string "session_token",   null: false
  end

end
