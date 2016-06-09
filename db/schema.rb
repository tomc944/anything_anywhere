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

ActiveRecord::Schema.define(version: 20160609214206) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "auctions", force: :cascade do |t|
    t.date    "end_time"
    t.date    "start_time"
    t.boolean "posted"
  end

  create_table "items", force: :cascade do |t|
    t.float   "WEIGHT"
    t.integer "LIST"
    t.integer "NUMBER"
    t.string  "COUNTRY"
    t.string  "REGION"
    t.string  "DYNASTY"
    t.string  "DENOMINATION"
    t.string  "DATE"
    t.string  "MINTMARK"
    t.string  "MINT"
    t.string  "OBVERSE"
    t.string  "REVERSE"
    t.string  "EDGE"
    t.string  "MATERIAL"
    t.string  "DIAMETER"
    t.string  "ACTUAL_METAL_WEIGHT"
    t.string  "COMMENT_1"
    t.string  "CATALOG"
    t.string  "COMMENT_2"
    t.string  "GRADE"
    t.string  "WHOLESALE"
    t.string  "PRICE"
    t.integer "QUANTITY"
    t.string  "UNIT_COST"
    t.string  "TOTAL_COST"
    t.boolean "QUANTITY_SOLD"
    t.string  "HOLD_1"
    t.string  "HOLD_2"
    t.string  "SOURCE"
    t.string  "DATE_PURCHASED"
    t.string  "PICTURE"
    t.string  "DATE_SOLD"
    t.string  "COMMENT_3"
    t.string  "COMMENT_4"
    t.string  "CATEGORY"
    t.string  "SUBCATEGORY"
    t.string  "COMMENT_5"
    t.string  "CONSIGNMENT"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "address"
    t.string "phone_number"
    t.string "session_token",   null: false
  end

end
