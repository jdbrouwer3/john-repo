namespace ShapeWorld.Interfaces
{
  public interface IShape
  {
    int Edges { get; }
    double Area();
    double Perimeter();
  }
}
