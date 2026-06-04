import type { APIRoute } from 'astro';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;

function getDatabaseUrl(): string {
  const url = import.meta.env.DATABASE_URL || process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL not found in environment variables');
  return url;
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {  
  try {
    const connectionString = getDatabaseUrl();  
    const adapter = new PrismaNeon({ connectionString }); // ← sin Pool
    const prisma = new PrismaClient({ adapter });
    const body = await request.json();
    const { name, email, dialCode, phone } = body;

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Campos requeridos faltantes' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const lead = await prisma.lead.create({
      data: { name, email, dialCode, phone },
    });

    return new Response(
      JSON.stringify({ ok: true, id: lead.id }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Prisma error:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};