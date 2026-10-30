import React, { createContext, useContext, useState, useEffect } from "react";
import { CheckCircle2Icon, AlertCircleIcon, XIcon } from "../icons/index.jsx";

const ToastContext = createContext(null);
let externalToastTrigger = null;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const addToast = (type, message, duration = 3000) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  useEffect(() => {
    externalToastTrigger = addToast;
    return () => {
      externalToastTrigger = null;
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      success: (msg) => externalToastTrigger?.("success", msg),
      error: (msg) => externalToastTrigger?.("error", msg),
      info: (msg) => externalToastTrigger?.("info", msg),
      warning: (msg) => externalToastTrigger?.("warning", msg),
    };
  }
  return {
    success: (msg, dur) => context.addToast("success", msg, dur),
    error: (msg, dur) => context.addToast("error", msg, dur),
    info: (msg, dur) => context.addToast("info", msg, dur),
    warning: (msg, dur) => context.addToast("warning", msg, dur),
  };
};

export const toast = {
  success: (msg, dur) => externalToastTrigger?.("success", msg, dur),
  error: (msg, dur) => externalToastTrigger?.("error", msg, dur),
  info: (msg, dur) => externalToastTrigger?.("info", msg, dur),
  warning: (msg, dur) => externalToastTrigger?.("warning", msg, dur),
};

const toastStyles = {
  success: {
    bg: "bg-slate-900/95 border-emerald-500/40 text-emerald-300",
    icon: <CheckCircle2Icon size={18} className="text-emerald-400 shrink-0" />,
  },
  error: {
    bg: "bg-slate-900/95 border-rose-500/40 text-rose-300",
    icon: <AlertCircleIcon size={18} className="text-rose-400 shrink-0" />,
  },
  info: {
    bg: "bg-slate-900/95 border-cyan-500/40 text-cyan-300",
    icon: <CheckCircle2Icon size={18} className="text-cyan-400 shrink-0" />,
  },
  warning: {
    bg: "bg-slate-900/95 border-amber-500/40 text-amber-300",
    icon: <AlertCircleIcon size={18} className="text-amber-400 shrink-0" />,
  },
};

export const ToastContainer = ({ toasts, onClose }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <aside
      aria-label="Notification alerts"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none"
    >
      {toasts.map(({ id, type, message }) => {
        const style = toastStyles[type] || toastStyles.info;
        return (
          <div
            key={id}
            role="status"
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${style.bg}`}
          >
            <div className="flex items-center gap-2.5 text-sm font-medium">
              {style.icon}
              <span className="text-slate-100">{message}</span>
            </div>
            <button
              type="button"
              onClick={() => onClose(id)}
              className="text-slate-400 hover:text-slate-200 transition-colors cursor-pointer p-1"
              aria-label="Close notification"
            >
              <XIcon size={14} />
            </button>
          </div>
        );
      })}
    </aside>
  );
};

