import { Line } from "react-chartjs-2";
import { TimeScale, PointElement, LineElement, Title } from "chart.js";
import { Chart } from "chart.js";
import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getListTest } from "../../common/query";
import { convertDateString } from "../../../utils/theme/time";

const memory = ({ id, componentId }: { id: string; componentId: string }) => {
  /** chart에 register 해두면, 전역 설정으로ㅓ 들어가므로, 공통코드에서 설정하도록 변경 필요 */
  Chart.register([TimeScale]);
  const chartRef = useRef();
  const DATA_COUNT = 7;

  const { isLoading, data: queryResponse = 0 } = getListTest<number>({
    url: "",
    queryId: ["component", id],
    callback: (response) => {
      return response;
    },
    queryProps: { refetchInterval: 3000, enabled: true, staleTime: 1000 },
  });

  const [dataArray, setDataArray] = useState<{ x: string; y: number }[]>(
    new Array(1).fill(new Date()).map((val, index) => {
      if (index === 0) {
        return {
          x: convertDateString(val),
          y: Math.floor(Math.random() * 100),
        };
      } else {
        const now = new Date(val);
        now.setFullYear(now.getFullYear() + 1);

        return {
          x: convertDateString(now),
          y: Math.floor(Math.random() * 100),
        };
      }
    })
  );

  useEffect(() => {
    if (!queryResponse) return;

    updateData();
  }, [queryResponse]);
  // timeSeries data sample
  //   datasets: [{
  //     data: [{
  //         x: '2021-11-06 23:39:30',
  //         y: 50
  //     }, {
  //         x: '2021-11-07 01:00:28',
  //         y: 60
  //     }, {
  //         x: '2021-11-07 09:00:28',
  //         y: 20
  //     }]
  // }],

  const data = useMemo(
    () => ({
      datasets: [
        {
          name: "A",
          data: dataArray,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
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
        // animations: {
        //   tension: {
        //     duration: 500,
        //     easing: "linear",
        //     from: 1,
        //     to: 0,
        //     loop: true,
        //   },
        // },
        scales: {
          customScaleId: {
            x: {
              bounds: "ticks",
              type: "time",
              time: {
                unit: "year",
                // displayFormats: {
                //   quarter: "MMM YYYY",
                // },
              },
              // max: 100,
              // ticks: {
              //   count: 5,
              // },
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
        },
      },
    }),
    []
  );

  const updateData = () => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }
    addData(chart);

    // setInterval(() => {
    //   addData(chart);
    // }, 1000);
  };

  const addData = (chart: Chart) => {
    const data = chart.data;

    if (data.datasets.length > 0) {
      for (let index = 0; index < data.datasets.length; ++index) {
        const lastValue = data.datasets[index].data?.at(-1).x;
        const now = new Date(lastValue);
        now.setFullYear(now.getFullYear() + 1);
        data.datasets[index].data.push({
          x: convertDateString(now),
          y: queryResponse,
        });

        if (index === 0) {
          const labels = new Set(
            data.datasets[index].data.map((item) => item.x)
          );

          chart.data.labels = Array.from(labels);
        }
      }

      chart.update();
    }
  };

  return (
    <div className={`component`}>
      <div>memory</div>
      {/* <Button sx={commonSX} onClick={addData} defaultValue="add Data" /> */}
      <Line
        ref={chartRef}
        // onClick={handleClick}
        options={config}
        datasetIdKey={id}
        data={data}
      ></Line>
    </div>
  );
};

export default memory;
