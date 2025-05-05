
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Multi-class Fruit Classification",
    description: "Detect multiple fruit types and their ripeness status from a single image with high accuracy.",
    icon: "🍎"
  },
  {
    title: "Visual Analytics",
    description: "Comprehensive performance metrics including precision, recall, F1-score and confusion matrices.",
    icon: "📊"
  },
  {
    title: "User-friendly Interface",
    description: "Simple drag-and-drop interface for uploading images and getting instant ripeness results.",
    icon: "🖥️"
  },
  {
    title: "Model Transparency",
    description: "Visualize what the AI is focusing on and understand the confidence of each prediction.",
    icon: "🔍"
  },
  {
    title: "Batch Processing",
    description: "Process multiple images at once to save time during large harvests or inventory checks.",
    icon: "📦"
  },
  {
    title: "Detailed Reporting",
    description: "Generate customizable reports with ripeness distribution and quality metrics.",
    icon: "📝"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our fruit ripeness detection system provides powerful tools for farmers, 
            retailers, and researchers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-primary-300 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
