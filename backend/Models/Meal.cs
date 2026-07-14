namespace backend.Models;

public class MealCard
{
    public int Id { get; set; }
    public string title { get; set; }
    public string image { get; set; }
    public int save_amount { get; set; }
    
    public string description { get; set; }
    public List<string> ingredients { get; set; } = [];
    public List<string> stores { get; set; } = [];
}