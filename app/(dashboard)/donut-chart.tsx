'use client';

import ReactApexChart from "react-apexcharts";

import  Select  from 'react-select';

import { useState, useRef, useEffect } from "react";

import { 
    resetStatus,
    getDashboardData,
    selectStatus,
    selectData,
  } from '@/lib/features/document_ocr/dashboard.slice'
  
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

export function DonutChart() {

    const dispatch = useAppDispatch();

    const status = useAppSelector(selectStatus);
    const data = useAppSelector(selectData);

    const initialized = useRef(false);

    const donutChartConfig = {
          
      series: data.donutValues,
      options: {
        chart: {
          type: 'donut',
        },
        labels: data.donutLabels,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: 'Total Amount by Currency',
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
    };

    const [donutChart, setDonutChart] = useState(donutChartConfig);

    useEffect(() => {
    
        if (!initialized.current) {
            initialized.current = true;
        }

        console.log("Donut Chart Values >> ", data.donutLabels);
        setDonutChart(donutChartConfig);

      }, [data]);

    return(
        <div>
            <div>
                <ReactApexChart options={donutChart.options} series={donutChart.series} type="donut" height={370} />
            </div>
        </div>
    );
}