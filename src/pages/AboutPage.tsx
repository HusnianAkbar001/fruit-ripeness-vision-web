
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About FruitVision</h1>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-6">
              FruitVision is an advanced fruit ripeness detection system that uses 
              deep learning to help farmers, retailers, and consumers identify the 
              optimal ripeness of fruits. Our technology ensures quality control, 
              reduces waste, and improves consumer satisfaction.
            </p>
            
            <p className="text-gray-700">
              Our model has been trained on thousands of images of various fruits
              at different stages of ripeness, allowing it to accurately classify 
              fruits as unripe, ripe, or overripe. The model is continuously 
              improved with new data and feedback from users.
            </p>
          </div>
          
          <Tabs defaultValue="technology">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technology" className="py-6">
              <Card>
                <CardHeader>
                  <CardTitle>How it Works</CardTitle>
                  <CardDescription>
                    The deep learning technology behind our fruit ripeness detection system
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Deep Learning Model</h3>
                      <p className="text-gray-700">
                        We utilize an EfficientNet architecture pre-trained on ImageNet and 
                        fine-tuned on our specialized fruit dataset. This allows our model to 
                        achieve high accuracy with relatively low computational requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Image Processing</h3>
                      <p className="text-gray-700">
                        Before classification, images undergo preprocessing including 
                        normalization, augmentation (during training), and resizing to 
                        ensure consistent inputs to the model regardless of the camera used.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
                      <p className="text-gray-700">
                        Our model's performance is evaluated using standard metrics including 
                        accuracy, precision, recall, F1-score, and confusion matrices. These 
                        metrics are transparently displayed in the dashboard for users to understand 
                        the confidence of each prediction.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-sm text-gray-600">
                        <strong>Technical Note:</strong> The model is located at "models/fruit_ripeness_final.pth" 
                        and implements a multi-class classification approach for detecting unripe, ripe, and 
                        overripe states across various fruit types.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="team" className="py-6">
              <Card>
                <CardHeader>
                  <CardTitle>Meet Our Team</CardTitle>
                  <CardDescription>
                    The experts behind FruitVision
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                      <p className="text-gray-600">Machine Learning Lead</p>
                      <p className="text-sm text-gray-700 mt-2">
                        PhD in Computer Vision with 10+ years experience in agricultural AI applications.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold">Michael Chen</h3>
                      <p className="text-gray-600">Full-Stack Developer</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Expert in React and Python with a background in agricultural technology.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold">Dr. James Rodriguez</h3>
                      <p className="text-gray-600">Agricultural Scientist</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Specializes in post-harvest technology and fruit physiology.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                      <h3 className="text-lg font-semibold">Lisa Patel</h3>
                      <p className="text-gray-600">UI/UX Designer</p>
                      <p className="text-sm text-gray-700 mt-2">
                        Creates intuitive interfaces for technical applications with focus on accessibility.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="faq" className="py-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Common questions about FruitVision
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">What types of fruits can the system detect?</h3>
                      <p className="text-gray-700">
                        Currently, our system can detect ripeness for apples, bananas, oranges, 
                        strawberries, and mangoes. We are continuously expanding our dataset to 
                        include more fruit types.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How accurate is the ripeness detection?</h3>
                      <p className="text-gray-700">
                        Our system achieves an average accuracy of 94% across all supported fruit types. 
                        The precision and recall metrics are available in the dashboard for transparency.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Can I use this for commercial purposes?</h3>
                      <p className="text-gray-700">
                        Yes, we offer different subscription plans for commercial use. Please contact 
                        our sales team for more information on enterprise licensing.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Does the system work offline?</h3>
                      <p className="text-gray-700">
                        We offer an offline version for enterprise customers that can be deployed 
                        on local hardware. The standard version requires internet connectivity to 
                        access our cloud-based AI services.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">How do I provide feedback on incorrect predictions?</h3>
                      <p className="text-gray-700">
                        In the dashboard, each prediction has a feedback option where you can mark 
                        if the prediction was correct or incorrect. This feedback helps us improve 
                        the model over time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
