import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BarcodeScanner } from "./BarcodeScanner"; // Import the BarcodeScanner component
import { FaCamera } from "react-icons/fa"; // Import camera icon

const ScanAttendancePage = () => {
  const { eventId } = useParams();
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [scannedResult, setScannedResult] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle the toggle of camera
  const toggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
    setSuccess("");
    setError("");
    setScannedResult("");
  };

  // Function to handle the result from BarcodeScanner
  const handleScan = async (result) => {
    if (result) {
      setScannedResult(result);

      const attendanceData = result; // Assuming the result needs to be in JSON format

      try {
        const response = await fetch(
          `http://localhost:8080/${eventId}/presentees`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: attendanceData,
          }
        );

        if (response.ok) {
          setSuccess("Attendance posted successfully!");
          console.log("Success:", await response.json());
          // Disable the camera after a successful scan
          setCameraEnabled(false);
        } else {
          setError("Failed to post attendance. Please try again.");
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        setError("An error occurred. Please try again.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
        Scan Attendance
      </h1>
      <button
        onClick={toggleCamera}
        className="w-full md:w-auto mb-4 p-3 md:p-4 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
      >
        <FaCamera className="text-lg md:text-xl" />
        <span className="text-sm md:text-base">
          {cameraEnabled ? "Stop Camera" : "Start Camera"}
        </span>
      </button>
      {cameraEnabled && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 border border-gray-300 rounded-lg overflow-hidden">
          <BarcodeScanner onResult={handleScan} />
        </div>
      )}
      {scannedResult && (
        <div className="mt-4 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Scanned Result:
          </h2>
          <p className="text-base md:text-lg lg:text-xl">{scannedResult}</p>
        </div>
      )}
      {success && (
        <p className="text-green-600 text-sm mb-4 text-center">{success}</p>
      )}
      {error && (
        <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
      )}
    </div>
  );
};

export default ScanAttendancePage;
