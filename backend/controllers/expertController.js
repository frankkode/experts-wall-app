import Booking from "../models/BookingSchema.js";
import Expert from "../models/ExpertSchema.js";

// update Expert
export const updateExpert = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedExpert = await Expert.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedExpert,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update",
    });
  }
};

// delete Expert
export const deleteExpert = async (req, res) => {
  const id = req.params.id;

  try {
    await Expert.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle Expert
export const getSingleExpert = async (req, res) => {
  const id = req.params.id;

  try {
    const expert = await Expert.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: expert,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getAll Expert
export const getAllExpert = async (req, res) => {
  try {
    const { query } = req.query;
    let experts;

    if (query) {
      // Search based on expert name or specialization
      experts = await Expert.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the name field
          { specialization: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the specialization field
        ],
      }).select("-password");
    } else {
      // Get all approved experts
      experts = await Expert.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Successful",
      data: experts,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

export const getExpertProfile = async (req, res) => {
  const userId = req.userId;

  try {
    // let user = null;
    const user = await Expert.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const appointments = await Booking.find({ expert: userId });

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! cannot get!" });
  }
};
