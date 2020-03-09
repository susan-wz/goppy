require 'test_helper'

class DealstacksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dealstack = dealstacks(:one)
  end

  test "should get index" do
    get dealstacks_url, as: :json
    assert_response :success
  end

  test "should create dealstack" do
    assert_difference('Dealstack.count') do
      post dealstacks_url, params: { dealstack: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show dealstack" do
    get dealstack_url(@dealstack), as: :json
    assert_response :success
  end

  test "should update dealstack" do
    patch dealstack_url(@dealstack), params: { dealstack: {  } }, as: :json
    assert_response 200
  end

  test "should destroy dealstack" do
    assert_difference('Dealstack.count', -1) do
      delete dealstack_url(@dealstack), as: :json
    end

    assert_response 204
  end
end
