const schemes = require('../models/mongoose');
const { errorHandler } = require('../../../middlewares/errorHandler')

// Insert User
async function insertUser(req, res) {
  try {
    const { username, email, phoneNumber, location, skillsets, hobbies, linkedInUrl } = req.body
    const sanitizedLinkedInUrl = linkedInUrl && linkedInUrl.trim() !== '' ? linkedInUrl : 'None'
    const newUser = schemes.User({
      username,
      email,
      phoneNumber,
      location,
      skillsets,
      hobbies,
      linkedInUrl: sanitizedLinkedInUrl,
    });
    await newUser.save();
    return res.status(200).json({ isSuccess: true, message: 'User added to collection!' });
  } catch (error) {
    console.log(error)
    return errorHandler(res,error)
  }
}

// Get All Users
async function getAllUsers(req, res) {
  try {
    const users = await schemes.User.find({});
    return res.status(200).json(users)
  } catch (error) {
    console.log(error)
    return errorHandler(res,error)
  }
}

// Get User by ID
async function getUser(req, res) {
  const userId = req.params.id;
  try {
    const user = await schemes.User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return errorHandler(res,error)
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { linkedInUrl, ...rest } = req.body;
    const sanitizedLinkedInUrl = linkedInUrl && linkedInUrl.trim() !== '' ? linkedInUrl : 'None';
    const updatedUser = await schemes.User.findByIdAndUpdate(id, { linkedInUrl: sanitizedLinkedInUrl, ...rest }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ isSuccess: true, message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    return errorHandler(res,error)
  }
}

// Delete User
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await schemes.User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error)
    return errorHandler(res,error)
  }
}

module.exports = { insertUser, getAllUsers, getUser, updateUser, deleteUser }