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

ActiveRecord::Schema.define(version: 20160603193807) do

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
    t.string  "reg"
    t.string  "dynasty"
    t.string  "DENC"
    t.string  "DAT"
    t.string  "mintno"
    t.string  "mint"
    t.string  "obv"
    t.string  "rev"
    t.string  "edge"
    t.string  "material"
    t.string  "diameter"
    t.string  "amw"
    t.string  "com"
    t.string  "CAT"
    t.string  "con"
    t.string  "Grade"
    t.string  "wh"
    t.string  "price"
    t.integer "quanity"
    t.string  "unit_cost"
    t.string  "cost"
    t.boolean "sold"
    t.string  "hold1"
    t.string  "hold2"
    t.string  "source"
    t.string  "date_acquired"
    t.string  "picture"
    t.string  "date_sold"
    t.string  "comment3"
    t.string  "comment4"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "address"
    t.string "phone_number"
    t.string "session_token",   null: false
  end

end
