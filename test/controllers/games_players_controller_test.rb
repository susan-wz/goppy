require 'test_helper'

class GamesPlayersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @games_player = games_players(:one)
  end

  test "should get index" do
    get games_players_url, as: :json
    assert_response :success
  end

  test "should create games_player" do
    assert_difference('GamesPlayer.count') do
      post games_players_url, params: { games_player: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show games_player" do
    get games_player_url(@games_player), as: :json
    assert_response :success
  end

  test "should update games_player" do
    patch games_player_url(@games_player), params: { games_player: {  } }, as: :json
    assert_response 200
  end

  test "should destroy games_player" do
    assert_difference('GamesPlayer.count', -1) do
      delete games_player_url(@games_player), as: :json
    end

    assert_response 204
  end
end
