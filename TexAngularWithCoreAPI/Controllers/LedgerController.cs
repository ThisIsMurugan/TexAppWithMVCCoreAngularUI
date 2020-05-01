using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TexAngularWithCoreAPI.Models;

namespace TexAngularWithCoreAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LedgerController : ControllerBase
    {
        static List<Ledger> ledgers = new List<Ledger>();
        // GET: api/Ledger
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Ledger/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Ledger
        [HttpPost]
        public List<Ledger> Post([FromBody] Ledger ledger)
        {
            ledgers.Add(ledger);
            return ledgers;
        }

        // PUT: api/Ledger/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
