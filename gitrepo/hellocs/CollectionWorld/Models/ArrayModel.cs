namespace CollectionWorld.Models
{
  public class ArrayModel
  {
    public void ArrayFamily()
    {
      //1D
      int[] arr1;
      int[] arr2 = {0,1,2,3,4};
      int[] arr3 = new int[5];

      //2D
      int[,] arr4;
      int[,] arr5 = {{0,1},{2,3}};
      int[,] arr6 = new int[2,2];

      //3D
      // int[,,] arr7;
      // int[,,] arr8 = {{{0,1,2,},{3,4,5},{6,7,8}},{{},{},{}},{{},{},{24,25,26}}};
      // int[,,] arr9 = new int[3,3,3];

      //M-D
      //int[,,,,...] arrx = new int[,,,,...]; //the number of commas - 1 is the demension of the array

      //jagged array: an array of arrays
      int[][] arr10;
      int[][] arr11 = {new int[1], new int[2,2], new int[3,3,3]};
      int[][] arr12 = new int[new int{1}, new int{{0,1},{2,3}}];
    }

    public void UseArrayFamily()
    {
      var arr1 = new int[3,4]{{1,2,3,4},{5,6,7,11},{8,9,11,11}};

      arr1[2,1] = 0;

      for (int x = 0; x < arr1.GetLength(0); x++)
      {
        for (int y = 0; x < arr1.GetLength(1); y++)
        {
          System.Console.WriteLine(arr1[x,y]);
        }
      }

      // System.Console.WriteLine(arr1);
    }
  }
}


