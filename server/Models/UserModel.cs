using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
  public class UserModel
  {
    /*
      User: 
        {
          Id: id
          Name: string
          MyCharacters: [Character Id's]
        }
    */
    public string Id { get; set; }
    public string Name { get; set; }
    public List<string> MyCharacters { get; set; }
  }
}
