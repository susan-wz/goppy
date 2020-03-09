class PlayerStatesController < ApplicationController
  before_action :set_player_state, only: [:show, :update, :destroy]

  # GET /player_states
  def index
    @player_states = PlayerState.all

    render json: @player_states
  end

  # GET /player_states/1
  def show
    render json: @player_state
  end

  # POST /player_states
  def create
    @player_state = PlayerState.new(player_state_params)

    if @player_state.save
      render json: @player_state, status: :created, location: @player_state
    else
      render json: @player_state.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /player_states/1
  def update
    if @player_state.update(player_state_params)
      render json: @player_state
    else
      render json: @player_state.errors, status: :unprocessable_entity
    end
  end

  # DELETE /player_states/1
  def destroy
    @player_state.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_state
      @player_state = PlayerState.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def player_state_params
      params.permit(:round_id, :player_id, :suit)
    end
end
