# FoodShare Backend Notes

### Purpose
This backend simulates a REST API using **JSON Server**.  
It provides mock data for `users` and `listings` so our frontend can fetch and display content.

---

### Key Scripts
| Command | Action |
|----------|---------|
| `npm run seed` | Generates fresh sample data in `db.json` |
| `npm start` | Starts JSON Server on port `8001` |

---

### Endpoints
| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/users` | Get all users |
| `GET` | `/listings` | Get all food listings |
| `POST` | `/listings` | Add a new food listing |
| `PATCH` | `/listings/:id` | Update a food listing |
| `DELETE` | `/listings/:id` | Delete a listing |

---

### Data Structure
- **Users:** represent food donors or registered users.
- **Listings:** represent the actual food available for sharing or pickup.

Example:
```json
{
  "id": 1,
  "food": "Pilau",
  "quantity": "5 units",
  "location": "Talisman Restaurant — Karen, Nairobi",
  "status": "available"
}
