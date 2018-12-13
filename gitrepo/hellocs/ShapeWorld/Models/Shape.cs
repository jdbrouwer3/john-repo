using ShapeWorld.Interfaces;
namespace ShapeWorld.Models
{
  //type:
  public abstract class Shape : IShape // made abstract because Shape is unreal - it is only a concept.
  {
    //field: a variable at the class scope
    protected int edges = 0;

    //properties
    public int Edges { get ; private set; } // can be set only by other class members
    public int AnotherEdges { get; } //can be set only by the constructor


  public int YetAnotherEdges
  {
    get
    {
      return _edges;
    }

    set
    {
      _edges = value;
    }
  }

    //constructor
    protected Shape()
    {

    }
    internal Shape(int edges) //does not have a full signature.
    {
      Edges = edges;
      // AnotherEdges = edges;
      // YetAnotherEdges = edges;
    }

    public virtual double Area() // by making it virtual, it gives others possibility to override this
    {
      return 1;
    }

    public double Area2()
    {
      return 1;
    }

    public abstract double Area3(); //abstract can have no content. There is no default implementation.

    public virtual double Perimeter()
    {
      return 1;
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
