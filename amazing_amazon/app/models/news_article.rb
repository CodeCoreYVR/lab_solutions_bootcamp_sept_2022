class NewsArticle < ApplicationRecord
    validates :title, presence: true, uniqueness: true
    validates :description, presence: true
    validate :published_at_after_created_at
    before_save :titlize_title
    belongs_to :user

    def published_at_after_created_at
        if published_at && created_at && (published_at < created_at)
            errors.add(:published_at, "must be after created_at")
        end
    end

    def titlize_title
        self.title = self.title.titlecase
    end

    def set_publish_time
        self.published_at = Time.now
    end
end
