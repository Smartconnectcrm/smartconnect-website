/**
 * SmartConnect CRM UG (haftungsbeschränkt)
 * Centralized Company Legal Configuration
 *
 * IMPORTANT: All data is official and verified.
 * Do NOT modify without legal authorization.
 */

export interface CompanyLegal {
  legalName: string;
  legalForm: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    full: string;
  };
  registerCourt: string;
  registerNumber: string;
  managingDirector: string;
  taxNumber: string;
  vatId: string | null; // null = not yet assigned
  contact: {
    email: string;
    phone: string;
    website: string;
  };
}

export const COMPANY_LEGAL: CompanyLegal = {
  legalName: "SmartConnect CRM UG (haftungsbeschränkt)",
  legalForm: "UG (haftungsbeschränkt)",

  address: {
    street: "Otto-Braun-Str. 12",
    postalCode: "40595",
    city: "Düsseldorf",
    country: "Deutschland",
    full: "Otto-Braun-Str. 12, 40595 Düsseldorf, Deutschland",
  },

  registerCourt: "Amtsgericht Düsseldorf",
  registerNumber: "HRB 110351",
  managingDirector: "Abubakar Bolarinwa Alimi",
  taxNumber: "106/5725/5542",
  vatId: null, // USt-IdNr not yet assigned

  contact: {
    email: "admin@smartclientcrm.com",
    phone: "+49 211 87973999233",
    website: "https://www.smartconnectcrm.eu",
  },
};

/**
 * Get formatted legal footer block (German)
 */
export function getFooterLegalBlock(): string {
  return `${COMPANY_LEGAL.legalName}
${COMPANY_LEGAL.address.street}
${COMPANY_LEGAL.address.postalCode} ${COMPANY_LEGAL.address.city}
${COMPANY_LEGAL.address.country}
Registergericht: ${COMPANY_LEGAL.registerCourt}
${COMPANY_LEGAL.registerNumber}
Geschäftsführung: ${COMPANY_LEGAL.managingDirector}
Steuernummer: ${COMPANY_LEGAL.taxNumber}
E-Mail: ${COMPANY_LEGAL.contact.email}
Telefon: ${COMPANY_LEGAL.contact.phone}`;
}

/**
 * Get formatted Impressum data
 */
export function getImpressumData() {
  return {
    legalName: COMPANY_LEGAL.legalName,
    legalForm: COMPANY_LEGAL.legalForm,
    address: COMPANY_LEGAL.address.full,
    registerCourt: COMPANY_LEGAL.registerCourt,
    registerNumber: COMPANY_LEGAL.registerNumber,
    managingDirector: COMPANY_LEGAL.managingDirector,
    taxNumber: COMPANY_LEGAL.taxNumber,
    vatId: COMPANY_LEGAL.vatId,
    email: COMPANY_LEGAL.contact.email,
    phone: COMPANY_LEGAL.contact.phone,
    website: COMPANY_LEGAL.contact.website,
  };
}

/**
 * Compact legal line for footer (public procurement safe)
 * No Stammkapital, uses Steuernummer only, no contact repetition.
 */
export const COMPACT_LEGAL_TEXT =
  `${COMPANY_LEGAL.legalName} · ` +
  `Sitz: ${COMPANY_LEGAL.address.full} · ` +
  `Registergericht: ${COMPANY_LEGAL.registerCourt}, ${COMPANY_LEGAL.registerNumber} · ` +
  `Geschäftsführung: ${COMPANY_LEGAL.managingDirector} · ` +
  `Steuernummer: ${COMPANY_LEGAL.taxNumber}`;

/**
 * Exported function for Footer.tsx compatibility
 */
export function getCompactLegalText(): string {
  return COMPACT_LEGAL_TEXT;
}
