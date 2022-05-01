import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'

function VolumeChart({ google, volumeData }) {
  const [chart, setChart] = useState(null)

  useEffect(() => {
    if (google) {
      const data = google.visualization.arrayToDataTable(volumeData, true)
      const options = {
        legend: 'none',
        width: 1800,
        height: 150,
      }

      if (!chart) {
        const newChart = new google.visualization.ColumnChart(document.getElementById('volume-chart-div'))
        newChart.draw(data, options)
        setChart(newChart)
      } else {
        chart.draw(data, options)
      }
    }
  }, [google, chart, volumeData])

  return (
    <>
      {!google && <Spinner animation="border" />}
      <div id="volume-chart-div" className={!google ? 'd-none' : ''} />
    </>
  )
}

export default VolumeChart
