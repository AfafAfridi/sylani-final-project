import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const createBarChart = (ctx, data, options) => {
  return new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
  });
};

export const createLineChart = (ctx, data, options) => {
  return new Chart(ctx, {
    type: 'line',
    data: data,
    options: options,
  });
};
