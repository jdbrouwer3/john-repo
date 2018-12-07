namespace ShapeWorld.Models
{
  public class Rectangle : Shape
  {
    public Rectangle() {}
    public Rectangle(string name) {}

    // properties
    public double Length { get; set; }
    public double Width { get; set; }

    // methods
    public override double Area() //override the virtual from Shape.cs line 39
    {
      return Length * Width;
    }
    public new double Area2() //overrides without previous permission
    {
      return Area();
    }
    public override double Area3()
    {
      return Area();
    }

    public override double Perimeter()
    {
      return (2 * Length + 2 * Width);
    }
  }
}
