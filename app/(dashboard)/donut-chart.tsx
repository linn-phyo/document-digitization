'use client';

import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
)
import { ApexOptions } from "apexcharts";

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

    const series = data.donutValues;

    const options: ApexOptions = {
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
    };

    const [donutChartOption, setDonutChartOption] = useState(options);
    const [donutChartSeries, setDonutChartSeries] = useState(series);

    useEffect(() => {
    
        if (!initialized.current) {
            initialized.current = true;
        }

        console.log("Donut Chart Values >> ", data.donutLabels);
        setDonutChartOption(options);
        setDonutChartSeries(series);

      }, [data]);

    return(
        <div>
            <div>
                <ReactApexChart options={donutChartOption} series={donutChartSeries} type="donut" height={370} />
            </div>
        </div>
    );
}