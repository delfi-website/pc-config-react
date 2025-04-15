import {useEffect, useState} from "react";
import "../App.css"

export default function IntelCPUDataBase({generation, performance, iGpu, unlocked, darkMode}) {
    const [cpuOptions, setCpuOptions] = useState({
        cpuOptionA: null,
        cpuOptionB: null,
        cpuOptionC: null,
        cpuOptionD: null,
        cpuOptionE: null
    });

    useEffect(() => {

        // Intel Core Ultra 200
        const cpu01 = "Core Ultra 9 285K"
        const cpu02 = "Core Ultra 9 285"
        const cpu03 = "Core Ultra 7 265K"
        const cpu04 = "Core Ultra 7 265KF"
        const cpu05 = "Core Ultra 7 265"
        const cpu06 = "Core Ultra 7 265F"
        const cpu07 = "Core Ultra 5 245K"
        const cpu08 = "Core Ultra 5 245KF"
        const cpu09 = "Core Ultra 5 245"
        const cpu10 = "Core Ultra 5 235"
        const cpu11 = "Core Ultra 5 225"
        const cpu12 = "Core Ultra 5 225F"

        //Intel Core 14th Gen
        const cpu13 = "Core i9 14900K"
        const cpu14 = "Core i9 14900KF"
        const cpu15 = "Core i9 14900"
        const cpu16 = "Core i9 14900F"
        const cpu17 = "Core i7 14700K"
        const cpu18 = "Core i7 14700KF"
        const cpu19 = "Core i7 14700"
        const cpu20 = "Core i7 14700F"
        const cpu21 = "Core i5 14600K"
        const cpu22 = "Core i5 14600KF"
        const cpu23 = "Core i5 14600"
        const cpu24 = "Core i5 14500"
        const cpu25 = "Core i5 14400"
        const cpu26 = "Core i5 14400F"
        const cpu27 = "Core i3 14100"
        const cpu28 = "Core i3 14100F"

        //Intel Core 13th Gen
        const cpu29 = "Core i9 13900K"
        const cpu30 = "Core i9 13900KF"
        const cpu31 = "Core i9 13900"
        const cpu32 = "Core i9 13900F"
        const cpu33 = "Core i7 13700K"
        const cpu34 = "Core i7 13700KF"
        const cpu35 = "Core i7 13700"
        const cpu36 = "Core i7 13700F"
        const cpu37 = "Core i5 13600K"
        const cpu38 = "Core i5 13600KF"
        const cpu39 = "Core i5 13600"
        const cpu40 = "Core i5 13500"
        const cpu41 = "Core i5 13400"
        const cpu42 = "Core i5 13400F"
        const cpu43 = "Core i3 13100"
        const cpu44 = "Core i3 13100F"

        //Intel Core 12th Gen
        const cpu45 = "Core i9 12900K"
        const cpu46 = "Core i9 12900KF"
        const cpu47 = "Core i9 12900"
        const cpu48 = "Core i9 12900F"
        const cpu49 = "Core i7 12700K"
        const cpu50 = "Core i7 12700KF"
        const cpu51 = "Core i7 12700"
        const cpu52 = "Core i7 12700F"
        const cpu53 = "Core i5 12600K"
        const cpu54 = "Core i5 12600KF"
        const cpu55 = "Core i5 12600"
        const cpu56 = "Core i5 12500"
        const cpu57 = "Core i5 12400"
        const cpu58 = "Core i5 12400F"
        const cpu59 = "Core i3 12300"
        const cpu60 = "Core i3 12100"
        const cpu61 = "Core i3 12100F"

        //Older
        if (generation === 4){
            setCpuOptions({
                cpuOptionA: "Used Market for Core i Series",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }

        // The HELL of if statements... AGAIN

        //Intel Core Ultra 200
        if (generation === 0 && performance === 0 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu01,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 0 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu02,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 1 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu03,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 1 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu04,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 1 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu05,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 1 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu06,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 2 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu07,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 2 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu08,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 2 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu09,
                cpuOptionB: cpu10,
                cpuOptionC: cpu11,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 0 && performance === 2 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu12,
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
        //Intel Core 14th Gen
        } else if (generation === 1 && performance === 0 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu13,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 0 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu14,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 0 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu15,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 0 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu16,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 1 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu17,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 1 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu18,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 1 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu19,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 1 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu20,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }  else if (generation === 1 && performance === 2 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu21,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 2 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu22,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 2 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu23,
                cpuOptionB: cpu24,
                cpuOptionC: cpu25,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance === 2 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu26,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance ===3 && unlocked === 1) {
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance ===3 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu27,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 1 && performance ===3 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu28,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }
        //Intel Core 13th Gen
        else if (generation === 2 && performance === 0 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu29,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 0 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu30,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 0 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu31,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 0 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu32,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu33,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu34,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu35,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 1 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu36,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }  else if (generation === 2 && performance === 2 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu37,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 2 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu38,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 2 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu39,
                cpuOptionB: cpu40,
                cpuOptionC: cpu41,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance === 2 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu42,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance ===3 && unlocked === 1) {
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance ===3 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu43,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 2 && performance ===3 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu44,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }
        //Intel Core 12th gen
        else if (generation === 3 && performance === 0 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu45,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 0 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu46,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 0 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu47,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 0 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu48,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 1 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu49,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 1 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu50,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 1 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu51,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 1 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu52,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }  else if (generation === 3 && performance === 2 && unlocked === 1 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu53,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 2 && unlocked === 1 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu54,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 2 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu55,
                cpuOptionB: cpu56,
                cpuOptionC: cpu57,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance === 2 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu58,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance ===3 && unlocked === 1) {
            setCpuOptions({
                cpuOptionA: "none",
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance ===3 && unlocked === 0 && iGpu === 1) {
            setCpuOptions({
                cpuOptionA: cpu59,
                cpuOptionB: cpu60,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        } else if (generation === 3 && performance ===3 && unlocked === 0 && iGpu === 0) {
            setCpuOptions({
                cpuOptionA: cpu61,
                cpuOptionB: null,
                cpuOptionC: null,
                cpuOptionD: null,
                cpuOptionE: null
            })
        }

    }, [generation, performance, iGpu, unlocked]);
    return(
        <div>
            <p>Fitting CPU's are:</p>
            <p>{cpuOptions.cpuOptionA} {cpuOptions.cpuOptionB} {cpuOptions.cpuOptionC} {cpuOptions.cpuOptionD} {cpuOptions.cpuOptionE}</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: Some CPU's have an "S" variant with higher Base Clocks and some have a "T" Variant with lower Base Clocks.</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: Early Production Units of 13th and 14th Generation Intel Core i Series CPU's had Issues with bad CPU Microcode and Oxidation.</p>
        </div>
    )
}