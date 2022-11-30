using Capstone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.DAO
{
    public interface IHighPointDAO
    {
        List<HighPoint> HighPointsView();
        HighPoint AddHighPoint(HighPoint newHighPoint);
    }
}
