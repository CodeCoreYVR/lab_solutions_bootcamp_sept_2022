require "test_helper"

class AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get panel" do
    get admin_panel_url
    assert_response :success
  end
end
