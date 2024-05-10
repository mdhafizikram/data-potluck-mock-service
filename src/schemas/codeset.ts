import { z } from 'zod';

/**
 * Schema for codeset degree
 */
export const codesetDegreeSchema = z.object({
  degreeCode: z.string().max(1).optional(),
});

/**
 * Schema for codeset campus
 */
export const codesetCampusSchema = z.object({
  campusCode: z.string(),
});

/**
 * Schema for codeset credit
 */
export const codesetCreditSchema = z.object({
  include: z.string().optional(),
});

/**
 * Schema for codeset credit code
 */
export const codesetCreditCodeSchema = z.object({
  testCode: z.string().max(3),
  include: z.string().optional(),
});
export const codesetestComponeTntCodeSchema = z.object({
  testCode: z.string().max(3),
  testComponentCode : z.string().max(3)

});
export const codesetTestDateSchema = z.object({
  testCode: z.string().max(3),
  testComponentCode : z.string().max(3),
  testDate: z.string().date()

});
export const codesetTestScoreSchema = z.object({
  testCode: z.string().max(3),
  testComponentCode : z.string().max(3),
  testDate: z.string().date(),
  testScore: z.number().max(1)

});
export const codesetExtOrganizationsSchema = z.object({
  schoolTypeCode:  z.enum(['HS', '2YR', '4YR', 'VOC', 'COL', 'UNV']).optional(),
  stateCode: z.string().max(2).optional()
});
export const codesetExtOrganByOrgIdSchema = z.object({
  externalOrgId: z.string()
});
export const codesetCareerDataByCodeSchema = z.object({
  onetCode: z.string().max(10)
});
export const codesetVisaPermitTypesSchema = z.object({
  filter: z.string().optional()
});
export const codesetCurrentTermSchema = z.object({
  asOf: z.number().optional(),
  asOfDate: z.number().optional(),
  lookBackwardsBetweenTerms: z.boolean().optional(),
  acadCareer: z.string().optional(),
});
export const codesetTermSchema = z.object({
  strm : z.number().optional()
});
export const codesetTermsSchema = z.object({
  strm : z.number().optional(),
  strmRange: z.enum([
    'strmBegin1-curr',
    'strmBegin1-backwardsN',
    'strmBegin1-forwardsN',
    'curr-strmEnd1',
    'curr-curr',
    'curr-backwardsN',
    'curr-forwardsN',
    'backwardsN-strmEnd1',
    'backwardsN-curr',
    'backwardsN-backwardsN',
    'backwardsN-forwardsN',
    'forwardsN-strmEnd1',
    'forwardsN-curr',
    'forwardsN-backwardsN',
    'forwardsN-forwardsN',
  ]).optional(),
  dateRange: z.enum([
    'startDate1-endDate1',
    'startDate1-backwardsN',
    'startDate1-forwardsN',
    'startDate1-now',
    'backwardsN-endDate1',
    'backwardsN-backwardsN',
    'backwardsN-forwardsN',
    'backwardsN-now',
    'forwardsN-endDate1',
    'forwardsN-backwardsN',
    'forwardsN-forwardsN',
    'forwardsN-now',
    'now-endDate1',
    'now-backwardsN',
    'now-forwardsN',
    'now-now',
  ]).optional()
});


/**
 * Schema for codeset countries
 */
export const codesetCountriesSchema = z.object({
  include: z.string().optional(),
  exclude: z.string().optional(),
});

/**
 * Schema for codeset country
 */
export const codesetCountrySchema = z.object({
  countryCode: z.string(),
});
