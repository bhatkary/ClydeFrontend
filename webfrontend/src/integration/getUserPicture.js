// getUserPicture.js
import SampleUserPic from "../assets/examples/SampleUserPic.png";

const getUserPicture = (sender) => {
  // Add logic to determine and return the user's picture based on the sender
  // For now, let's return the SampleUserPic for the "User" sender
  if (sender === "You") {
    return SampleUserPic;
  }

  // Add additional logic for other senders if needed

  // Default to a placeholder image if no match is found
  return SampleUserPic;
};

export default getUserPicture;
