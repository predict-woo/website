import { useEffect, useRef, useState } from "react";
import { colors } from "theme";
import { useLocation } from "wouter";

const Welcome = () => {
  const [text, setText] = useState(`starting Web Services

HIMEM is testing extended memory... done.

Version 6.22.2220

Accessing from <ipAddress>

Calculating Location ...

Accessing from <ipLocation>

Coordinates : <coordinates>

Internet Service Provider : <isp>

EXTRACTING HARDWARE INFO

User Agent: <userAgent>

Battery Status: <battery>

Device RAM: <ram>

GPU: <gpu>

###### INFORMATION FETCHED ######


Click to Enter Website
C:\>`);

  const [index, setIndex] = useState(0);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [_, setLocation] = useLocation();

  const fetchIPAddress = async () => {
    const response = await fetch("https://api64.ipify.org?format=json");
    console.log(response);
    const data = await response.json();
    const ipText = data.ip;

    const locationResponse = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent("http://ip-api.com/json/" + data.ip)
    );
    const location = await locationResponse.json();
    const locationText =
      location.country + ", " + location.regionName + ", " + location.city;
    const coordinatesText = "(" + location.lat + ", " + location.lon + ")";
    const ispText = location.isp;

    setText((prev) =>
      prev
        .replace("<ipAddress>", ipText)
        .replace("<ipLocation>", locationText)
        .replace("<coordinates>", coordinatesText)
        .replace("<isp>", ispText)
    );
  };

  const fetchHardwareInfo = async () => {
    const anyNavigator = navigator as any;

    const userAgentText = navigator.userAgent;
    const battery = await anyNavigator.getBattery();
    const batteryText =
      battery.level * 100 +
      "% " +
      (battery.charging ? "Charging" : "Not Charging") +
      " (" +
      battery.dischargingTime +
      "s until full)";
    const ramText = anyNavigator.deviceMemory + "GB";
    setText((prev) =>
      prev
        .replace("<userAgent>", userAgentText)
        .replace("<battery>", batteryText)
        .replace("<ram>", ramText)
    );
  };

  function getUnmaskedInfo(gl: any) {
    var unMaskedInfo = {
      renderer: "",
      vendor: "",
    };

    var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (dbgRenderInfo != null) {
      unMaskedInfo.renderer = gl.getParameter(
        dbgRenderInfo.UNMASKED_RENDERER_WEBGL
      );
      unMaskedInfo.vendor = gl.getParameter(
        dbgRenderInfo.UNMASKED_VENDOR_WEBGL
      );
    }

    return unMaskedInfo;
  }

  const fetchPerformanceInfo = async () => {
    var gl = canvas.current?.getContext("experimental-webgl");
    const gpuText = gl ? getUnmaskedInfo(gl).renderer : "Unknown";
    setText((prev) => prev.replace("<gpu>", gpuText));
  };

  useEffect(() => {
    fetchIPAddress();
    fetchHardwareInfo();
    fetchPerformanceInfo();
  }, []);

  setTimeout(() => {
    if (index < text.length) setIndex(index + 1);
  }, 5);

  return (
    <>
      <textarea
        css={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          background: colors.blue,
          color: "white",
          fontSize: "20px",
          fontFamily: "DungGeunMo",
          resize: "none",
          border: "none",
          outline: "none",
          padding: "10px",
          boxSizing: "border-box",
          overflow: "wrap",
          whiteSpace: "pre",
          overscrollBehavior: "none",
          zIndex: 100,
        }}
        value={text.slice(0, index)}
        wrap="hard"
        onClick={() => {
          if (index >= text.length) {
            console.log("set location to /home");
            setLocation("/home");
          }
        }}
      ></textarea>
      <canvas css={{ display: "none" }} ref={canvas}></canvas>
    </>
  );
};

export default Welcome;
