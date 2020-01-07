### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby


#require relative for card needed?

class CardGame


  def checkforAce(card) #should be snake case #needs to be get_checkforAce
    if card.value = 1  #should be card (no .value)
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #should be def and paramaters need comma
  if card1.value > card2.value #shouldn't include .value - also indentation wrong
    return card #should be card1
  else
    return card2
  end
end
end #in wrong place, should be after last function

def self.cards_total(cards)
  total #should be total = 0
  for card in cards
    total += card.value #no .value
    return "You have a total of" + total
  end
end
```
