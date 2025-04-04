import { useState, useEffect } from "react";

export default function AMDCPUDataBase({ generation, performance, threeDVCache }) {
    const [cpuOptions, setCpuOptions] = useState({
        cpuOptionA: null,
        cpuOptionB: null,
        cpuOptionC: null,
        cpuOptionD: null,
        cpuOptionE: null
    });

    useEffect(() => {
        //CPU List

        //Ryzen 9000
        const cpu01 = "Ryzen 9 9950X3D"
        const cpu02 = "Ryzen 9 9950X"
        const cpu03 = "Ryzen 9 9900X3D"
        const cpu04 = "Ryzen 9 9000X"
        const cpu05 = "Ryzen 7 9800X3D"
        const cpu06 = "Ryzen 7 9700X"
        const cpu07 = "Ryzen 5 9600X"
        const cpu08 = "Ryzen 5 9600"

        //Ryzen 8000
        const cpu20 = "Ryzen 7 8700G"
        const cpu21 = "Ryzen 5 8600G"
        const cpu22 = "Ryzen 5 8500G"
        const cpu23 = "Ryzen 3 8300G"

        //Ryzen 7000
        const cpu09 = "Ryzen 9 7950X3D"
        const cpu10 = "Ryzen 9 7950X"
        const cpu11 = "Ryzen 9 7900X3D"
        const cpu12 = "Ryzen 9 7900X"
        const cpu13 = "Ryzen 9 7900"
        const cpu14 = "Ryzen 7 7800X3D"
        const cpu15 = "Ryzen 7 7700X"
        const cpu16 = "Ryzen 7 7700"
        const cpu17 = "Ryzen 5 7600X"
        const cpu18 = "Ryzen 5 7600"
        const cpu19 = "Ryzen 5 7500F"

        //Ryzen 5000
        const cpu24 = "Ryzen 9 5950X"
        const cpu25 = "Ryzen 9 5900XT"
        const cpu26 = "Ryzen 9 5900X"
        const cpu27 = "Ryzen 7 5800X3D"
        const cpu28 = "Ryzen 7 5800XT"
        const cpu29 = "Ryzen 7 5800X"
        const cpu30 = "Ryzen 7 5700X"
        const cpu31 = "Ryzen 5 5600X3D"
        const cpu32 = "Ryzen 5 5600XT"
        const cpu33 = "Ryzen 5 5600X"
        const cpu34 = "Ryzen 5 5600"




        //Older AMD
        if (generation === 3) {
            setCpuOptions({
                cpuOptionA: "Used Market for Ryzen 1000, 2000 and 3000",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }

        // The HELL of if statements


    }, [generation, performance, threeDVCache]);



    return (
        <div>
            <p>Fitting CPUs are:</p>
            <p>{cpuOptions.cpuOptionA} {cpuOptions.cpuOptionB} {cpuOptions.cpuOptionC}</p>
        </div>
    );
}
