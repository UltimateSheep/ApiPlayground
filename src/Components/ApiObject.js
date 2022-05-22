const ApiObject = [
    // for allowed content
    // { 
    //     title: "",
    //     nicK: "",
    //     color: ""
    // }
    {
        title: 'Covid Api (Thailand)',
        path: '/covid-th',
        content: [
            {
                title: 'today covid',
                path: '/today',
                allowed: [
                    {
                        title: "new_case",
                        nick: "New Case",
                        color: "warning"
                    },
                    {
                        title: "total_case",
                        nick: "Total Case",
                        color: "success"
                    },
                    {
                        title: "new_death",
                        nick: "New Death",
                        color: "danger"
                    },
                    {
                        title: "total_death",
                        nick: "Total Death",
                        color: "secondary"
                    },
                    {
                        title: "new_recovered",
                        nick: "New Recovered",
                        color: "success"
                    },
                    {
                        title: "total_recovered",
                        nick: "Total Recovered",
                        color: "success"
                    },
                    {
                        title: "update_date",
                        nick: "Update",
                        color: "info"
                    }
                ]
            },
            {
                title: 'today covid by provinces',
                path: '/today-provinces',
                allowed: [
                    {
                        title: "province",
                        nick: "Province",
                        color: "success"
                    },
                    {
                        title: "new_case",
                        nick: "New Case",
                        color: "warning"
                    },
                    {
                        title: "total_case",
                        nick: "Total Case",
                        color: "success"
                    },
                    {
                        title: "new_death",
                        nick: "New Death",
                        color: "danger"
                    },
                    {
                        title: "total_death",
                        nick: "Total Death",
                        color: "secondary"
                    },
                    {
                        title: "update_date",
                        nick: "Update",
                        color: "info"
                    }
                ]
            }
        ]
    },
    {
        title: 'Covid Api (International)',
        path: '/covid',
        content: [
            {
                title: 'today covid',
                path: '/today',
                allowed: [
                    {
                        title: "cases",
                        nick: "Total Cases",
                        color: "primary"
                    },
                    {
                        title: "todayCases",
                        nick: "Cases Today",
                        color: "warning"
                    },
                    {
                        title: "deaths",
                        nick: "Total Deaths",
                        color: "secondary"
                    },
                    {
                        title: "todayDeaths",
                        nick: "Today Deaths",
                        color: "danger"
                    },
                    {
                        title: "recovered",
                        nick: "Total Recovered",
                        color: "info"
                    },
                    {
                        title: "todayRecovered",
                        nick: "Today Recovered",
                        color: "success"
                    },
                    {
                        title: "active",
                        nick: "Active",
                        color: "warning"
                    },
                    {
                        title: "critical",
                        nick: "Critical",
                        color: "danger"
                    },
                ]
            },
            {
                title: 'today covid (US)',
                path: '/today-states',
                allowed: [
                    {
                        title: "state",
                        nick: "State",
                        color: "primary"
                    },
                    {
                        title: "cases",
                        nick: "Total Cases",
                        color: "info"
                    },
                    {
                        title: "todayCases",
                        nick: "Cases Today",
                        color: "warning"
                    },
                    {
                        title: "deaths",
                        nick: "Total Deaths",
                        color: "secondary"
                    },
                    {
                        title: "todayDeaths",
                        nick: "Today Deaths",
                        color: "danger"
                    },
                    {
                        title: "recovered",
                        nick: "Total Recovered",
                        color: "info"
                    },
                    {
                        title: "active",
                        nick: "Active",
                        color: "warning"
                    },
                ]
            },
            {
                title: 'today covid (Search by name)',
                path: '/today-state',
                allowed: [
                    {
                        title: "state",
                        nick: "State",
                        color: "primary"
                    },
                    {
                        title: "cases",
                        nick: "Total Cases",
                        color: "info"
                    },
                    {
                        title: "todayCases",
                        nick: "Cases Today",
                        color: "warning"
                    },
                    {
                        title: "deaths",
                        nick: "Total Deaths",
                        color: "secondary"
                    },
                    {
                        title: "todayDeaths",
                        nick: "Today Deaths",
                        color: "danger"
                    },
                    {
                        title: "recovered",
                        nick: "Total Recovered",
                        color: "info"
                    },
                    {
                        title: "active",
                        nick: "Active",
                        color: "warning"
                    },
                ]
            },
        ]
    },
]



export default ApiObject

