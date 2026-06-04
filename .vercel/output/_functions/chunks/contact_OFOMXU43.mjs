import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { neonConfig } from '@neondatabase/serverless';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
function getDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  throw new Error("DATABASE_URL environment variable is required");
}
const POST = async ({ request }) => {
  const connectionString = getDatabaseUrl();
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });
  try {
    const body = await request.json();
    const { name, email, dialCode, phone } = body;
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Campos requeridos faltantes" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const lead = await prisma.lead.create({
      data: { name, email, dialCode, phone }
    });
    return new Response(
      JSON.stringify({ ok: true, id: lead.id }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Prisma error:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } finally {
    await prisma.$disconnect();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
