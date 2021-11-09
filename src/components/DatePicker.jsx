import { useEffect, useState } from "react"
import getYears from "../util/getYears"
import monthsSelectOptions from "../util/monthsSelectOptions"
import jalali from "../util/jalali"
import numbersMap from "../util/numbersMap"
import turnNumberToPersian from "../util/turnNumberToPersian"

const DatePicker = () => {

    const [years, setYears] = useState([])
    const [currentYearState, setCurrentYearState] = useState(null)

    const [days, setDays] = useState(Array.from(Array(32).keys()).slice(1))


    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')

    useEffect(() => {
        const { lastYearsArray, currentYear } = getYears()
        setYears(lastYearsArray)
        setCurrentYearState(currentYear)
        console.log(days)
    }, [])

    const handleYearChange = (event) => {
        const daysInMonth = jalali.daysInMonth(event.target.value + '-' + month ? month : monthsSelectOptions[0].value)
        setYear(event.target.value)
        setDays(Array.from(Array(daysInMonth + 1).keys()).slice(1))
    }

    const handleMonthChange = (event) => {
        const daysInMonth = jalali.daysInMonth((year ? year : currentYearState) + '-' + event.target.value)
        setMonth(event.target.value)
        setDays(Array.from(Array(daysInMonth + 1).keys()).slice(1))
    }

    return (
        <div>
            <select value={year} onChange={handleYearChange}>
                <option value="" disabled selected>سال</option>
                {
                    years.map(({value, text}) => (
                        <option key={value} value={value}>
                            {text}
                        </option>
                    ))
                }
            </select>
            <select value={month} onChange={handleMonthChange}>
                <option value="" disabled selected>ماه</option>
                {
                    monthsSelectOptions.map(({value, text}) => (
                        <option key={value} value={value}>
                            {text}
                        </option>
                    ))
                }
            </select>
            <select value={day} onChange={e => setDay(e.target.value)}>
                <option value="" disabled selected>روز</option>
                {
                    days.map(num => (
                        <option key={num} value={num}>
                            {turnNumberToPersian(num)}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DatePicker