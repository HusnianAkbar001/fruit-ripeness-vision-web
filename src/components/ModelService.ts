
// This service will connect to the ripeness detection model
// For now it will return mock data, but in a real implementation
// it would connect to the fruit_ripeness_final.pth model

import { PredictionResult } from "./ModelOutput";

// Mock classes that might be detected by the model
const ripeness_classes = [
  "Unripe",
  "Ripe",
  "Overripe"
];

const fruit_types = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Strawberry"
];

// A simple function to generate realistic-looking predictions
export const analyzeImage = async (imageFile: File): Promise<PredictionResult[]> => {
  // In a real implementation, this would send the image to a server
  // that would use the PyTorch model (fruit_ripeness_final.pth) for inference
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate mock prediction results
  const mockPredictions: PredictionResult[] = [];
  
  // First determine the fruit type (for realism)
  const primaryFruit = fruit_types[Math.floor(Math.random() * fruit_types.length)];
  
  // Determine the dominant ripeness (will have highest probability)
  const primaryRipenessIndex = Math.floor(Math.random() * ripeness_classes.length);
  const primaryRipeness = ripeness_classes[primaryRipenessIndex];
  
  // Add the primary prediction (fruit type + ripeness)
  const primaryProb = 0.65 + Math.random() * 0.30; // Between 0.65 and 0.95
  mockPredictions.push({
    className: `${primaryRipeness} ${primaryFruit}`,
    probability: primaryProb
  });
  
  // Add the other ripeness classes for the same fruit with lower probabilities
  let remainingProb = 1 - primaryProb;
  
  for (let i = 0; i < ripeness_classes.length; i++) {
    if (i !== primaryRipenessIndex) {
      const thisRipeness = ripeness_classes[i];
      // Give a portion of the remaining probability
      const portionFactor = Math.random(); 
      const thisProb = remainingProb * portionFactor;
      remainingProb -= thisProb;
      
      mockPredictions.push({
        className: `${thisRipeness} ${primaryFruit}`,
        probability: thisProb
      });
    }
  }
  
  // Potentially add one other fruit type with very low probability
  if (remainingProb > 0.001) {
    let otherFruit = fruit_types[Math.floor(Math.random() * fruit_types.length)];
    while (otherFruit === primaryFruit) {
      otherFruit = fruit_types[Math.floor(Math.random() * fruit_types.length)];
    }
    
    mockPredictions.push({
      className: `${ripeness_classes[Math.floor(Math.random() * ripeness_classes.length)]} ${otherFruit}`,
      probability: remainingProb
    });
  }
  
  return mockPredictions;
};

// Note: In a real implementation, this would connect to the PyTorch model
// located at "models/fruit_ripeness_final.pth" and use it for inference
// The exact implementation would depend on how your backend is set up
// to serve the PyTorch model (e.g., via a Flask/FastAPI server)
