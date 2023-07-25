import { Line } from "react-chartjs-2";
import { groupBy } from "lodash";
/**
 * https://react-chartjs-2.js.org/docs/migration-to-v4
 * 번틀 크기를 줄이기 위한 방법으로 확인하였으며 얼마나 줄어드는지는 확인 필요
 **/
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Chart } from "chart.js";

const cpu = ({ id, componentId }: { id: string; componentId: string }) => {
  Chart.register([
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
  ]);
  const dummy = [
    {
      serviceType: "slb",
      serviceName: "slbname1",
      realId: 1,
      realIp: "1.1.1.1",
    },
    {
      serviceType: "slb",
      serviceName: "slbname2",
      realId: 1,
      realIp: "1.1.1.1",
    },
    {
      serviceType: "slb",
      serviceName: "slbname2",
      realId: 3,
      realIp: "1.1.1.1",
    },
    {
      serviceType: "slb",
      serviceName: "slbname2",
      realId: 1,
      realIp: "1.1.1.4",
    },
    {
      serviceType: "l7service",
      serviceName: "l7servicename2",
      realId: 1,
      realIp: "1.1.1.1",
    },
    {
      serviceType: "cslb",
      serviceName: "cslbname3",
      realId: 1,
      realIp: "1.1.1.1",
    },
  ];

  const currentGroupItem = (currentItem, groupKey) => {
    const keys = Object.keys(currentItem);
    const result = {};
    keys.forEach((key: string) => {
      const item = currentItem[key];
      console.log(item, groupKey);
      result[key] = Array.isArray(item)
        ? groupBy(item, groupKey)
        : currentGroupItem(item, groupKey);
    });
    return result;
  };

  const flushGroupBy = (
    items = groupBy(dummy, "serviceType"),
    groupKeys = [, "serviceName", "realId", "realIp"]
  ) => {
    let result = [];
    let currentResult = items;
    groupKeys.forEach((groupKey) => {
      currentResult = currentGroupItem(currentResult, groupKey);
      result = currentResult;
    });
    return result;
  };

  const labels = new Array(20).fill(2020).map((val, index) => val + index);
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 100)),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    id: id,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "차트 타이틀",
      },
    },
    options: {
      scales: {
        y: {
          // defining min and max so hiding the dataset does not change scale range
          min: 2000,
          max: 2100,
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  };

  return (
    <div className={`component`}>
      <div>cpu</div>
      <Line options={options} datasetIdKey={id} data={data}></Line>
    </div>
  );
};

export default cpu;
