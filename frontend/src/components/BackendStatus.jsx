import { useEffect, useState } from "react";
import api from "../api/api";

const BackendStatus = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    api
      .get("/health/")
      .then((res) => {
        setStatus(res.data.message);
      })
      .catch(() => {
        setStatus("Backend Offline ❌");
      });
  }, []);

  return (
    <div className="card rounded-3xl p-5">
      <h3 className="font-semibold text-lg mb-2">
        Backend Connection
      </h3>

      <p className="text-blue-600 font-medium">
        {status}
      </p>
    </div>
  );
};

export default BackendStatus;