// client/src/app/api/graphql/route.ts
import { handler } from '@/lib/graphql/server';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure it's dynamic

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}

// Optional: For GraphQL playground
export async function OPTIONS(request: NextRequest) {
  return handler(request);
}