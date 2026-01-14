/**
 * Centralized Company Legal Information
 * 
 * This file contains all official legal information for SmartConnect CRM UG.
 * Used across the website for Impressum, footer, and compliance pages.
 * 
 * IMPORTANT: Update placeholder values (marked with TODO) with official data
 * before production deployment.
 */

export interface CompanyLegal {
  legalName: string;
  legalForm: string;
  address: string;
  registerCourt: string;
  registerNumber: string;
  managingDirector: string;
  vatId: string;
  taxNumber: string;
  email: string;
  phone: string;
  website: string;
}

/**
 * Official company legal information
 * 
 * TODO: Update the following placeholder values before production:
 * - registerNumber: Replace "HRB-XXXX" with official HRB number
 * - vatId: Replace "DE999999999" with official USt-IdNr
 * - taxNumber: Replace "XXX/XXX/XXXX" with official tax number
 */
export const COMPANY_LEGAL: CompanyLegal = {
  legalName: "SmartConnect CRM UG (haftungsbeschränkt)",
  legalForm: "UG (haftungsbeschränkt)",
  address: "Düsseldorf, Germany",
  registerCourt: "Amtsgericht Düsseldorf",
  registerNumber: "HRB-XXXX", // TODO: Update with official HRB number
  managingDirector: "Abubakar Bolarinwa Alimi",
  vatId: "DE999999999", // TODO: Update with official USt-IdNr
  taxNumber: "XXX/XXX/XXXX", // TODO: Update with official tax number
  email: "admin@smartclientcrm.com",
  phone: "+49 211 87973999233",
  website: "https://www.smartconnectcrm.eu",
};

/**
 * Formats the legal information as a compact German Impressum line
 * Suitable for footer display
 */
export function getCompactLegalText(): string {
  return `${COMPANY_LEGAL.legalName} · Sitz: ${COMPANY_LEGAL.address} · Registergericht: ${COMPANY_LEGAL.registerCourt}, ${COMPANY_LEGAL.registerNumber} · Geschäftsführung: ${COMPANY_LEGAL.managingDirector} · Steuernummer: ${COMPANY_LEGAL.taxNumber} · USt-IdNr: ${COMPANY_LEGAL.vatId} · Kontakt: ${COMPANY_LEGAL.email} · ${COMPANY_LEGAL.phone}`;
}

/**
 * Returns structured legal data for detailed Impressum pages
 */
export function getDetailedLegalData() {
  return {
    company: {
      name: COMPANY_LEGAL.legalName,
      form: COMPANY_LEGAL.legalForm,
      address: COMPANY_LEGAL.address,
    },
    registration: {
      court: COMPANY_LEGAL.registerCourt,
      number: COMPANY_LEGAL.registerNumber,
    },
    management: {
      director: COMPANY_LEGAL.managingDirector,
    },
    tax: {
      vatId: COMPANY_LEGAL.vatId,
      taxNumber: COMPANY_LEGAL.taxNumber,
    },
    contact: {
      email: COMPANY_LEGAL.email,
      phone: COMPANY_LEGAL.phone,
      website: COMPANY_LEGAL.website,
    },
  };
}
