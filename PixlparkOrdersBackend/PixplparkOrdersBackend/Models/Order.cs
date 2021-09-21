using System;

namespace PixlparkOrdersBackend.Models
{
    public class Order
    {
        public string Id { get; set; }
        public int PhotolabId { get; set; }
        public string CustomId { get; set; }
        public string SourceOrderId { get; set; }
        public string ManagerId { get; set; }
        public string AssignedToId { get; set; }
        public string Title { get; set; }
        public string TrackingUrl { get; set; }
        public string TrackingNumber { get; set; }
        public string Status { get; set; }
        public string RenderStatus { get; set; }
        public string PaymentStatus { get; set; }
        public DeliveryAddress DeliveryAddress { get; set; }
        public Shipping Shipping { get; set; }
        public int CommentsCount { get; set; }
        public string DownloadLink { get; set; }
        public string PreviewImageUrl { get; set; }
        public double Price { get; set; }
        public double DiscountPrice { get; set; }
        public double DeliveryPrice { get; set; }
        public double TotalPrice { get; set; }
        public double PaidPrice { get; set; }
        public int UserId { get; set; }
        public string UserCompanyAccountId { get; set; }
        public string DiscountTitle { get; set; }
        public string DateCreated { get; set; }
        public string DateModified { get; set; }
        public string DatePaid { get; set; }
        public string DateReady { get; set; }
        public string LastDownloadedPaymentDocument { get; set; }
        public string PaymentSystemUniqueId { get; set; }
        public string GoogleClientId { get; set; }
        public string ContractorOrders { get; set; }
    }
}
