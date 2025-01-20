'use client';

import ReactApexChart from "react-apexcharts";

import { useState, useRef, useEffect } from "react";

import { 
    resetStatus,
    getDashboardData,
    selectStatus,
    selectData,
  } from '@/lib/features/document_ocr/dashboard.slice'
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export function ColumnsChart(props: any) {

    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);
    const data = useAppSelector(selectData);

    const initialized = useRef(false);

    const chartConfig = {
          
        series: [{
          name: 'Expenses',
          data: data.values,
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 0,
              // distributed: true,
              dataLabels: {
                position: 'top', // top, center, bottom
              },
            }
          },
          colors: ['#616C38'],
          dataLabels: {
            enabled: true,
            formatter: function (val : any) {
              return props.currency.label.slice(0, 1) + ' ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            offsetY: -30,
            style: {
              fontSize: '17px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: data.labels,
            position: 'bottom',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            labels: {
              show: true,
              formatter: function (val: any) {
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              }
            }
          
          },
          title: {
            text: 'Total Expenses by Category',
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
    };

    const [chart, setChart] = useState(chartConfig);

    useEffect(() => {
    
        if (!initialized.current) {
            initialized.current = true;
        }
        console.log("Chart Values >> ", chartConfig.series[0].data);

        setChart(chartConfig);

      }, [data]);

    return(
        <div>
            <div>
                
                <ReactApexChart options={chart.options} series={chart.series} type="bar" height={355} />
            </div>
        </div>
    );
}