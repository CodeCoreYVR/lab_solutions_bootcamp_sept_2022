require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module AmazingAmazon
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.active_job.queue_adapter = :delayed_job
    config.autoload_paths  << Rails.root.join("app", "jobs")
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '127.0.0.1:5500'
        resource '/api/v1/*',
        headers: :any, methods: [:get, :post, :delete, :put, :patch, :options, :head]
      end
    end
  end
end
