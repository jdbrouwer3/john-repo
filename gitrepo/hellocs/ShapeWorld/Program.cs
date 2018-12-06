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
          (new Program()).PlayWithShape(); //same as previous 2 lines, but in shorter syntax
          //Program.PlayWithShape(); //with static applied
          //PlayWithShape(); //with static applied
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

          System.Console.WriteLine(s1.SideA); //getter
          System.Console.WriteLine(s2.GetSides());
          System.Console.WriteLine(s3.GetSides());
          System.Console.WriteLine(rectangle.GetSides());
        }
    }
}
