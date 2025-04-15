import { useState, useEffect } from "react";
import "../App.css"

export default function AMDCPUDataBase({ generation, performance, threeDVCache, darkMode }) {
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
        const cpu35 = "Ryzen 7 5700X3D"
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

        //Ryzen 9000
        if (generation === 0 && performance === 0 && threeDVCache === 1) {
            setCpuOptions({
                cpuOptionA:cpu01,
                cpuOptionB:cpu03,
                cpuOptionC:null,
                cpuOptionD:null,
                cpuOptionE:null
            })
        } else if (generation === 0 && performance === 0 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu02,
                cpuOptionB: cpu04,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 1 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: cpu05,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            }) }
          else if (generation === 0 && performance === 1 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu06,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 2 && threeDVCache === 0){
                setCpuOptions({
                    cpuOptionA: cpu07,
                    cpuOptionB: cpu08,
                    cpuOptionC: null,
                    cpuOptionD: null,
                    cpuOptionE: null
                })
          } else if (generation === 0 && performance === 2 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 3) {
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
            //Ryzen 7000/8000
        } else if (generation === 1 && performance === 0 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: cpu09,
                cpuOptionB: cpu11,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 0 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu10,
                cpuOptionB: cpu12,
                cpuOptionC: cpu13,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 1 && threeDVCache === 1){
        setCpuOptions({
            cpuOptionA: cpu14,
            cpuOptionB: null,
            cpuOptionC: null,
            cpuOptionD: null,
            cpuOptionE: null
        })
    } else if (generation === 1 && performance === 1 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu15,
                cpuOptionB: cpu16,
                cpuOptionC: cpu20,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 2 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu17,
                cpuOptionB: cpu18,
                cpuOptionC: cpu19,
                cpuOptionD: cpu21,
                cpuOptionE: cpu22
            })
        } else if (generation === 1 && performance === 2 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 3 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu23,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 3 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
            //Ryzen 5000
        } else if (generation === 2 && performance === 0 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 0 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu24,
                cpuOptionB: cpu25,
                cpuOptionC: cpu26,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: cpu27,
                cpuOptionB: cpu35,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu28,
                cpuOptionB: cpu29,
                cpuOptionC: cpu30,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 2 && threeDVCache === 1){
            setCpuOptions({
                cpuOptionA: cpu31,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 2 && threeDVCache === 0){
            setCpuOptions({
                cpuOptionA: cpu32,
                cpuOptionB: cpu33,
                cpuOptionC: cpu34,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 3){
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }


    }, [generation, performance, threeDVCache]);



    return (
        <div>
            <p>Fitting CPUs are:</p>
            <p>{cpuOptions.cpuOptionA} {cpuOptions.cpuOptionB} {cpuOptions.cpuOptionC} {cpuOptions.cpuOptionD} {cpuOptions.cpuOptionE}</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: Some Ryzen 5000 and older CPU's dont contain integrated Graphics. Please check the Manufactures Website.</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: The Ryzen 5 7500F does not contain integrated Graphics.</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: With the Expetion of Ryzen 7000 and Ryzen 5000 3D V-Cache CPU's,  all AMD Ryzen CPU's are overclockable in an X or B Series Motherboard.</p>
        </div>
    );
}
