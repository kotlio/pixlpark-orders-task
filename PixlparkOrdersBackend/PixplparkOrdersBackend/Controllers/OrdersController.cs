using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PixlparkOrdersBackend.Models;

namespace PixlparkOrdersBackend.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        [HttpGet]
        public async Task<List<Order>> Get()
        {
            PixlparkApi pixlparkApi = new PixlparkApi();
            await pixlparkApi.GetOrders();

            return pixlparkApi.Orders;
        }

        [HttpGet("{queryParams}")]
        public async Task<List<Order>> Get(string queryParams)
        {
            PixlparkApi pixlparkApi = new PixlparkApi();
            await pixlparkApi.GetOrders(queryParams);

            return pixlparkApi.Orders;
        }
    }
}