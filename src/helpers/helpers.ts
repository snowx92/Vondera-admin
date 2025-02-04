// Function to generate a unique color based on a string value with opacity and a matching text color
export const getUniqueColor = (
  value: string,
  opacity: number = 0.8
): { backgroundColor: string; textColor: string } => {
  // Handle specific cases for "Completed" and "Failed"
  if (value === "Completed") {
    return {
      backgroundColor: `rgba(76, 175, 80, ${opacity})`, // Green color with opacity
      textColor: `rgb(235, 253, 240)`, // Darker green for text
    };
  }
  if (value === "Failed") {
    return {
      backgroundColor: `rgba(244, 67, 54, ${opacity})`, // Red color with opacity
      textColor: `rgb(250, 206, 213)`, // Darker red for text
    };
  }

  // Simple hash function to convert a string to a number
  const hash = value.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  // Generate a color using the hash
  const hue = hash % 360; // Ensure hue is within the 0-359 range
  const backgroundColor = `hsla(${hue}, 70%, 80%, ${opacity})`;

  // Generate a darker shade of the background color for the text
  const textColor = `hsla(${hue}, 70%, 20%, 1)`; // Darker version of the background color

  return { backgroundColor, textColor };
};
