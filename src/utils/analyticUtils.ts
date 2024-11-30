// src/utils/analysisUtils.ts

interface AnalysisReport {
    summary: string;
    detailedInsights: string[];
  }
  
  // Function to calculate dynamic statistics
  export const calculateDynamicStatistics = (data: (string | number | boolean | null)[][]): AnalysisReport => {
    if (data.length === 0) return { summary: 'No data available', detailedInsights: [] };
  
    // Transpose data for easier column-wise analysis
    const transpose = (matrix: any[][]) => matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  
    const columns = transpose(data);
  
    // Calculate column statistics
    const columnAverages = columns.map(column => {
      const numericValues = column.filter(val => typeof val === 'number') as number[];
      const sum = numericValues.reduce((acc, val) => acc + val, 0);
      const average = numericValues.length > 0 ? sum / numericValues.length : 0;
      return average;
    });
  
    // Create dynamic insights
    const detailedInsights = [
      `The dataset contains ${data.length} rows and ${data[0]?.length || 0} columns.`,
      `Column-wise averages: ${columnAverages.map((avg, idx) => `Column ${idx + 1}: ${avg.toFixed(2)}`).join(', ')}.`,
      `More specific analysis can be performed based on data structure and requirements.`,
    ];
  
    const summary = `Based on the analysis, here are some key observations:\n\n${detailedInsights.join('\n')}\n\nTo help you analyze this data further, I can:\n- Calculate specific statistics for each column.\n- Create more detailed visualizations (e.g., charts for each column).\n- Perform trend analysis to see how data changes over time.\n- Compare data across different columns or rows.\n\nWhat specific aspects of this data would you like to explore further?`;
  
    return { summary, detailedInsights };
  };
  