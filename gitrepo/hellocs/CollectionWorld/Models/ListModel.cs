using System.Collections.Generic;
using System.Linq;

namespace CollectionWorld.Models
{
  public class ListModel
  {
    public void ListFamily()
    {
      // definition:
      List<int> la;
      List<int> lb = new List<int>{1,2,3,4};
      List<int> lc = new List<int>();

      List<int[]> ld = new List<int[]>(); //will only contain arrays and nothing else
      List<List<int[]>> le = new List<List<int[]>>(); //list that contains a list that contains an array. WTF.. Never do this!

      // read
      var x = lb[1]; //this won't point to 2 as expected because lists are dynamic
      var y = lb[lb.IndexOf(2)]; //bc lists are dynamic, this will always give the right index of the value.
      var z = lb.ElementAt(1);
      var a = lb.FindIndex(0, 2, f => f == 2); //start looking in index 0, count 2, to find a '2'


      //write info into a list
      la = lc;
      la[10] = 100;
      lb[10] = 100;
      lb.Add(100); //will go in the first open index
      lb.AddRange(new int[]{100,200,300,400});
      lb.AddRange(lb.ToArray());
      lb.AddRange(lb);

      //update
      lb.Remove(100); //going to return a boolean. Removes the value
      lb.RemoveAll(r => r == 0); //remove element such that element equals 0
      lb[10] = 200; // true modify.
      lb.RemoveAt(10); //removing the node at index 10. Causes a shift. Deletes position 10 like it never existed.
      lb.RemoveAt(lb.IndexOf(200)); //how I'll likely do all this. Removes a node of value 200. 

    }
  }
}

