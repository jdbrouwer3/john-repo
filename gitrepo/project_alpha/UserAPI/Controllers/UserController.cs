using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using UserAPI.Models;
using Newtonsoft.Json.Linq;

namespace UserAPI.Controllers
{
    [EnableCors()]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
      private static List<User> Users = new List<User>()
      {
        new User(){username = "Fred", password = "hello"},
        new User(){username = "John", password = "john"},
        new User(){username = "KaceyMusgravesFan", password = "tomato"},
        new User(){username = "JohnnyBGoode", password = "goode"},
        new User(){username = "BigBadJohn", password = "bad"}
      };


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Users;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
          try
          {
            return Users[id];
          }
          catch (ArgumentOutOfRangeException aoore)
          {
            return NotFound(aoore.Message);
          }
        }

        // POST api/values
        [HttpPost]
        public ActionResult<IEnumerable<User>> Post([FromBody] User value)
        {
          Users.Add(value);
          return Users;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

