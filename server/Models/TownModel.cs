using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
  public class TownItem
  {
    /*
    Town: 
      {
        Id: id
        CreatorId: id
        NPC's: [Character Id's]
      }
    */
    public string Id { get; set; }
    public string CreatorId { get; set; }
    public List<string> NPCs { get; set; }

  }
}
