
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Sample performance metrics data
const performanceData = [
  {
    name: 'Unripe',
    precision: 0.93,
    recall: 0.91,
    f1: 0.92,
    accuracy: 0.94
  },
  {
    name: 'Ripe',
    precision: 0.95,
    recall: 0.97,
    f1: 0.96,
    accuracy: 0.96
  },
  {
    name: 'Overripe',
    precision: 0.89,
    recall: 0.87,
    f1: 0.88,
    accuracy: 0.91
  }
];

// Sample training history data
const trainingHistory = [
  { epoch: 1, trainAcc: 0.65, valAcc: 0.64, trainLoss: 0.78, valLoss: 0.80 },
  { epoch: 5, trainAcc: 0.78, valAcc: 0.75, trainLoss: 0.52, valLoss: 0.56 },
  { epoch: 10, trainAcc: 0.85, valAcc: 0.82, trainLoss: 0.38, valLoss: 0.42 },
  { epoch: 15, trainAcc: 0.89, valAcc: 0.86, trainLoss: 0.29, valLoss: 0.34 },
  { epoch: 20, trainAcc: 0.92, valAcc: 0.89, trainLoss: 0.23, valLoss: 0.27 },
  { epoch: 25, trainAcc: 0.94, valAcc: 0.91, trainLoss: 0.18, valLoss: 0.22 }
];

// Sample confusion matrix data
const confusionMatrix = [
  [45, 3, 2],
  [2, 48, 0],
  [1, 4, 45]
];

// Class distribution data
const classDistribution = [
  { name: 'Unripe', value: 150 },
  { name: 'Ripe', value: 180 },
  { name: 'Overripe', value: 140 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const PerformanceMetrics = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Model Performance Metrics</CardTitle>
        <CardDescription>
          Key performance indicators for the fruit ripeness detection model
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="confusion">Confusion Matrix</TabsTrigger>
            <TabsTrigger value="history">Training History</TabsTrigger>
            <TabsTrigger value="distribution">Class Distribution</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="py-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                  <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
                  <Bar dataKey="precision" name="Precision" fill="#8884d8" />
                  <Bar dataKey="recall" name="Recall" fill="#82ca9d" />
                  <Bar dataKey="f1" name="F1 Score" fill="#ffc658" />
                  <Bar dataKey="accuracy" name="Accuracy" fill="#ff8042" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Average Precision</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">92.3%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Average Recall</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">91.7%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Average F1</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">92.0%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Overall Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-2xl font-bold">93.6%</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="confusion" className="py-4">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Confusion Matrix</h3>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 text-center">Predicted Unripe</th>
                      <th scope="col" className="px-6 py-3 text-center">Predicted Ripe</th>
                      <th scope="col" className="px-6 py-3 text-center">Predicted Overripe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Actual Unripe</th>
                      <td className="px-6 py-4 text-center bg-green-100 font-medium">{confusionMatrix[0][0]}</td>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[0][1]}</td>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[0][2]}</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Actual Ripe</th>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[1][0]}</td>
                      <td className="px-6 py-4 text-center bg-green-100 font-medium">{confusionMatrix[1][1]}</td>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[1][2]}</td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">Actual Overripe</th>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[2][0]}</td>
                      <td className="px-6 py-4 text-center bg-red-50">{confusionMatrix[2][1]}</td>
                      <td className="px-6 py-4 text-center bg-green-100 font-medium">{confusionMatrix[2][2]}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 max-w-lg mx-auto text-sm text-gray-600">
                <p className="mb-2">
                  <strong>Interpretation:</strong> The confusion matrix shows how the model performs on each class.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The diagonal represents correct predictions (true positives)</li>
                  <li>Off-diagonal elements are incorrect predictions</li>
                  <li>The model performs best on the "Ripe" class with few misclassifications</li>
                  <li>There is some confusion between "Overripe" and "Ripe" classes</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <h3 className="text-center text-sm font-medium mb-2">Accuracy During Training</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingHistory}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis domain={[0.5, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                    <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
                    <Line type="monotone" dataKey="trainAcc" name="Training Accuracy" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="valAcc" name="Validation Accuracy" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="h-64">
                <h3 className="text-center text-sm font-medium mb-2">Loss During Training</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trainingHistory}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="trainLoss" name="Training Loss" stroke="#ff8042" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="valLoss" name="Validation Loss" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="mt-4 max-w-2xl mx-auto text-sm text-gray-600">
              <p className="mb-2">
                <strong>Training Summary:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Model trained for 25 epochs with early stopping</li>
                <li>Final training accuracy: 94.3%</li>
                <li>Final validation accuracy: 91.2%</li>
                <li>Model checkpoint saved from epoch 22 (best validation F1 score)</li>
                <li>Model location: <code>models/fruit_ripeness_final.pth</code></li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="distribution" className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <h3 className="text-center text-sm font-medium mb-2">Class Distribution</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={classDistribution}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" name="Number of Images">
                      {classDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-col justify-center h-64">
                <h3 className="text-center text-sm font-medium mb-4">Dataset Overview</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total training images</p>
                    <p className="text-2xl font-bold">470</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total validation images</p>
                    <p className="text-2xl font-bold">120</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total test images</p>
                    <p className="text-2xl font-bold">150</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 max-w-2xl mx-auto text-sm text-gray-600">
              <p className="mb-2">
                <strong>Dataset Information:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Dataset contains fruits in three ripeness states: unripe, ripe, and overripe</li>
                <li>Images were collected from different lighting conditions and angles</li>
                <li>Dataset augmentation applied during training (horizontal flips, rotations, color adjustments)</li>
                <li>Class weighting applied to handle slight class imbalance</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;
