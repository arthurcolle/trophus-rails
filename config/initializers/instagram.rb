require "instagram"

Instagram.configure do |config|
	config.client_id = "da3c354840064d44b6c81561424101b4"
    config.access_token = "0eda5e2fd52d454e987bd38441b56c6b"
end

Instagram.CALLBACK_URL = "http://127.0.0.1:3000/users/auth/instagram/callbacks"
Instagram.SCOPE = "likes+comments+relationships"
