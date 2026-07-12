namespace DefaultNamespace;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using backend.Data;
using backend.Models;

public class MealController : ControllerBase
{
    private readonly GMSContext _context;

    MealController(GMSContext context)
    {
        _context = context
    }
    
    public IActionResult GetAll()
    {
        
    }

    public IActionResult GetOne()
    {
        
    }

    public IActionResult Create()
    {
        
    }

    public IActionResult Update()
    {
        
    }

    public IActionResult Delete()
    {
        
    }
}