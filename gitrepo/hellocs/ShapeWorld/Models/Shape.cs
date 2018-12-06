namespace ShapeWorld.Models
{
  //type:
  public class Shape
  {
    //field: a variable at the class scope
    protected int sides = 0;
    private int myside;

    //property
    public int SideA { get ; private set; } // or completely leaving set out - meaning the constructor sets it and it absolutely is never touched again.

    public int SideB { get; } //can be set only by the constructo

    //constructor
    internal Shape(int side) //does not have a full signature.
    {
      sides = side; /////////////////////////////////check if capitalization is correct
    }

    // //method
    // public int GetSides()
    // {
    //   return sides;
    // }

    // public void SetSides(int side)
    // {
    //   if (sides == side);
    //   {
    //     sides = side;
    //   }
    // }
  }
}
