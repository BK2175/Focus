﻿using FocusBackend.Data;
using FocusBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FocusBackend.Repositories
{
    public class ActivityRepository : Repository<Activity>, IRepository<Activity>
    {
        private FocusContext db;

        public ActivityRepository(FocusContext context) : base(context)
        {

        }
        public IEnumerable<Activity> GetByCategoryID(int categoryID)
        {
            var activities = db.Activities.Where(p => p.CategoryID == categoryID);

            return activities;
        }
    }
}