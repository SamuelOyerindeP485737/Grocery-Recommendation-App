using backend.Models;
namespace backend.Data;

using Microsoft.EntityFrameworkCore;

public class GMSContext : DbContext
{
    public DbSet<Challenge> Challenge { get; set; }
    
    public DbSet<Meal> Meal { get; set; }
    
    public GMSContext(DbContextOptions<GMSContext> options) : base(options)
    {
        
    }
}