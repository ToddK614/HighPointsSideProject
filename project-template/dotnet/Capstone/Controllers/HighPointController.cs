using Capstone.DAO;
using Capstone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Controllers
{
    [Route("home")]
    [ApiController]
    public class HighPointController : ControllerBase
    {
        private IHighPointDAO highPointDAO;

        public HighPointController(IHighPointDAO highPointDAO)
        {
            this.highPointDAO = highPointDAO;
        }

        [HttpGet("highpointlist")]
        public ActionResult GetAllHighPoints()
        {
            List<HighPoint> highPoints = highPointDAO.HighPointsView();

            return Ok(highPoints);
                
        }

        [HttpPost("highpointlist")]
        public ActionResult AddHighPoint(HighPoint newHighPoint)
        {
            HighPoint result = highPointDAO.AddHighPoint(newHighPoint);

            return Ok(newHighPoint);
        }

    }
}
