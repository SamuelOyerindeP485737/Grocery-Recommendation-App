using backend.Models;
namespace backend.Data;

using Microsoft.EntityFrameworkCore;

public class GMSContext : DbContext
{
    public DbSet<ChallengeCard> ChallengeCard { get; set; }
    
    public DbSet<MealCard> MealCard { get; set; }
    
    public GMSContext(DbContextOptions<GMSContext> options) : base(options)
    {
        
    }
}