import {useEffect, useState} from "react";

export default function IntelGPUDataBase({gpuGeneration, performanceBraket, darkMode}) {
    const [gpuOptions, setGpuOptins] = useState({
        gpuOptionA: null,
        gpuOptionB: null,
        gpuOptionC: null,
        gpuOptionD: null
    })
    useEffect(()=>{
        //GPU LIST

        //Battlemage
        const gpu01 = "| Arc 5 B580 "
        const gpu02 = "| Arc 5 B570 "

        //Alchemist
        const gpu03 = "| Arc 7 A770 16GB "
        const gpu04 = "| Arc 7 A770 08GB "
        const gpu05 = "| Arc 7 A750 "
        const gpu06 = "| Arc 5 A580 "
        const gpu07 = "| Arc 3 A380 "
        const gpu08 = "| Arc 3 A310 "

        if (gpuGeneration === 0 && performanceBraket !== 3) {
            setGpuOptins({
                gpuOptionA: "| none ",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null,
            })
        } else if(gpuGeneration === 0 && performanceBraket === 3) {
            setGpuOptins({
                gpuOptionA: gpu01,
                gpuOptionB: gpu02,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 1 && performanceBraket !== 3 && performanceBraket !== 5) {
        setGpuOptins({
            gpuOptionA: "| none",
            gpuOptionB: null,
            gpuOptionC: null,
            gpuOptionD: null
        })
    } else if(gpuGeneration === 1 && performanceBraket == 3) {
            setGpuOptins({
                gpuOptionA: gpu03,
                gpuOptionB: gpu04,
                gpuOptionC: gpu05,
                gpuOptionD: gpu06
            })
    } else if(gpuGeneration === 1 && performanceBraket == 5) {
            setGpuOptins({
                gpuOptionA: gpu07,
                gpuOptionB: gpu08,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }
        }, [gpuGeneration, performanceBraket])

    return(
        <div>
            <p>Fitting GPU's are:</p>
            <p>{gpuOptions.gpuOptionA} {gpuOptions.gpuOptionB} {gpuOptions.gpuOptionC}|</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: Intel currently only offers GPU's in the 60 and 30 Performance Class.</p>
        </div>
    )
}