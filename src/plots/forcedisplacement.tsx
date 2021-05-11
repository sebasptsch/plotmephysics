import { useState } from "react";
import Plot from "react-plotly.js";
import { colors, data, defaultValues } from "./commons";

export default function ForceDisplacement() {
  const [errorEnabled, setErrorEnabled] = useState(false);
  return (
    <>
      <input
        type="checkbox"
        checked={errorEnabled}
        onChange={(e) => setErrorEnabled(e.target.checked)}
        id="forcedisplacementcheck"
      />
      <label htmlFor="forcedisplacementcheck">Error Bars</label>
      <Plot
        {...defaultValues("Force Displacement")}
        layout={{
          xaxis: {
            title: "Displacement (mm)",
          },
          yaxis: {
            title: "Force (kN)",
          },
          title: "Force / Displacement",
        }}
        data={data.map((line, index) => ({
          x: line.displacement,
          y: line.force,
          mode: "lines",
          name: line.name,
          line: {
            color: colors[index],
          },
          error_y: {
            type: "constant",
            value: 0.0005,
            visible: errorEnabled,
          },
        }))}
      />
    </>
  );
}