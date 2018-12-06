//calculator.js

var omniCalc = ( function () {
  function add(m, n) {
    var sum = m + n;
    return sum;
    //return (m + n); //unreachable because the first return tells the function to not run what's after it.
  }

  function sub(m, n) {
    return (m - n);
  }

  function mul(m, n) {
    return m * n;
  }

  function div(m, n) {
    if (n != 0) {
      return m / n;
    }
  }
  return {
    adding: add,
    diving: div,
    subing: sub,
    muling: mul
  }
})();

////////////////////////////////////////////////////////////////////////////////////

var fredCalc = ( function () {
  function add(m, n) {
    var sum = m + n;
    return sum;
    //return (m + n); //unreachable because the first return tells the function to not run what's after it.
  }

  function sub(m, n) {
    return (m - n);
  }

  function mul(m, n) {
    return m * n;
  }

  function div(m, n) {
    if (n != 0) {
      return m / n;
    }
  }

  var result;

  return {
    result2: function () {
      return result;     // scope of result is iify. Outside world did not know about result; but, it manipulated result.
    },
    add2: function(m, n) {
      result2 = add(result, add(m, n));
      return this; //the instance of the object. We want the object itself.
    },
    div2: function(m) {
      result2 = div(result2, m);
      return this;
    },
    sub2: function(m) {
      result2 = sub(result2, m);

      return this;
    },
    mul2: function(m) {
      result2 = mul(result2, m);

      return this;
    }
  }
})();
//////////////////////////////////////////////////////////////////////////////////////////////////////

// function Calculator() {
//   var obj1 = init();

//   this.add = obj1.adding; //adding stuff to the object
//   this.sub = obj1.subing;
//   this.mul = obj1.muling;
//   this.div = obj1.diving;
// }

// var garyCalc = new Calculator();

//add   //calling the function
//add() //invoking the function

a = 100
b = 50
c = 100
// ans = garyCalc.add(a, b);
// ans = garyCalc.mul(ans, a);
// ans = garyCalc.div(ans, b);
// ans = garyCalc.sub(ans, c);

// result = garyCalc.sub(garyCalc.div(garyCalc.mul(garyCalc.add(a, b), a), b), c);
// console.log('garyCalc: ' + result)

//console.log('sum: ' + garyCalc.add(1, 1));
//console.log('sub: ' + garyCalc.sub(5, 2));
// console.log(ans)
//console.log(result)

console.log(omniCalc.subing(omniCalc.diving(omniCalc.muling(omniCalc.adding(a, b), a), b), c) );

//nested - functional programming. Better. Doesn't keep state.
console.log(omniCalc.adding(a, b).muling(a).div(b).sub(c));

//Chained - object-oriented programming
fredCalc.add2(a, b).mul2(a).div2(b).sub2(c).result2;
console.log(fredCalc.add2(a, b).mul2(a).div2(b).sub2(c).result2())

