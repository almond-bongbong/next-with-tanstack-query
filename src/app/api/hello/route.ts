import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('GET /api/hello');
  return Response.json({ hello: 'world', number: Math.random() });
}
