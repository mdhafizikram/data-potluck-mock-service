import express, { Router } from 'express';
import { dplService } from './data-potluck';
import { mockService } from './mocks';
import { validateData } from '../middleware/requestValidation';
import {
  classSubjectSchema,
  classSchema,
  classListSchema,
  multiClassSchema,
  classCatalogRangeSchema,
  courseSchema,
  courseByCourseIdSchema,
  courseCatalogRangeSchema,
  courseCatalogNumberSchema,
  courseOwnerSchema,
  privateMockSchema,
  codesetDegreeSchema,
  codesetCampusSchema,
  codesetCreditSchema,
  codesetCreditCodeSchema,
  codesetCountriesSchema,
  codesetCountrySchema,
  privateReportSchema,
  privateEnrollmentSchema,
  privatePersonSchema,
  privatePersonIdSchema,
  privatePrincipalSchema,
  privatePrincipalOwnerSchema,
  privateServiceSchema,
} from '../schemas/userSchemas';

const router: Router = express.Router();

// @HttpGetCourse
router.get(
  '/api/course/:strm/:courseId/:courseOfferNumber',
  validateData(courseSchema),
  dplService
);
router.get(
  '/api/course/:strm/:courseId',
  validateData(courseByCourseIdSchema),
  dplService
);
router.get(
  '/api/course/:strm/subject/:subject',
  validateData(courseCatalogRangeSchema),
  dplService
);
router.get(
  '/api/course/:strm/subject/:subject/:catalogNumber',
  validateData(courseCatalogNumberSchema),
  dplService
);
router.get('/api/course/:strm', validateData(courseOwnerSchema), dplService);

// @HttpGetClass
router.get('/api/class', validateData(multiClassSchema), dplService);
router.get('/api/class/:strm', validateData(classListSchema), dplService);
router.get(
  '/api/class/:strm/subject/:subject/:catalogNumber',
  validateData(classSubjectSchema),
  dplService
);
router.get(
  '/api/class/:strm/:classNumber',
  validateData(classSchema),
  dplService
);
router.get(
  '/api/class/:strm/subject/:subject',
  validateData(classCatalogRangeSchema),
  dplService
);
// @HttpGetCodesets
router.get(
  '/api/codeset/degrees',
  validateData(codesetDegreeSchema),
  dplService
);
router.get(
  '/api/codeset/campus/{campusCode}',
  validateData(codesetCampusSchema),
  dplService
);
router.get('/api/codeset/campuses', dplService);
router.get(
  '/api/codeset/credit-by-exam',
  validateData(codesetCreditSchema),
  dplService
);
router.get(
  '/api/codeset/credit-by-exam/{testCode}',
  validateData(codesetCreditCodeSchema),
  dplService
);
router.get(
  '/api/codeset/countries',
  validateData(codesetCountriesSchema),
  dplService
);
router.get(
  '/api/codeset/country/{countryCode}',
  validateData(codesetCountrySchema),
  dplService
);

// @samplePrivateRoute
router.get(
  '/api/academic-status-report/emplid/{emplid}',
  validateData(privateReportSchema),
  mockService
);
router.get(
  '/api/enrollment/class/{strm}/{classNumber}',
  validateData(privateEnrollmentSchema),
  mockService
);
router.get('/api/person', validateData(privatePersonSchema), mockService);
router.get(
  '/api/person/{emplid}',
  validateData(privatePersonIdSchema),
  mockService
);

router.get(
  '/api/principal/asuriteid/{asuriteid}',
  validateData(privatePrincipalSchema),
  mockService
);
router.get(
  '/api/principal/asuriteid/{asuriteid}?include=ownerDetail',
  validateData(privatePrincipalOwnerSchema),
  mockService
);
router.get(
  '/api/service-subscription/asuriteid/{asuriteid}',
  validateData(privateServiceSchema),
  mockService
);


router.get('/private', validateData(privateMockSchema), mockService);

export default router;
