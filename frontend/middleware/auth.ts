import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

/**
 * Use this in API route handlers only.
 * Returns null if auth passes, or a 401 NextResponse if it fails.
 * NEVER calls NextResponse.next() — that is only valid in root middleware.ts
 */
export async function middleware(
  request: NextRequest
): Promise<NextResponse | null> {
  const token = request.cookies.get('admin-token')?.value;

  if (!token) {
    return NextResponse.json(
      { error: 'Unauthorised — no token' },
      { status: 401 }
    );
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json(
      { error: 'Unauthorised — invalid or expired token' },
      { status: 401 }
    );
  }

  return null; // ✅ auth passed — caller continues normally
}