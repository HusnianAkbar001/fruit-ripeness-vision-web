
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface PredictionResult {
  className: string;
  probability: number;
}

interface ModelOutputProps {
  predictionResults: PredictionResult[] | null;
  imageUrl: string | null;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const ModelOutput = ({ predictionResults, imageUrl }: ModelOutputProps) => {
  if (!predictionResults || !imageUrl) {
    return null;
  }

  // Sort predictions by probability for better visualization
  const sortedPredictions = [...predictionResults].sort((a, b) => b.probability - a.probability);
  
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Prediction Results</CardTitle>
        <CardDescription>Analysis of fruit ripeness</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <img 
              src={imageUrl} 
              alt="Analyzed fruit" 
              className="rounded-lg max-h-64 w-full object-contain bg-gray-100" 
            />
            <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-medium">
              {sortedPredictions[0]?.className}
            </div>
          </div>

          <div>
            <Tabs defaultValue="chart">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chart">Bar Chart</TabsTrigger>
                <TabsTrigger value="pie">Pie Chart</TabsTrigger>
              </TabsList>
              
              <TabsContent value="chart" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={sortedPredictions}
                    margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="className" angle={-45} textAnchor="end" height={60} />
                    <YAxis domain={[0, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
                    <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
                    <Bar dataKey="probability" fill="#8884d8">
                      {sortedPredictions.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
              
              <TabsContent value="pie" className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sortedPredictions}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="probability"
                      nameKey="className"
                      label={({ className, probability }) => `${className}: ${(probability * 100).toFixed(1)}%`}
                      labelLine={false}
                    >
                      {sortedPredictions.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${(Number(value) * 100).toFixed(2)}%`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">Detailed Results</h3>
          <div className="space-y-3">
            {sortedPredictions.map((prediction, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{prediction.className}</span>
                    <span className="text-sm text-gray-500">{(prediction.probability * 100).toFixed(2)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${prediction.probability * 100}%`,
                        backgroundColor: COLORS[index % COLORS.length],
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelOutput;
