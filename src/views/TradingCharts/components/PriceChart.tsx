import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

function PriceChart({ google, priceData }) {
  const [chart, setChart] = useState(null)

  useEffect(() => {
    if (google) {
      const data = google.visualization.arrayToDataTable(priceData, true)
      const options = {
        legend: 'none',
        width: 1800,
        height: 500,
      }

      if (!chart) {
        const newChart = new google.visualization.CandlestickChart(document.getElementById('price-chart-div'))
        newChart.draw(data, options)
        setChart(newChart)
      } else {
        chart.draw(data, options)
      }
    }
  }, [google, chart, priceData])

  return (
    <>
      {!google && <Spinner animation="border" />}
      <div id="price-chart-div" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default PriceChart
