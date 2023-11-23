using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly StoreContext _context;

        public GenericRepository(StoreContext context)
        {
            _context = context;
        }

        public async Task<T> GetByIdAsync(int id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task<IReadOnlyList<T>> ListAllAsync()
        {
           return await _context.Set<T>().ToListAsync();
        }
        public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
        {
           return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).ToListAsync();
        }
           public async Task<int> CountAsync(ISpecification<T> spec)
        {
            return await ApplySpecification(spec).CountAsync();
        }

        private IQueryable<T> ApplySpecification(ISpecification<T> spec)
        {
            return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), spec);
        }

        public async Task<bool> HalfAllPricesAsync()
        {
            var products = await _context.Products.ToListAsync();

            foreach(var prod in products) 
            {
                prod.Price = prod.Price / 2;
            }
            _context.SaveChanges();
            return true;
        }

        public async Task<bool> DoubleAllPricesAsync()
        {
            var products = await _context.Products.ToListAsync();

            foreach(var prod in products) 
            {
                prod.Price = prod.Price * 2;


                // var rand = new Random();
                // var newPrice = rand.Next(1, 100);
                // var priceRound = Math.Ceiling((double)newPrice);
                // prod.Price = (decimal)priceRound;
            }
              _context.SaveChanges();
            return true;
        }
    }
}