namespace PixlparkOrdersBackend.Models
{
    public class OrdersCount
    {
        public string ApiVersion { get; set; }
        public OrdersCountResult[] Result { get; set; }
        public string ResponseCode { get; set; }
    }

    public class OrdersCountResult
    {
        public int count { get; set; }
    }
}
