using System.Collections.Generic;

namespace Dec13
{
  public class Bank
  {
    public void DebitAccount()
    {
      List<string> user = new List<string>{Homer, Marge, Bart, Lisa};
      List<int> balance = new List<int>{200, 5000, 0, 1200};
      balance.IndexOf(user.IndexOf(Homer)) += amount;

    }
    public void CreditAccount()
    {
      List<string> user = new List<string>{Homer, Marge, Bart, Lisa};
      List<int> balance = new List<int>{200, 5000, 0, 1200};
      balance.IndexOf(user.IndexOf(Homer)) -= amount;
    }
  }
}

