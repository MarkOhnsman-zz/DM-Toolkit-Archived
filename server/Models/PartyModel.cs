using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
  public class PartyItem
  {
    /*
      Party: 
        {
          Id: id
          Name: string
          Characters: [Character Id's]
        }
    */
    public string Id { get; set; }
    public string Name { get; set; }
    public List<string> Characters { get; set; }
  }
}
