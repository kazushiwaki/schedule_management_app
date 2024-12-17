class ApplicationController < ActionController::Base
  before_action :set_schedule_count, :set_date
  before_action :hide_footer, only: [:edit, :show, :new]

  def set_schedule_count
    @schedule_count = Schedule.count
  end

  def set_date
    @today_date = Date.today
  end

  private

  def hide_footer
    @hide_footer = true
  end
end
