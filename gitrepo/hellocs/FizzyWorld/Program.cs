using System;
using FizzyWorld;

namespace FizzyWorld
{
    public class Program
    {
        private static void Main(string[] args)
        {
          var Start = 0;
          var Fizz = 0;
          var Buzz = 0;
          var FizzBuzz = 0;

          PlayWithFizzBuzz();
        }

        private void PlayWithFizzBuzz(Number)
        {
          if (FizzBuzz == 100) {return}
          if (Number % 5 == 0 && Number % 3 == 0) {
            FizzBuzz += 1;
          } else if (Number % 5 == 0) {
            Buzz += 1;
          } else if (Number % 3 == 0) {
            Fizz += 1;
          } else {

          }
        }
