import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Chart } from "chart.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@mui/material";
import { commonSX } from "../../common/styles";

const memory = ({ id, componentId }: { id: string; componentId: string }) => {
  Chart.register([
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  ]);
  const chartRef = useRef();
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

  const [labels, setLabels] = useState<number[]>(
    new Array(3)
      .fill(new Date().getFullYear())
      .map((val, index) => new Date().setFullYear(val + 1))
  );

  const data = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => Math.floor(Math.random() * 100)),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.4,
        },
        {
          label: "Dataset 2",
          data: labels.map(() => Math.floor(Math.random() * 100)),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
          tension: 0.2,
        },
      ],
    }),
    []
  );

  const config = useMemo(
    () => ({
      type: "line",
      responsive: true,
      id: id,
      options: {
        scales: {
          x: {
            type: "timeseries",
            max: 100,
            ticks: {
              count: 5,
            },
          },
        },
        // animations: {
        //   radius: {
        //     duration: 400,
        //     easing: "linear",
        //     loop: (context: any) => context.active,
        //   },
        // },
        // hoverRadius: 12,
        // hoverBackgroundColor: "yellow",
        // interaction: {
        //   mode: "nearest",
        //   intersect: false,
        //   axis: "x",
        // },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    }),
    []
  );

  const handleClick = () => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    setInterval(() => {
      addData(chart);
    }, 1000);
  };

  const addData = (chart: Chart) => {
    const data = chart.data;

    if (data.datasets.length > 0) {
      const dataLabels = data.labels as number[];
      const lastValue = dataLabels.at(-1);
      if (!lastValue) return;

      data.labels = [...dataLabels, lastValue + 1];

      for (let index = 0; index < data.datasets.length; ++index) {
        data.datasets[index].data.push(Math.floor(Math.random() * 100));
        // data.datasets[index].data.shift();
      }

      // data.labels.shift();
      console.log(data.labels, data.datasets[0].data);
      chart.update();
    }
  };

  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);
  return (
    <div className={`component`}>
      <div>memory</div>
      {/* <Button sx={commonSX} onClick={addData} defaultValue="add Data" /> */}
      <Line
        ref={chartRef}
        onClick={handleClick}
        options={config}
        datasetIdKey={id}
        data={data}
      ></Line>
    </div>
  );
};

export default memory;
