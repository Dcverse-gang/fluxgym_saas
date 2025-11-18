import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLaunchSession from "../service/useLaunchSession";
import { AppHeader, AppSidebar } from "../components/AppLayout";
import DocumentationPage from "../components/pages/DocumentationPage";
import TutorialsPage from "../components/pages/TutorialsPage";
import CommunityPage from "../components/pages/CommunityPage";
import SupportPage from "../components/pages/SupportPage";

const LaunchSessionPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useLaunchSession();
  const [timerText, setTimerText] = useState("00:00:00");
  const [timerRunning, setTimerRunning] = useState(false);
  const [currentResource, setCurrentResource] = useState<string | null>(null);

  // basic timer similar to original behavior
  useEffect(() => {
    let interval: number | undefined;

    if (timerRunning) {
      const startTime = Date.now();
      interval = window.setInterval(() => {
        const elapsed = Date.now() - startTime;
        const hours = Math.floor(elapsed / 3600000);
        const minutes = Math.floor((elapsed % 3600000) / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);

        setTimerText(
          `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
          )}:${String(seconds).padStart(2, "0")}`
        );
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerRunning]);

  const showOverlay = useMemo(() => {
    if (isError) return true;
    if (isLoading) return true;
    return !data?.fluxgym_url;
  }, [data, isError, isLoading]);



  return (
    <div className="app-interface" id="appInterface">
      <AppHeader
        timerText={timerText}
        timerRunning={timerRunning}
        onBack={() => {
          setTimerRunning(false);
          setTimerText("00:00:00");
          navigate("/");
        }}
      />

      <div className="app-container flex">
        <AppSidebar
          currentResource={currentResource}
          onResourceClick={setCurrentResource}
        />

        {currentResource && (
          <div className="right-panel flex-1 overflow-auto">
            {currentResource === "documentation" && <DocumentationPage />}
            {currentResource === "tutorials" && <TutorialsPage />}
            {currentResource === "community" && <CommunityPage />}
            {currentResource === "support" && <SupportPage />}
          </div>
        )}

        {!currentResource && (
          <main className="main-content flex-1">
            <div className="gradio-container">
              <div className={`loading-overlay ${showOverlay ? "" : "hidden"}`}>
                {isError ? (
                  <div style={{ textAlign: "center", padding: 40 }}>
                    <div style={{ fontSize: 48, marginBottom: 20 }}>⚠️</div>
                    <h3 style={{ color: "#a78bfa", marginBottom: 10 }}>
                      Connection Failed
                    </h3>
                    <p style={{ color: "#9ca3af" }}>
                      Unable to launch FluxGym session
                    </p>
                    <p
                      style={{ color: "#6b7280", fontSize: 14, marginTop: 10 }}
                    >
                      Please check the backend and try again.
                    </p>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => {
                        setTimerRunning(false);
                        setTimerText("00:00:00");
                        refetch();
                      }}
                      style={{
                        marginTop: 30,
                        padding: "12px 30px",
                        fontSize: 14,
                      }}
                    >
                      Retry Connection
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="spinner"></div>
                    <p className="loading-text">Launching CloneX Studio</p>
                    <p className="loading-status">
                      Initializing FluxGym Interface
                    </p>
                    <p className="loading-substatus">
                      This may take a few moments
                    </p>
                  </>
                )}
              </div>

              <iframe
                id="gradioFrame"
                className="gradio-iframe"
                src={data?.fluxgym_url ?? ""}
                onLoad={() => {
                  if (data?.fluxgym_url) {
                    setTimerRunning(true);
                  }
                }}
                allow="camera; microphone; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-forms allow-downloads"
                title="FluxGym Session"
              ></iframe>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default LaunchSessionPage;
