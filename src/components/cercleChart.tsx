"use client"
import { ChartData } from "chart.js"
import { FC } from "react"
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip)

interface CercleChartProps {
  data: ChartData<"pie", number[], unknown>
}

const CercleChart: FC<CercleChartProps> = ({ data }) => {
  return <Pie data={data} />
}

export default CercleChart
