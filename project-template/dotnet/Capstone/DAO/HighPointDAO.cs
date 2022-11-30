using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Capstone.Models;

namespace Capstone.DAO
{
    public class HighPointDAO : IHighPointDAO
    {
        private string connectionString;

        public HighPointDAO(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public List<HighPoint> HighPointsView()
        {
            List<HighPoint> highPoints = new List<HighPoint>();

            string highPointsSql = "SELECT high_point_id, state_abbreviation, state_name, hp_name, hp_elevation_ft, hp_rank, hp_latitude, hp_longitude FROM state_high_points";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                SqlCommand cmd = new SqlCommand(highPointsSql, connection);

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    HighPoint stateHighPoint = new HighPoint();

                    int hpId = Convert.ToInt32(reader["high_point_id"]);
                    string stateAbbreviation = Convert.ToString(reader["state_abbreviation"]);
                    string stateName = Convert.ToString(reader["state_name"]);
                    string stateHp = Convert.ToString(reader["hp_name"]);
                    int hpElevationFeet = Convert.ToInt32(reader["hp_elevation_ft"]);
                    int hpRank = Convert.ToInt32(reader["hp_rank"]);
                    string hpLatitude = Convert.ToString(reader["hp_latitude"]);
                    string hpLongitude = Convert.ToString(reader["hp_longitude"]);

                    stateHighPoint.HpId = hpId;
                    stateHighPoint.StateAbbreviation = stateAbbreviation;
                    stateHighPoint.StateName = stateName;
                    stateHighPoint.HpName = stateHp;
                    stateHighPoint.HpElevationFeet = hpElevationFeet;
                    stateHighPoint.HpRank = hpRank;
                    stateHighPoint.Latitude = hpLatitude;
                    stateHighPoint.Longitude = hpLongitude;

                    highPoints.Add(stateHighPoint);
                }
                
            }


            return highPoints;
        }

        public HighPoint AddHighPoint(HighPoint newHighPoint)
        {
            string addSql = "INSERT INTO state_high_points(state_abbreviation, state_name, hp_name, hp_elevation_ft, hp_rank, hp_latitude, hp_longitude)" +
                "VALUES(@state_abbreviation, @state_name, @hp_name, @hp_elevation_ft, @hp_rank, @hp_latitude, @hp_longitude)";


            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                SqlCommand cmd = new SqlCommand(addSql, connection);

                cmd.Parameters.AddWithValue("@state_abbreviation", newHighPoint.StateAbbreviation);
                cmd.Parameters.AddWithValue("@state_name", newHighPoint.StateName);
                cmd.Parameters.AddWithValue("@hp_name", newHighPoint.HpName);
                cmd.Parameters.AddWithValue("@hp_elevation_ft", newHighPoint.HpElevationFeet);
                cmd.Parameters.AddWithValue("@hp_rank", newHighPoint.HpRank);
                cmd.Parameters.AddWithValue("@hp_latitude", newHighPoint.Latitude);
                cmd.Parameters.AddWithValue("@hp_longitude", newHighPoint.Longitude);
                cmd.ExecuteNonQuery();
            }
            return newHighPoint;
        }
    }
}
