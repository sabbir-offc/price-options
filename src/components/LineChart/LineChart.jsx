import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarks = [
    {
      id: 1,
      name: "John Doe",
      mathMarks: 92,
      englishMarks: 88,
      banglaMarks: 78,
    },
    {
      id: 2,
      name: "Jane Smith",
      mathMarks: 78,
      englishMarks: 85,
      banglaMarks: 90,
    },
    {
      id: 3,
      name: "Michael Johnson",
      mathMarks: 85,
      englishMarks: 89,
      banglaMarks: 92,
    },
    {
      id: 4,
      name: "Emily Davis",
      mathMarks: 90,
      englishMarks: 92,
      banglaMarks: 86,
    },
    {
      id: 5,
      name: "David Wilson",
      mathMarks: 88,
      englishMarks: 84,
      banglaMarks: 90,
    },
    {
      id: 6,
      name: "Sarah Brown",
      mathMarks: 75,
      englishMarks: 80,
      banglaMarks: 75,
    },
    {
      id: 7,
      name: "Daniel Lee",
      mathMarks: 94,
      englishMarks: 88,
      banglaMarks: 91,
    },
    {
      id: 8,
      name: "Olivia Martin",
      mathMarks: 79,
      englishMarks: 82,
      banglaMarks: 84,
    },
    {
      id: 9,
      name: "William Taylor",
      mathMarks: 87,
      englishMarks: 90,
      banglaMarks: 85,
    },
    {
      id: 10,
      name: "Sophia Anderson",
      mathMarks: 91,
      englishMarks: 86,
      banglaMarks: 89,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={studentMarks}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey="mathMarks" stroke="red"></Line>
        <Line dataKey="englishMarks" stroke="green"></Line>
        <Line dataKey="banglaMarks" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
