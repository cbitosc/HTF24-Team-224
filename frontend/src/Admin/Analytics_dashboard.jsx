// src/components/AttendanceAnalytics.js
import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
} from "chart.js"; // Import necessary components

// Register scales and elements
Chart.register(CategoryScale, LinearScale, BarElement, ArcElement);

const AttendanceAnalytics = () => {
  const { clubname, eventId } = useParams();
  const [attendanceData, setAttendanceData] = useState([]);
  const [analyticsData, setAnalyticsData] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  // Fetch attendance data
  const fetchAttendanceData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/${clubname}/analytics/${eventId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch attendance data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching attendance data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAttendanceData();
      if (data) {
        setAttendanceData(data);
        analyzeData(data);
      }
    };
    fetchData();
  }, [clubname, eventId]);

  // Aggregate attendance data
  const analyzeData = (data) => {
    const branchCount = {};
    const semesterCount = {};
    const yearCount = {};

    data.forEach(({ branch, semester, year }) => {
      branchCount[branch] = (branchCount[branch] || 0) + 1;
      semesterCount[semester] = (semesterCount[semester] || 0) + 1;
      yearCount[year] = (yearCount[year] || 0) + 1;
    });

    setAnalyticsData({ branchCount, semesterCount, yearCount });
    sendToGoogleGemini({ branchCount, semesterCount, yearCount });
  };

  // Send analytics data to Google Gemini API
  const sendToGoogleGemini = async (analyticsData) => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCgNWxtPQl85kDGvrVyTiHjofvLH7eSM0M`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Based on the attendance data provided, please suggest up to 5 strategies to enhance participation, particularly focusing on branches with lower participation. If all branches participate equally, please confirm that all branches are participating equally. Here is the attendance data:`,
                  },
                  { text: JSON.stringify(analyticsData) },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const allSuggestions =
        data.candidates[0]?.content?.parts[0]?.text ||
        "No suggestions available";

      // Format the suggestions into a clear text format
      const formattedSuggestions = allSuggestions
        .split("\n")
        .filter((suggestion) => suggestion.trim() !== "") // Remove empty lines
        .slice(0, 5) // Limit to 5 suggestions
        .map((suggestion, index) => `${index + 1}. ${suggestion.trim()}`) // Add numbering
        .join("\n"); // Join with new line for display

      // Set suggestions as an array
      setSuggestions(formattedSuggestions.split("\n")); // Convert to array for rendering
    } catch (error) {
      console.error("Error during API request:", error);
      setSuggestions(["Error fetching data from the API"]);
    }
  };

  // Chart data preparation
  const branchChartData = {
    labels: Object.keys(analyticsData.branchCount || {}),
    datasets: [
      {
        label: "Participation by Branch",
        data: Object.values(analyticsData.branchCount || {}),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const semesterChartData = {
    labels: Object.keys(analyticsData.semesterCount || {}),
    datasets: [
      {
        label: "Participation by Semester",
        data: Object.values(analyticsData.semesterCount || {}),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Event Participation Analysis
      </h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Branch-wise Participation
        </h3>
        <Bar data={branchChartData} />
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          Semester-wise Participation
        </h3>
        <Pie data={semesterChartData} />
      </div>
      <h3 className="text-xl font-semibold mb-4">
        Suggestions for Improving Participation
      </h3>
      <ul className="list-disc list-inside">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="mb-2 text-gray-700">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceAnalytics;
