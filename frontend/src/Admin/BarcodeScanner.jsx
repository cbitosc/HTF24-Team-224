// BarcodeScanner.js
import { useState, useEffect, useRef } from "react";
import { useZxing } from "react-zxing";

export const BarcodeScanner = ({ onResult }) => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(decodedResult) {
      setResult(decodedResult.getText());
      onResult(decodedResult.getText()); // Call the callback with the scanned result
    },
  });

  useEffect(() => {
    if (result) {
      // Optionally handle the result here, if needed
    }
  }, [result]);

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </>
  );
};
