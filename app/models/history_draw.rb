class HistoryDraw < ActiveRecord::Base
    def self.calculatePositionHistory
        # if position history exist, overwiritten
        7.times do |position|
            history_draw = HistoryDraw.find_by(position: position)
            draws = Draw.all.order(number: :asc)
            value = ""
            draws.each do |draw|
                value += draw.result[position]
            end
            if history_draw
                history_draw.value = value
            else
                history_draw = HistoryDraw.new(position: position, value: value)
            end
            history_draw.save
        end
    end
    
end