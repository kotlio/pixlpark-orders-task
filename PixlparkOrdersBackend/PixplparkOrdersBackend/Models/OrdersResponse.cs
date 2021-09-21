namespace PixlparkOrdersBackend.Models
{
    public class OrdersResponse
    {
        public string ApiVersion { get; set; }
        public Order[] Result { get; set; }
    }
}
