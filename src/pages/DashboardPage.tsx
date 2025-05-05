
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import ModelOutput, { PredictionResult } from "@/components/ModelOutput";
import PerformanceMetrics from "@/components/analytics/PerformanceMetrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { analyzeImage } from "@/components/ModelService";
import { useAuth } from "@/components/AuthProvider";
import RequireAuth from "@/components/RequireAuth";
import { toast } from "sonner";

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResults, setPredictionResults] = useState<PredictionResult[] | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const handleImageUpload = async (imageFile: File) => {
    try {
      setIsLoading(true);
      
      // Create URL for the preview
      const imageObjectUrl = URL.createObjectURL(imageFile);
      setImageUrl(imageObjectUrl);
      
      // Send to model for prediction
      const results = await analyzeImage(imageFile);
      setPredictionResults(results);
      
      toast.success("Analysis completed successfully!");
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast.error("Failed to analyze image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RequireAuth>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="container mx-auto px-4 py-8 flex-1">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Fruit Ripeness Dashboard</h1>
              <p className="text-gray-600">Analyze fruit ripeness with our AI model</p>
            </div>
            {user && (
              <div className="bg-primary-50 text-primary-900 px-4 py-2 rounded-lg">
                <p className="font-medium">Welcome, {user.name}</p>
              </div>
            )}
          </div>
          
          <Tabs defaultValue="predict">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="predict">Predict Ripeness</TabsTrigger>
              <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="predict" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Upload Fruit Image</h2>
                  <ImageUpload onImageUpload={handleImageUpload} isLoading={isLoading} />
                  
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Instructions</CardTitle>
                      <CardDescription>How to get the best results</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          Upload a clear image of a single fruit
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          Ensure good lighting conditions
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          Position the fruit against a plain background
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          The model works best with apples, bananas, oranges, mangoes, and strawberries
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
                  {predictionResults ? (
                    <ModelOutput predictionResults={predictionResults} imageUrl={imageUrl} />
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <div className="text-gray-400 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No results yet</h3>
                        <p className="text-gray-600">
                          Upload an image to see the AI analysis of fruit ripeness
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <PerformanceMetrics />
            </TabsContent>
          </Tabs>
        </div>
        
        <Footer />
      </div>
    </RequireAuth>
  );
};

export default DashboardPage;
