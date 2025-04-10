import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { email, name, clerkId } = await request.json();

    if (!name || !email || !clerkId)
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          // eslint-disable-next-line prettier/prettier
        }
      );

    const response = await sql`
        INSERT INTO users (
            name,
            email,
            clerkId
        ) VALUES (
            ${name},
            ${email},
            ${clerkId} 
        )
        `;
    return new Response(JSON.stringify({ data: response }), { status: 201 });
  } catch (error: any) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
