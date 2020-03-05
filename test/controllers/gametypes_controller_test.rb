require 'test_helper'

class GametypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gametype = gametypes(:one)
  end

  test "should get index" do
    get gametypes_url, as: :json
    assert_response :success
  end

  test "should create gametype" do
    assert_difference('Gametype.count') do
      post gametypes_url, params: { gametype: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show gametype" do
    get gametype_url(@gametype), as: :json
    assert_response :success
  end

  test "should update gametype" do
    patch gametype_url(@gametype), params: { gametype: {  } }, as: :json
    assert_response 200
  end

  test "should destroy gametype" do
    assert_difference('Gametype.count', -1) do
      delete gametype_url(@gametype), as: :json
    end

    assert_response 204
  end
end
