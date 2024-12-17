class Schedule < ApplicationRecord
  validates :title, presence: { message: "タイトルは必須です" }, length: { maximum: 20, message: "20文字以内で入力してください" }
  validates :start_date, presence: { message: "開始日は必須です" }
  validates :end_date, presence: { message: "終了日は必須です" }
  validates :notes, length: { maximum: 500, message: "500文字以内で入力してください" }

  validate :end_date_after_or_equal_to_start_date

  private

  # 終了日が開始日と同じ、または後の日付を設定しているか確認
  def end_date_after_or_equal_to_start_date
    if start_date && end_date && end_date.to_date < start_date.to_date
      errors.add(:end_date, "開始日より後の日付を設定して下さい")
    end
  end
end
