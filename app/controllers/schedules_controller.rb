class SchedulesController < ApplicationController
  before_action :find_schedule, only: %i[show edit update destroy]


  def index
    @schedules = Schedule.all
  end

  def new
    @schedule = Schedule.new
  end

  def show; end

  def edit; end

  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      flash[:notice] = "スケジュールを登録しました"
      redirect_to schedules_path
    else
      flash[:alert] = "新規作成に失敗しました"
      @hide_footer = true # バリデーションエラーで表示されないように設定
      render "new"
    end
  end

  def update
    if @schedule.update(schedule_params)
      flash[:notice] = "スケジュール内容を更新しました"
      redirect_to schedules_path
    else
      flash[:alert] = "編集に失敗しました"
      @hide_footer = true # バリデーションエラーで表示されないように設定
      render "edit"
    end
  end

  def destroy
    if @schedule.destroy
      flash[:notice] = "削除が完了しました。"
      render json: { success: true }
    else
      flash[:alert] = "削除に失敗しました。"
      render json: { success: false }, status: :unprocessable_entity
    end
  end

  private

  def find_schedule
    @schedule = Schedule.find(params[:id])
  end

  # パラメータ許可処理
  def schedule_params
    params.require(:schedule).permit(:title, :start_date, :end_date, :notes, :all_day)
  end
end
