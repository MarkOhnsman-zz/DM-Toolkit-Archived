using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
  public class CharacterItem
  {
    /*
      Character: 
        {
          Id: id
          CreatorId: id
          isNPC: bool
          Data: {}
        }
    */
    public string Id { get; set; }
    public string CreatorId { get; set; }
    public bool IsNPC { get; set; }
    public object Data { get; set; }
  }
}