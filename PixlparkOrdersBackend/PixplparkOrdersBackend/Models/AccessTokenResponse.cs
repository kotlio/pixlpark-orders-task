﻿namespace PixlparkOrdersBackend.Models
{
    public class AccessTokenResponse
    {
        public string AccessToken { get; set; }
        public string Expires { get; set; }
        public string RefreshToken { get; set; }
        public string Success { get; set; }
    }
}
