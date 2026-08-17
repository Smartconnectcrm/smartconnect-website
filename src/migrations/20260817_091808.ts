import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('de', 'en', 'hu', 'fr', 'es', 'it', 'nl', 'pl');
  CREATE TYPE "public"."enum_proposals_status" AS ENUM('draft', 'processing', 'ready');
  CREATE TYPE "public"."enum_tenders_status" AS ENUM('Scraped', 'Under Review', 'Go', 'No-Go', 'Submitted');
  CREATE TABLE "services_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "proposals" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"tender_name" varchar NOT NULL,
  	"tender_document_id" integer NOT NULL,
  	"status" "enum_proposals_status" DEFAULT 'draft',
  	"preflight_score" numeric,
  	"audit_report" jsonb,
  	"generated_docx_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tenders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"organization" varchar,
  	"source_url" varchar,
  	"budget" numeric,
  	"ai_score" numeric,
  	"status" "enum_tenders_status" DEFAULT 'Scraped',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "tenders_locales" (
  	"title" varchar NOT NULL,
  	"ai_justification" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"light_logo_id" integer NOT NULL,
  	"dark_logo_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "services_deliverables" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "services_inputs" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "services_outputs" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "services_boundaries" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "proposals_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "tenders_id" integer;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proposals" ADD CONSTRAINT "proposals_tender_document_id_media_id_fk" FOREIGN KEY ("tender_document_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "proposals" ADD CONSTRAINT "proposals_generated_docx_id_media_id_fk" FOREIGN KEY ("generated_docx_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tenders_locales" ADD CONSTRAINT "tenders_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tenders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_light_logo_id_media_id_fk" FOREIGN KEY ("light_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_dark_logo_id_media_id_fk" FOREIGN KEY ("dark_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "services_locales_locale_parent_id_unique" ON "services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "proposals_tender_document_idx" ON "proposals" USING btree ("tender_document_id");
  CREATE INDEX "proposals_generated_docx_idx" ON "proposals" USING btree ("generated_docx_id");
  CREATE INDEX "proposals_updated_at_idx" ON "proposals" USING btree ("updated_at");
  CREATE INDEX "proposals_created_at_idx" ON "proposals" USING btree ("created_at");
  CREATE INDEX "tenders_updated_at_idx" ON "tenders" USING btree ("updated_at");
  CREATE INDEX "tenders_created_at_idx" ON "tenders" USING btree ("created_at");
  CREATE UNIQUE INDEX "tenders_locales_locale_parent_id_unique" ON "tenders_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_light_logo_idx" ON "site_settings" USING btree ("light_logo_id");
  CREATE INDEX "site_settings_dark_logo_idx" ON "site_settings" USING btree ("dark_logo_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_proposals_fk" FOREIGN KEY ("proposals_id") REFERENCES "public"."proposals"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_tenders_fk" FOREIGN KEY ("tenders_id") REFERENCES "public"."tenders"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_deliverables_locale_idx" ON "services_deliverables" USING btree ("_locale");
  CREATE INDEX "services_inputs_locale_idx" ON "services_inputs" USING btree ("_locale");
  CREATE INDEX "services_outputs_locale_idx" ON "services_outputs" USING btree ("_locale");
  CREATE INDEX "services_boundaries_locale_idx" ON "services_boundaries" USING btree ("_locale");
  CREATE INDEX "payload_locked_documents_rels_proposals_id_idx" ON "payload_locked_documents_rels" USING btree ("proposals_id");
  CREATE INDEX "payload_locked_documents_rels_tenders_id_idx" ON "payload_locked_documents_rels" USING btree ("tenders_id");
  ALTER TABLE "services" DROP COLUMN "title";
  ALTER TABLE "services" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "services_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "proposals" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tenders" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "tenders_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "services_locales" CASCADE;
  DROP TABLE "proposals" CASCADE;
  DROP TABLE "tenders" CASCADE;
  DROP TABLE "tenders_locales" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_proposals_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_tenders_fk";
  
  DROP INDEX "services_deliverables_locale_idx";
  DROP INDEX "services_inputs_locale_idx";
  DROP INDEX "services_outputs_locale_idx";
  DROP INDEX "services_boundaries_locale_idx";
  DROP INDEX "payload_locked_documents_rels_proposals_id_idx";
  DROP INDEX "payload_locked_documents_rels_tenders_id_idx";
  ALTER TABLE "services" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "description" varchar;
  ALTER TABLE "services_deliverables" DROP COLUMN "_locale";
  ALTER TABLE "services_inputs" DROP COLUMN "_locale";
  ALTER TABLE "services_outputs" DROP COLUMN "_locale";
  ALTER TABLE "services_boundaries" DROP COLUMN "_locale";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "proposals_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "tenders_id";
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_proposals_status";
  DROP TYPE "public"."enum_tenders_status";`)
}
