namespace BankWorld.Models
{
  public class User
  {
    public string Name { get; set; }
    public Account Account { get; set; } //type and name are Account respectively

    public void Credit(decimal money)
    {
      Account.Value += money;
    }

    public void Debit(decimal money)
    {
      Account.Value -= money;
    }
  }
}
