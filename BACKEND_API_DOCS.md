# 🚀 MeetStranger Backend API Documentation

> **RESTful API para aplicativo de chat anônimo P2P**

## 📋 Visão Geral

O backend do MeetStranger é uma API RESTful que gerencia autenticação, matching de usuários e comunicação em tempo real para conversas anônimas por tópicos.

## 🏗️ Arquitetura Recomendada

### **Stack Tecnológica**
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL + Redis
- **WebSocket**: Socket.IO
- **Auth**: JWT + bcrypt
- **Validation**: Joi ou Zod
- **Documentation**: Swagger/OpenAPI

### **Estrutura do Projeto**
```
meetstranger-backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── chat.controller.js
│   │   └── matching.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── validation.middleware.js
│   │   └── rateLimit.middleware.js
│   ├── models/
│   │   ├── User.model.js
│   │   ├── ChatRoom.model.js
│   │   └── Message.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── chat.routes.js
│   │   └── matching.routes.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── matching.service.js
│   │   └── websocket.service.js
│   ├── utils/
│   │   ├── database.js
│   │   ├── redis.js
│   │   └── logger.js
│   └── app.js
├── docs/
│   └── swagger.yaml
├── tests/
├── .env.example
├── package.json
└── README.md
```

## 🗄️ Modelo de Dados

### **Users Table**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_anonymous BOOLEAN DEFAULT true,
    last_active TIMESTAMP DEFAULT NOW(),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### **Chat Rooms Table**
```sql
CREATE TABLE chat_rooms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category VARCHAR(50) NOT NULL, -- 'movies', 'games', 'series'
    user1_id UUID REFERENCES users(id),
    user2_id UUID REFERENCES users(id),
    status VARCHAR(20) DEFAULT 'active', -- 'active', 'ended'
    created_at TIMESTAMP DEFAULT NOW(),
    ended_at TIMESTAMP NULL
);
```

### **Messages Table**
```sql
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id UUID REFERENCES chat_rooms(id),
    sender_id UUID REFERENCES users(id),
    content TEXT NOT NULL,
    message_type VARCHAR(20) DEFAULT 'text', -- 'text', 'system'
    created_at TIMESTAMP DEFAULT NOW()
);
```

### **Waiting Queue Table (Redis)**
```json
{
  "category:movies": [
    {
      "userId": "uuid",
      "socketId": "socket_id",
      "timestamp": 1234567890
    }
  ]
}
```

## 🔐 Autenticação

### **POST /api/auth/register**
```json
// Request
{
  "username": "string (3-50 chars)",
  "email": "string (valid email)",
  "password": "string (6+ chars)"
}

// Response 201
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "username": "string",
      "email": "string"
    },
    "token": "jwt_token"
  }
}
```

### **POST /api/auth/login**
```json
// Request
{
  "email": "string",
  "password": "string"
}

// Response 200
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "username": "string",
      "email": "string"
    },
    "token": "jwt_token"
  }
}
```

### **POST /api/auth/logout**
```json
// Headers: Authorization: Bearer <token>
// Response 200
{
  "success": true,
  "message": "Logout successful"
}
```

## 🎯 Matching System

### **POST /api/matching/join**
```json
// Headers: Authorization: Bearer <token>
// Request
{
  "category": "movies" | "games" | "series"
}

// Response 200 - Waiting
{
  "success": true,
  "data": {
    "status": "waiting",
    "queuePosition": 1,
    "estimatedWait": "30s"
  }
}

// Response 200 - Matched (via WebSocket)
{
  "success": true,
  "data": {
    "status": "matched",
    "roomId": "uuid",
    "partner": {
      "username": "Anônimo_123"
    }
  }
}
```

### **DELETE /api/matching/leave**
```json
// Headers: Authorization: Bearer <token>
// Response 200
{
  "success": true,
  "message": "Left queue successfully"
}
```

## 💬 Chat System

### **GET /api/chat/rooms**
```json
// Headers: Authorization: Bearer <token>
// Response 200
{
  "success": true,
  "data": {
    "rooms": [
      {
        "id": "uuid",
        "category": "movies",
        "status": "active",
        "partner": {
          "username": "Anônimo_456"
        },
        "lastMessage": {
          "content": "Olá!",
          "timestamp": "2024-01-01T10:00:00Z"
        },
        "createdAt": "2024-01-01T09:30:00Z"
      }
    ]
  }
}
```

### **GET /api/chat/rooms/:roomId/messages**
```json
// Headers: Authorization: Bearer <token>
// Query: ?page=1&limit=50
// Response 200
{
  "success": true,
  "data": {
    "messages": [
      {
        "id": "uuid",
        "content": "Olá! Como você está?",
        "isUser": false,
        "username": "Anônimo_456",
        "timestamp": "2024-01-01T10:00:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 50,
      "total": 25,
      "hasMore": false
    }
  }
}
```

### **POST /api/chat/rooms/:roomId/messages**
```json
// Headers: Authorization: Bearer <token>
// Request
{
  "content": "string (1-500 chars)"
}

// Response 201
{
  "success": true,
  "data": {
    "message": {
      "id": "uuid",
      "content": "Olá! Tudo bem?",
      "isUser": true,
      "username": "Você",
      "timestamp": "2024-01-01T10:05:00Z"
    }
  }
}
```

### **POST /api/chat/rooms/:roomId/leave**
```json
// Headers: Authorization: Bearer <token>
// Response 200
{
  "success": true,
  "message": "Left chat room successfully"
}
```

## 🔌 WebSocket Events

### **Connection**
```javascript
// Client connects with JWT token
socket.emit('authenticate', { token: 'jwt_token' });

// Server response
socket.emit('authenticated', { userId: 'uuid' });
```

### **Matching Events**
```javascript
// Join matching queue
socket.emit('join_queue', { category: 'movies' });

// Queue status updates
socket.on('queue_status', { position: 1, estimatedWait: '30s' });

// Match found
socket.on('match_found', { 
  roomId: 'uuid', 
  partner: { username: 'Anônimo_123' } 
});
```

### **Chat Events**
```javascript
// Join chat room
socket.emit('join_room', { roomId: 'uuid' });

// Send message
socket.emit('send_message', { 
  roomId: 'uuid', 
  content: 'Olá!' 
});

// Receive message
socket.on('new_message', {
  id: 'uuid',
  content: 'Oi! Tudo bem?',
  sender: { username: 'Anônimo_123' },
  timestamp: '2024-01-01T10:00:00Z'
});

// Partner left
socket.on('partner_left', { roomId: 'uuid' });

// Typing indicators
socket.emit('typing_start', { roomId: 'uuid' });
socket.emit('typing_stop', { roomId: 'uuid' });
socket.on('partner_typing', { isTyping: true });
```

## 🛡️ Middleware & Segurança

### **Rate Limiting**
```javascript
// Auth endpoints: 5 requests/minute
// Chat endpoints: 100 requests/minute
// Message sending: 10 messages/minute per room
```

### **Validation**
```javascript
// Message content: 1-500 characters
// Username: 3-50 characters, alphanumeric + underscore
// Email: Valid email format
// Password: 6+ characters
```

### **Security Headers**
```javascript
// CORS: Configured for mobile app domains
// Helmet: Security headers
// JWT: 24h expiration, refresh tokens
// Rate limiting: Per IP and per user
```

## 📊 Monitoring & Analytics

### **Health Check**
```json
// GET /api/health
{
  "status": "healthy",
  "timestamp": "2024-01-01T10:00:00Z",
  "services": {
    "database": "connected",
    "redis": "connected",
    "websocket": "active"
  },
  "stats": {
    "activeUsers": 150,
    "activeRooms": 75,
    "queueSize": {
      "movies": 5,
      "games": 3,
      "series": 2
    }
  }
}
```

### **Metrics Endpoints**
```json
// GET /api/admin/metrics (Admin only)
{
  "dailyActiveUsers": 1250,
  "totalMessages": 45000,
  "averageSessionTime": "8m 30s",
  "popularCategories": {
    "movies": 45,
    "games": 35,
    "series": 20
  }
}
```

## 🚀 Deployment

### **Environment Variables**
```bash
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/meetstranger
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=24h

# Server
PORT=3000
NODE_ENV=production

# CORS
ALLOWED_ORIGINS=http://localhost:8081,exp://192.168.1.100:8081
```

### **Docker Setup**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### **Docker Compose**
```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/meetstranger
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_DB: meetstranger
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

## 🧪 Testing

### **Test Structure**
```javascript
// Unit tests: Services and utilities
// Integration tests: API endpoints
// E2E tests: WebSocket flows
// Load tests: Concurrent users and matching

describe('Matching Service', () => {
  test('should match users in same category', async () => {
    // Test implementation
  });
});
```

## 📈 Escalabilidade

### **Horizontal Scaling**
- Load balancer (Nginx/HAProxy)
- Multiple API instances
- Redis Cluster para queue
- Database read replicas

### **Performance Optimizations**
- Connection pooling
- Message pagination
- Redis caching
- WebSocket room management
- Graceful shutdowns

---

## 🎯 Próximos Passos

1. **Setup inicial** - Configurar projeto Node.js
2. **Database** - Configurar PostgreSQL + Redis
3. **Auth system** - Implementar JWT + bcrypt
4. **Matching logic** - Sistema de fila Redis
5. **WebSocket** - Chat em tempo real
6. **Testing** - Testes unitários e integração
7. **Deploy** - Docker + CI/CD

**Backend pronto para desenvolvimento! 🚀**