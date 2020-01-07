require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class TestCardGame < MiniTest::Test

def setup()

@card = Card.new('spades', 8)
@card1 = Card.new("hearts", 5)
@card2 = Card.new("clubs", 7 )

end

  def test_check_for_ace()
    # card = {"suit" => "spades",
    # "value" => 8}
    assert_equal(false, CardGame.check_for_ace(@card))
  end

  def test_highest_card()

    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end

  def test_cards_total()
      assert_equal("You have a total of 12", CardGame.cards_total([@card1, @card2]))
  end

end
