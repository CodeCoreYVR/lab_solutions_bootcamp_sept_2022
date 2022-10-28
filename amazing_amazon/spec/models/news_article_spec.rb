require 'rails_helper'

RSpec.describe NewsArticle, type: :model do
  describe "validates" do
    describe "title" do
      it "should have a title" do
        na = FactoryBot.build(:news_article,title:nil)
        na.valid?
        expect(na.errors.messages).to(have_key(:title)) 
      end
      it "title should be unique" do
        persisted_na = FactoryBot.create(:news_article, title: "AAA", description:"A")
        na = FactoryBot.build(:news_article, title: persisted_na.title)
        na.valid?
        expect(na.errors.messages).to(have_key(:title)) 
      end

    end
    describe "description" do
      it "should have description" do
        na = FactoryBot.build(:news_article, description:nil)
        na.valid?
        expect(na.errors.messages).to(have_key(:description)) 
      end

    end

    describe "published_at" do
      it "published at should later than created at" do
        na = FactoryBot.build(:news_article, created_at:Time.now, published_at: Time.now - 100)
        na.valid?
        expect(na.errors.messages).to(have_key(:published_at)) 
      end

    end

    describe "titleized" do
      it "should save with a title in titlecase" do
        na = FactoryBot.create(:news_article, title:"this is a title")
        expect(na.title).to(eq "This Is A Title")
      end

    end


    describe "publish" do
      it "should use current date as published_at when calling publish method" do
        na = FactoryBot.build(:news_article, title:"something",description:"description")

        na.set_publish_time

        expect(na.published_at.to_s).to(eq Time.now.utc.to_s) 

      end

    end

  end
end
