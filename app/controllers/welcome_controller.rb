class WelcomeController < ApplicationController
  def index
    @total_draw = Draw.all.count
  end
  
  def searchPattern
    predict_patterns = []
    base = params[:pattern]
    history_draws = HistoryDraw.all
    total_count = 0
    10.times do |i|
      count = 0
      value = base + i.to_s
      history_draws.each do |history_draw|
        count += history_draw.value.scan(/(?=#{value})/).count
      end
      total_count += count
      predict_pattern = {value: value, count: count, percentage: count}
      predict_patterns.push(predict_pattern)
    end
    predict_patterns.each do |pattern|
      pattern[:percentage] = pattern[:percentage]/total_count.to_f * 100
    end
    render json: predict_patterns
  end
end
