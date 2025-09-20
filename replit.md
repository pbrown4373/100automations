# Overview

This is a full-stack web application built with React and Express.js that appears to be focused on business automation solutions. The application uses a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components for the frontend, and Express.js with Drizzle ORM for the backend. The project structure suggests it's designed to showcase or manage various automation categories for businesses, including lead generation, sales operations, customer success, and operational fulfillment.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Single-page application built with React 18 using TypeScript
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Express.js Server**: RESTful API server with TypeScript support
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development
- **Development Setup**: Hot reload enabled with tsx for TypeScript execution
- **Production Build**: esbuild for server bundling with ESM format

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema synchronization
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity

## Authentication & Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication
- **API Security**: Credential-based authentication with session cookies

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit and query builder
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: External font loading (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for server builds
- **TypeScript**: Static type checking across the entire application
- **Replit Plugins**: Development environment integration for Replit platform

## Utility Libraries
- **TanStack Query**: Data fetching and caching library
- **React Hook Form**: Form handling with validation
- **date-fns**: Date manipulation utilities
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **zod**: Runtime type validation and schema parsing