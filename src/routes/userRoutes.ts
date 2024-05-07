import express from 'express';
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
  acadPlanSchema
} from '../schemas/userSchemas';

const userRouter = express.Router();

import { registerUser, loginUser } from '../controllers/userController';
//  API base URL
const baseURL = 'https://api.myasuplat-dpl.asu.edu';

userRouter.get('/dummy', (req, res) => {
  res.json({ message: 'This is a dummy mock message from the API' });
});

//CLASSES API'S

userRouter.get(
  '/class/:strm/subject/:subject/:catalogNumber',
  validateData(classSubjectSchema),
  async (req, res) => {
    try {
      const response = await fetch(
        `${baseURL}/api/class/${req.params.strm}/subject/${req.params.subject}/${req.params.catalogNumber}?include=${req.query.include}`
      );
      console.log(response);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

userRouter.get(
  '/class/:strm/:classNumber',
  validateData(classSchema),
  async (req, res) => {
    try {
      // res.json({ message: 'This is a DPL API ' });
      const response = await fetch(
        `${baseURL}/api/class/${req.params.strm}/${req.params.classNumber}?include=${req.query.include}`
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

userRouter.get(
  '/class/:strm',
  validateData(classListSchema),
  async (req, res) => {
    try {
      const response = await fetch(
        `${baseURL}/api/class/${req.params.strm}?include=${req.query.include}`
      );
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

userRouter.get(
  '/class',
   validateData(multiClassSchema), async (req, res) => {
  try {
    const classKeys = Array.isArray(req.query.classKey)
      ? req.query.classKey.join('&classKey=')
      : req.query.classKey;
    const response = await fetch(
      `${baseURL}/api/class?classKey=${classKeys}&include=${req.query.include}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
userRouter.get(
  '/class/:strm/subject/:subject',
  validateData(classCatalogRangeSchema),
  async (req, res) => {
    try {
      const catalogNumberStartInclusive = req.query.catalogNumberStart;
      const catalogNumberEndInclusive = req.query.catalogNumberEnd;
      const response = await fetch(
        `${baseURL}/api/class/${req.params.strm}/subject/${req.params.subject}?catalogNumberStart=${catalogNumberStartInclusive}&catalogNumberEnd=${catalogNumberEndInclusive}&include=${req.query.include}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

// COURES API

userRouter.get(
  '/course/:strm/:courseId/:courseOfferNumber',
  validateData(courseSchema),
  async (req, res) => {
    try {
      console.log(req.params)
      const response = await fetch(
        `${baseURL}/api/course/${req.params.strm}/${req.params.courseId}/${req.params.courseOfferNumber}?include=${req.query.include}`
      );

      const data = await response.json();
     
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);


userRouter.get(
  '/course/:strm/:courseId',
  validateData(courseByCourseIdSchema),
  async (req, res) => {
    try {
      const response = await fetch(
        `${baseURL}/api/course/${req.params.strm}/${req.params.courseId}/?include=${req.query.include}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);
userRouter.get(
  '/course/:strm/subject/:subject',
  validateData(courseCatalogRangeSchema),
  async (req, res) => {
    try {
      
      const response = await fetch(
        `${baseURL}/api/course/${req.params.strm}/subject/${req.params.subject}?catalogNumberStart=${req.query.catalogNumberStart}&catalogNumberEnd=${req.query.catalogNumberEndI}&include=${req.query.include}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);
userRouter.get(
  '/course/:strm/subject/:subject/:catalogNumber',
  validateData(courseCatalogNumberSchema),
  async (req, res) => {
    try {
      const response = await fetch(
        `${baseURL}/api/course/${req.params.strm}/subject/${req.params.subject}/${req.params.catalogNumber}?include=${req.query.include}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);
userRouter.get(
  '/course/:strm',
  validateData(courseOwnerSchema),
  async (req, res) => {
    try {
      console.log(req.query)
      const response = await fetch(
        `${baseURL}/api/course/${req.params.strm}?ownedByCollege=${req.query.ownedByCollege}&ownedByDepartment=${req.query.ownedByDepartment}&include=${req.query.include}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

//ACADEMIC-PLAN

userRouter.get(
  '/codeset/acad-plans',
  validateData(acadPlanSchema),
  async (req, res) => {
    try {

      const queryParams = acadPlanSchema.parse(req.query);
       console.log("query",queryParams)
      const response = await fetch(
        `${baseURL}/api/codeset/acad-plans?${new URLSearchParams(queryParams)}`
      );

      const data = await response.json();
      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error)
  
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);






export default userRouter;
