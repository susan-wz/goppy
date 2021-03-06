class DealstacksController < ApplicationController
  before_action :set_dealstack, only: [:show, :update, :destroy]

  # GET /dealstacks
  def index
    @dealstacks = Dealstack.all

    render json: @dealstacks
  end

  # GET /dealstacks/1
  def show
    render json: @dealstack
  end

  # POST /dealstacks
  def create
    @dealstack = Dealstack.new(dealstack_params)

    if @dealstack.save
      render json: @dealstack, status: :created, location: @dealstack
    else
      render json: @dealstack.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /dealstacks/1
  def update
    if @dealstack.update(dealstack_params)
      render json: @dealstack
    else
      render json: @dealstack.errors, status: :unprocessable_entity
    end
  end

  # DELETE /dealstacks/1
  def destroy
    @dealstack.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dealstack
      @dealstack = Dealstack.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def dealstack_params
      params.permit(
        :round_id, 
        :suit, 
        :card_1, 
        :card_2, 
        :card_3, 
        :card_4, 
        :card_5, 
        :card_6, 
        :card_7, 
        :card_8, 
        :card_9, 
        :card_10, 
        :card_11, 
        :card_12, 
        :card_13
      )
    end
end
