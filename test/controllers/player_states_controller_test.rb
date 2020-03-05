require 'test_helper'

class PlayerStatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player_state = player_states(:one)
  end

  test "should get index" do
    get player_states_url, as: :json
    assert_response :success
  end

  test "should create player_state" do
    assert_difference('PlayerState.count') do
      post player_states_url, params: { player_state: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show player_state" do
    get player_state_url(@player_state), as: :json
    assert_response :success
  end

  test "should update player_state" do
    patch player_state_url(@player_state), params: { player_state: {  } }, as: :json
    assert_response 200
  end

  test "should destroy player_state" do
    assert_difference('PlayerState.count', -1) do
      delete player_state_url(@player_state), as: :json
    end

    assert_response 204
  end
end
