using ShapeWorld.Interfaces;

namespace ShapeWorld.Models
{
  public class Cube : Square, IShape3d //Polymorphisism: Cube can be a square and a 3D cube
  {
    public double Volume()
    {
      throw new System.NotImplementedException();
    }
  }
}

