using System;
using ShapeWorld.Models;

namespace ShapeWorld
{
    public class Program //Program is not real until an object within is created.
    {
        private static void Main(string[] args)
        {
          // var p = new Program(); //makes it so there can only be 1 PlayWithShape
          // p.PlayWithShape();
          // (new Program()).PlayWithShape(); //same as previous 2 lines, but in shorter syntax
          //Program.PlayWithShape(); //with static applied
          //PlayWithShape(); //with static applied

          // PlayWithShapeRectangle();
          PlayWithInterface();
        }

        private void PlayWithShape()
        { //different ways to declare a variable:
          Shape s1 = new Shape(1); //using strict defined type, eager loaded // class scope must have modifier
          var s2 = new Shape(2); //type inference - s2 does the same as s1 because it infers its value from s1. Less strict, lazy loaded
          dynamic s3 = new Shape(3); //'new' here is not an extended modifier.
          var rectangle = new Shape(4);

          // s1.sides = 10;
          // s2.sides = 20;
          // s3.sides = 30;
          // rectangle.sides = 10; //setter

          // s1.SetSides(10);
          // s2.SetSides(20);
          // s3.SetSides(30);
          // rectangle.SetSides(40);

          s1.SideA = 10;

          System.Console.WriteLine(s1.Edges); //getter
          System.Console.WriteLine(s2.Edges());
          System.Console.WriteLine(s3.AnotherEdges());
          System.Console.WriteLine(rectangle.YetAnotherEdges());
        }

      private static void PlayWithShapeRectangle()
      {
        var s1 = new Shape(4);
        var r1 = new Rectangle();

        Shape s2 = new Rectangle(); // s2 is a Rectangle. Rectangle is a Shape. But s2 is not a Shape.
        // Rectangle r2 = new Shape(4); // wont work because not all Shapes are Rectangles.

        System.Console.WriteLine(s1.Edges);
        // System.Console.WriteLine(r1.Edges);
        // System.Console.WriteLine(s2.Edges);
        System.Console.WriteLine(r1.Area());
        System.Console.WriteLine(r1.Area2());

      }
      private static void PlayWithShape2()
      {
        Shape s1;
        Shape s2 = new Rectangle();
        Shape s3 = new Square();

        s1 = s2;
        s2 = s3;

        System.Console.WriteLine(s1.GetType());
        System.Console.WriteLine(s2.GetType());
        System.Console.WriteLine(s3.GetType());
      }
    }
}

private static void PlayWithInterface()
{
  var r = Rectangle();
  var c = Circle();

  System.Console.WriteLine(r.Perimeter());
  System.Console.WriteLine(c.Perimeter());
}

private static void PlayWithExcpetion()
{
  var cu = new Cube();

  try
  {
    throw new Exception("we did it.");
    System.Console.WriteLine(cu.Volume());
  }
  catch(NotImplementedException nie)
  {
    System.Console.WriteLine("volume cannot be computed at this time... we busy!!!" + nie.Message);
  }
  catch(Exception e)
  {
    throw e;
    throw;
    System.Console.WriteLine(string.Format("{1} {0}", "system down. please try again at another time. ", e.Message);
  }
  finally
  {
    GC.Collect(); //Garbage collector
    System.Console.WriteLine("finally... as always.");
  }
}


