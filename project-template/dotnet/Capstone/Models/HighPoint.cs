using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class HighPoint
    {
        public int HpId { get; set; }
        public string StateAbbreviation { get; set; }
        public string StateName { get; set; }
        public string HpName { get; set; }
        public int HpElevationFeet { get; set; }
        public int HpRank {get; set;}
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    
    }
}
