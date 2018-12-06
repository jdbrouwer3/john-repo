using System;

namespace ShapeWorld
{
    public class Startup
    {
        private static void DotNet(string[] args)
        {
          // option 1
          var p = new Program();

          p.Main();
          
          // // option 2
          // Program.Main()
        }
    }
}
