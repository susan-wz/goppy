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

  # POST /gametypes
  def create
    @gametype = Gametype.new(gametype_params)

    if @gametype.save
      render json: @gametype, status: :created, location: @gametype
    else
      render json: @gametype.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gametypes/1
  def update
    if @gametype.update(gametype_params)
      render json: @gametype
    else
      render json: @gametype.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gametypes/1
  def destroy
    @gametype.destroy
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
