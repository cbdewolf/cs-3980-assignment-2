const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"

const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

const displayData = (data) => {
    const tbody = document.getElementById("data-rows")
    tbody.innerHTML = ""
    const sortedData = data.data.sort((a, b) => a.Year - b.Year);
    const rows = sortedData.map((item) => {
        return `<tr>
                    <td>${item.Year}</td>
                    <td>${item.Population.toLocaleString()}</td>
                </tr>`
    })
    tbody.innerHTML = rows.join(" ")
}
(async () => {
    const data = await getData()
    displayData(data)
})()
