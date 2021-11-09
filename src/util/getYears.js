import numbersMapReverse from "./numbersMapReverse";
import numbersMap from "./numbersMap";

const getYears = () => {
    const date = new Date();
        const persianYearString = date.toLocaleDateString('fa-IR',{year: 'numeric' } );

        let currentYear = '';

        for (let i = 0; i < persianYearString.length; i++) {
            currentYear = currentYear + numbersMapReverse[persianYearString[i]]
        }

        currentYear = +currentYear;

        let lastYearsArray = [];

        for (let i = currentYear - 30; i < currentYear + 20; i++) {
            let persianNumber = '';
            for (let j = 0; j < 4; j++) {
                persianNumber = persianNumber + numbersMap[i.toString()[j]]
            }
            lastYearsArray = [{value: i, text: persianNumber},...lastYearsArray]
        }

        // lastYearsArray = [{value: currentYear, text: 'جاری'},...lastYearsArray]

        return {lastYearsArray, currentYear}
}

export default getYears

