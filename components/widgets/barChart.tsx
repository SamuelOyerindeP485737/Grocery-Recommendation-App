/* App.js */
import React, {Component, useEffect} from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export type barChart = {
    grocery_name: string,
    time: number
}

type barChartValues = {
    value: number;
}

type barChartVariables = {
    pageNumber: number;
    BarChart: barChart[];
}
export default function BarchartWidget({BarChart, pageNumber} : barChartVariables) {
    let manualInterval: number = 1;
    
    console.log("barchart rendered")
    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"))
        },500);
    })
    
    let datapoints = BarChart.map(value => ({y: value.time, label: value.grocery_name}))
    
    let highestValue = Math.max(...BarChart.map(value => value.time));
    
    
    function calculateInterval(value: number) {
        let interval: number = 0;
        
        if (value >= 365) {
            interval = 365;
        }
        else if(value >= 30) {
            interval = 30;
        }
        else if(value >= 7) {
            interval = 7;

        }
        else if (value < 7) {
            interval = 1;
        }
        return interval;
    }

    manualInterval = calculateInterval(highestValue);
    
    const options = {
        animationEnabled: true,
        theme: "light2",
        height: 350,
        backgroundColor: "#faf7f7",
        title:{
            text: "Grocery items by expiry date"
        },
        axisX: {
            title: "Grocery item",
            reversed: true,

        },
        axisY: {
            title: "Time",
            includeZero: true,
            interval: manualInterval,
            labelFormatter: addSymbols
        },
        data: [{
            type: "bar",
            color: "#835858",
            dataPoints: datapoints
            
        }]
    }
    return (
        <div className="min-w-0 flex-1 px-4 ">
            <CanvasJSChart options = {options}
                /* onRef={ref => this.chart = ref} */

            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
    );
    function addSymbols(e : barChartValues){
        var suffixes = ["d","wk","mon","yr"];
        /*var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);*/

        var suffix = suffixes[0];
        var newValue;
        
        if(e.value >= 365) {
            newValue = Math.floor(e.value/365)
            suffix = suffixes[3]
        }
        else if(e.value >= 30) {
            newValue = Math.floor(e.value/30)


            suffix = suffixes[2]
        }
        else if(e.value >= 7) {
            newValue = Math.floor(e.value/7);

            suffix = suffixes[1]
        }
        else if (e.value < 7) {
            newValue = Math.floor(e.value);

            suffix = suffixes[0]
        }

        return CanvasJS.formatNumber(newValue) + suffix;
    }
    
        
    
    
}
                             