# SvelteKit with Better Auth Starter

A modern authentication-ready SvelteKit project using Better Auth, Drizzle ORM, and Tailwind CSS.

## Technology Stack

- **Frontend**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5 with runes)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with typography and forms plugins
- **Authentication**: [Better Auth](https://github.com/davidgatti/better-auth) with social providers
- **Database**: PostgreSQL with [Drizzle ORM](https://orm.drizzle.team/)
- **Testing**: [Vitest](https://vitest.dev/) for unit tests, [Playwright](https://playwright.dev/) for e2e testing
- **Development Tools**: TypeScript, ESLint, Prettier, [Bun](https://bun.sh/) runtime

## Prerequisites

- [Bun](https://bun.sh/) 1.x or newer (or Node.js 18.x+)
- Docker (for local PostgreSQL)
- GitHub and/or Google OAuth credentials

## Setup

### Installation

```bash
# Clone the repository
git clone https://github.com/Jpisnice/SvelteKit-BetterAuth-Starter.git
cd SvelteKit-BetterAuth-Starter

# Install dependencies using Bun
bun install

# Or using npm
npm install
```

### Environment Variables

Create a `.env` file based on the provided `.env.example`:

```bash
# Copy example environment variables
cp .env.example .env
```

Update the following values in your `.env` file:

- `BETTER_AUTH_SECRET`: Generate a strong random string
- `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET`: From GitHub OAuth Apps
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET`: From Google Cloud Console

### Database Setup

```bash
# Start the PostgreSQL database using Docker
bun db:start  # or: npm run db:start

# Push the schema to the database
bun db:push  # or: npm run db:push
```

## Development Workflow

```bash
# Start the development server with Bun
bun dev

# Or start with the browser opening automatically
bun dev -- --open

# Using npm instead
# npm run dev
# npm run dev -- --open
```

### Database Management

```bash
# Start the database
bun db:start  # or: npm run db:start

# View database with Drizzle Studio
bun db:studio  # or: npm run db:studio

# Apply migrations
bun db:migrate  # or: npm run db:migrate
```

## Testing

```bash
# Run unit tests
bun test:unit  # or: npm run test:unit

# Run e2e tests
bun test:e2e  # or: npm run test:e2e

# Run all tests
bun test  # or: npm test
```

## Building for Production

```bash
# Build for production
bun run build  # or: npm run build

# Preview the production build locally
bun preview  # or: npm run preview
```

## Authentication

This project uses Better Auth with GitHub and Google OAuth providers. Users can sign in via:

- `/login` - Sign in page with social providers
- The session is accessible throughout the application

### OAuth Provider Setup

#### GitHub OAuth

1. Go to GitHub → Settings → Developer Settings → OAuth Apps → New OAuth App
2. Fill in the application details:
   - Application name: Your app name
   - Homepage URL: `http://localhost:5173` (for development)
   - Authorization callback URL: `http://localhost:5173/api/auth/callback/github`
3. Click "Register Application"
4. Copy the Client ID and generate a new Client Secret
5. Add these to your `.env` file as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`

#### Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" → "Credentials"
4. Click "Create Credentials" → "OAuth client ID"
5. Configure the consent screen if prompted
6. For application type, select "Web application"
7. Add authorized redirect URIs:
   - `http://localhost:5173/api/auth/callback/google` (for development)
8. Click "Create"
9. Copy the Client ID and Client Secret
10. Add these to your `.env` file as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`

For production deployment, make sure to update the callback URLs to your production domain.

## Additional Tips

### Tailwind CSS

The project is configured with Tailwind CSS and includes the following plugins:

- `@tailwindcss/forms` - Better form styling
- `@tailwindcss/typography` - Rich text content styling

### Drizzle ORM

The database schema is defined in `src/lib/server/db/schema.ts`. After making changes to the schema, run:

```bash
bun db:push  # or: npm run db:push
```

### Environment Variables

- Make sure to keep your `.env` file secure and not commit it to version control
- For production, set these variables in your hosting platform's environment settings

### Bun Performance Benefits

- Faster installation times compared to npm
- Improved development server startup speed
- Enhanced testing performance

### Troubleshooting

- If authentication isn't working, verify your OAuth credentials and callback URLs
- For database issues, check Docker is running and the connection string is correct
- If Bun has compatibility issues with any packages, try using Node.js/npm as a fallback

## Deployment

To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
