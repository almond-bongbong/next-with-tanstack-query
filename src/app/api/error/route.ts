import { NextRequest } from 'next/server';
import { sleep } from '@/app/utils/timer';

export async function GET(request: NextRequest) {
  console.log('GET /api/error');
  await sleep(1000);
  return Response.error();
}
