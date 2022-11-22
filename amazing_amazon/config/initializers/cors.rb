Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '127.0.0.1:9999', 'localhost:9999', 'http://127.0.0.1:5501'

    resource(
      '/api/*',
      headers: :any,
      credentials: true,
      methods: [:get, :post, :patch, :put, :delete, :options]
    )
  end
end
