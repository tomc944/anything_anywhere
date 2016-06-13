json.array! @items do |item|
  json.id item.ID
  json.weight item.WEIGHT
  json.list item.LIST
  json.number item.NUMBER
  json.country item.COUNTRY
end
