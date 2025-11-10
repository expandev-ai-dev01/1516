# DataFlow Backend

Backend API for DataFlow - Simple and intuitive record management system.

## Features

- RESTful API architecture
- TypeScript for type safety
- Express.js framework
- Multi-tenancy support
- Comprehensive error handling
- API versioning
- CORS configuration
- Security middleware (Helmet)
- Request compression

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MS SQL Server

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MS SQL Server

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration

4. Run development server:
   ```bash
   npm run dev
   ```

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status
- `GET /api/v1/external/health` - External API health
- `GET /api/v1/internal/health` - Internal API health

## Environment Variables

See `.env.example` for all available configuration options.

## Development Guidelines

- Follow TypeScript strict mode
- Use path aliases (@/) for imports
- Implement proper error handling
- Write comprehensive TSDoc comments
- Follow RESTful conventions
- Maintain separation of concerns

## License

ISC