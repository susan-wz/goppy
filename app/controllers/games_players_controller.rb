class GamesPlayersController < ApplicationController
  before_action :set_games_player, only: [:show, :update, :destroy]

  # GET /games_players
  def index
    @games_players = GamesPlayer.all

    render json: @games_players
  end

  # GET /games_players/1
  def show
    render json: @games_player
  end

  # POST /games_players
  def create
    @games_player = GamesPlayer.new(games_player_params)

    if @games_player.save
      render json: @games_player, status: :created, location: @games_player
    else
      render json: @games_player.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_games_player
      @games_player = GamesPlayer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def games_player_params
      params.permit(:game_id, :player_id)
    end
end
