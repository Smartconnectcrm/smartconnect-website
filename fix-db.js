import pg from 'pg'

const client = new pg.Client({
  connectionString: 'postgresql://postgres.crjsfymllpaxqxfatfpx:SC_crm_2026_SecureDB!@aws-0-eu-central-1.pooler.supabase.com:5432/postgres?sslmode=require',
  ssl: { rejectUnauthorized: false }
})

async function run() {
  await client.connect()
  console.log('Connected to database. Creating table...')
  
  await client.query(`
    CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
      "id" serial PRIMARY KEY,
      "order" integer,
      "parent_id" integer,
      "path" varchar,
      "users_id" integer
    );
  `)
  
  console.log('SUCCESS: Table payload_preferences_rels created successfully.')
  await client.end()
}

run().catch(err => {
  console.error('ERROR:', err)
  process.exit(1)
})
