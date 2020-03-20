class GametypesController < ApplicationController
  before_action :set_gametype, only: [:show, :update, :destroy]

  # GET /gametypes
  def index
    @gametypes = Gametype.all

    render json: @gametypes
  end

  # GET /gametypes/1
  def show
    render json: @gametype
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gametype
      @gametype = Gametype.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def gametype_params
      params.fetch(:gametype, {})
    end
end
