using System.Collections.Generic;
using System.Linq;

namespace CollectionWorld.Models
{
  public class DictionaryModel
  {
    public void DictionaryFamily()
    {
      Dictionary<int, string> da;
      Dictionary<int, string> db = new Dictionary<int, string>();
      Dictionary<int, string> dc = new Dictionary<int, string>(){{1, "fred"},{2, "dori"}};

      //read
      da = dc;
      var x = da[1];
      var w = da.ContainsKey(1); //boolean to know if key exists
      var y = da.ContainsValue("dori"); //boolean to know if value exists
      var z = da.ElementAt(1); //give me the value from key '1'
      var a = da.Single(s => s.Value == "SP").Key; //boolean if only one value is "SP"

      // write
      da[10] = "SP"; //nothing was created between 2 and 10. Modifies the key if it already exists.
      if (!da.ContainsKey(5))
      {
        da.Add(5, "JP"); //this line alone brings an error if 5 already exists ??
      }

      // update
      da.Remove(1);
      da.Remove(da.Single(s => s.Value == "fred").Key)

    }
  }
}
