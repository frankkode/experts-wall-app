import {
  adminAuth,
  authenticate,
  expertAuth,
  restrict,
} from "../auth/verifyToken.js";
import {
  deleteExpert,
  getAllExpert,
  getExpertProfile,
  getSingleExpert,
  updateExpert,
} from "../controllers/expertController.js";
import express from "express";
// import { createReview } from "../controllers/reviewController.js";
import reviewRouter from "./review.js";

const router = express.Router();

router.use("/:expertId/reviews", reviewRouter);

// get all experts
router.get("/", getAllExpert);
router.get("/:id", getSingleExpert);
router.put("/:id", authenticate, expertAuth, updateExpert);
router.delete("/:id", authenticate, expertAuth, deleteExpert);
router.get("/profile/me", authenticate, restrict(["expert"]), getExpertProfile);

export default router;
