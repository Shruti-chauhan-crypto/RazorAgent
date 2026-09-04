import { useEffect, useState } from "react";
import { FiActivity, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
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

  const isOnline =
    status !== "Checking..." && !status.toLowerCase().includes("offline");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <FiActivity className="text-2xl text-blue-600" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Backend Connection
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Real-time API health monitor
          </p>
        </div>
      </div>

      {/* Status Card */}
      <div
        className={`flex items-center justify-between rounded-2xl border px-4 py-4 ${
          status === "Checking..."
            ? "border-yellow-200 bg-yellow-50 dark:border-yellow-900/40 dark:bg-yellow-950/20"
            : isOnline
            ? "border-green-200 bg-green-50 dark:border-green-900/40 dark:bg-green-950/20"
            : "border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/20"
        }`}
      >
        <div className="flex items-center gap-3">
          {status === "Checking..." ? (
            <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500" />
          ) : isOnline ? (
            <FiCheckCircle className="text-xl text-green-600" />
          ) : (
            <FiAlertCircle className="text-xl text-red-600" />
          )}

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Server Status
            </p>

            <p className="font-semibold text-slate-900 dark:text-white">
              {status}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Checking..."
              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
              : isOnline
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          {status === "Checking..."
            ? "Checking"
            : isOnline
            ? "Online"
            : "Offline"}
        </span>
      </div>
    </div>
  );
};

export default BackendStatus;