import { readFileSync } from 'fs';
import { resolve } from 'path';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

function getDatabaseUrl(): string {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  try {
    const envContent = readFileSync(resolve(process.cwd(), '.env'), 'utf-8');
    const match = envContent.match(/^DATABASE_URL=["']?([^"'\n]+)["']?/m);
    if (match?.[1]) return match[1];
  } catch {}
  throw new Error('DATABASE_URL not found');
}

function getPrismaClient(): PrismaClient {
  const connectionString = getDatabaseUrl();
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? getPrismaClient();
globalForPrisma.prisma = prisma;