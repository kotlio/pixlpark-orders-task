using System;
using System.Collections.Generic;
using System.Net.Http;
using Newtonsoft.Json;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace PixlparkOrdersBackend.Models
{
    public class PixlparkApi
    {
        private string AccessToken { get; set; }
        private string RefreshToken { get; set; }
        public List<Order> Orders { get; set; }

        public async Task GetOrders(string queryParams = "")
        {
            Orders = new List<Order>();
            if (AccessToken == null)
                await GetAccessToken();
            await GetOrdersFromApi(queryParams);
        }

        private async Task GetOrdersFromApi(string queryParams)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("http://api.pixlpark.com");

            var url = "orders?oauth_token=" + AccessToken + queryParams;
            HttpResponseMessage response = await client.GetAsync(url);
            if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized) // 401 error
            {
                await GetNewAccessToken();
                response = await client.GetAsync(url);
            }
            var responseBody = await response.Content.ReadAsStringAsync();
            var ordersResponse = JsonConvert.DeserializeObject<OrdersResponse>(responseBody);
            for (int i = 0; i < ordersResponse.Result.Length; i++)
            {
                Orders.Add(ordersResponse.Result[i]);
            }
        }

        private async Task GetAccessToken()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("http://api.pixlpark.com");
            var publicKey = "38cd79b5f2b2486d86f562e3c43034f8";

            var url = "oauth/requesttoken";
            HttpResponseMessage response = await client.GetAsync(url);
            var responseBody = await response.Content.ReadAsStringAsync();
            RequestTokenResponse requestTokenResponse = JsonConvert.DeserializeObject<RequestTokenResponse>(responseBody);
            var requestToken = requestTokenResponse.RequestToken.ToString();

            var password = GetHashPassword(requestToken);
            url = "oauth/accesstoken?oauth_token=" + requestToken + "&grant_type=api&username="
                + publicKey + "&password=" + password;
            response = await client.GetAsync(url);
            responseBody = await response.Content.ReadAsStringAsync();
            AccessTokenResponse accessTokenResponse = JsonConvert.DeserializeObject<AccessTokenResponse>(responseBody);
            AccessToken = accessTokenResponse.AccessToken.ToString();
            RefreshToken = accessTokenResponse.RefreshToken.ToString();
        }

        private async Task GetNewAccessToken()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("http://api.pixlpark.com");

            var url = "oauth/refreshtoken?refreshToken=" + RefreshToken;
            HttpResponseMessage response = await client.GetAsync(url);
            var responseBody = await response.Content.ReadAsStringAsync();
            AccessTokenResponse accessTokenResponse = JsonConvert.DeserializeObject<AccessTokenResponse>(responseBody);
            AccessToken = accessTokenResponse.AccessToken.ToString();
            RefreshToken = accessTokenResponse.RefreshToken.ToString();
        }

        private string GetHashPassword(string requestToken)
        {
            var privateKey = "8e49ff607b1f46e1a5e8f6ad5d312a80";

            SHA1Managed sha1 = new SHA1Managed();
            var hash = sha1.ComputeHash(Encoding.UTF8.GetBytes(requestToken + privateKey));
            var password = new StringBuilder(hash.Length * 2);

            foreach (byte b in hash)
            {
                password.Append(b.ToString("x2"));
            }

            return password.ToString();
        }
    }
}
