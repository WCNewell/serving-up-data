// https://git.heroku.com/serene-scrubland-91543.git

const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3000
app.use(cors())

const cohorts = [
    {
    id: 1,
    cohortName: "17-01-WD-DP",
    cohortCode: "g100",
    numberOfStudents: "28"
    },
    {
    id: 2,
    cohortName: "17-01-DS-GT",
    cohortCode: "g105",
    numberOfStudents: "24"   
    },
    {
    id: 3,
    cohortName: "17-02-WD-PX",
    cohortCode: "g109",
    numberOfStudents: "30"   
    },
    {
    id: 4,
    cohortName: "17-03-WD-BD",
    cohortCode: "g110",
    numberOfStudents: "29"
    }
]

function findById(data, id) {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id == id) {
            return data[i]
        }
    }
    return null
}

app.get("/", (request, response) => {
    response.status(200)
    response.json({data: cohorts})
})

app.get("/:id", (request, response) => {
    let record = findById(cohorts, request.params.id)
    if(!record) {
        response.status(404)
        response.json({
            error: {
                message: "No record found"
            }
        })
    }
    response.status(200)
    response.json({data: record})
})

app.listen(PORT)

