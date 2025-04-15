import {useEffect, useState} from "react";

export default function AMDGPUDataBase({gpuGeneration, performanceBraket, darkMode}) {
    const [gpuOptions, setGpuOptins] = useState({
        gpuOptionA: null,
        gpuOptionB: null,
        gpuOptionC: null,
        gpuOptionD: null
    })

    useEffect(()=>{
        //GPU LIST

        //RX 9000
        const gpu01 = "| RX 9070 XT "
        const gpu02 = "| RX 9070 "
        const gpu03 = "| RX 9070 GRE (TBA, Rumor) "
        const gpu04 = "| RX 9060 XT (TBA) "
        const gpu05 = "| RX 9060 (TBA) "

        //RX 7000
        const gpu06 = "| RX 7900 XTX "
        const gpu07 = "| RX 7900 XT "
        const gpu08 = "| RX 7900 GRE "
        const gpu09 = "| RX 7800 XT "
        const gpu10 = "| RX 7800 "
        const gpu11 = "| RX 7700 XT "
        const gpu12 = "| RX 7700 "
        const gpu13 = "| RX 7600 XT "
        const gpu14 = "| RX 7600 "

        //RX 6000
        const gpu15 = "| RX 6950 XT "
        const gpu16 = "| RX 6900 XT "
        const gpu17 = "| RX 6800 XT "
        const gpu18 = "| RX 6800 "
        const gpu19 = "| RX 6750 XT "
        const gpu20 = "| RX 6750 GRE 12GB "
        const gpu21 = "| RX 6750 GRE 10GB "
        const gpu22 = "| RX 6700 XT "
        const gpu23 = "| RX 6700 "
        const gpu24 = "| RX 6650 XT "
        const gpu25 = "| RX 6600 XT "
        const gpu26 = "| RX 6600 "
        const gpu27 = "| RX 6500 XT "
        const gpu28 = "| RX 6400 "

        //RX 5000
        const gpu29 = "| RX 5700 XT Anniversary Edition "
        const gpu30 = "| RX 5700 XT "
        const gpu31 = "| RX 5700 "
        const gpu32 = "| RX 5600 XT "

        //RX Vega
        const gpu33 = "| RX Vega VII "
        const gpu34 = "| RX Vega 64 "
        const gpu35 = "| RX Vega 56 "

        //RX 500
        const gpu36 = "| RX 590 "
        const gpu37 = "| RX 580 8GB "
        const gpu38 = "| RX 580 4GB "
        const gpu39 = "| RX 570 "
        const gpu40 = "| RX 560 4GB "
        const gpu41 = "| RX 560 2GB "
        const gpu42 = "| RX 550 4GB "
        const gpu43 = "| RX 550 2GB "

        if (gpuGeneration === 0 && performanceBraket <= 1) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })

        //THE HELL OF IF STATEMENTS

        //RX 9000 series
        } else if(gpuGeneration === 0 && performanceBraket ===2) {
            setGpuOptins({
                gpuOptionA: gpu01,
                gpuOptionB: gpu02,
                gpuOptionC: gpu03,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 0 && performanceBraket ===3) {
            setGpuOptins({
                gpuOptionA: gpu04,
                gpuOptionB: gpu05,
                gpuOptionC: null,
                gpuOptionD: null
            })
            //RX 7000
        } else if(gpuGeneration === 0 && performanceBraket <= 4) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }

        else if(gpuGeneration === 1 && performanceBraket ===0) {
            setGpuOptins({
                gpuOptionA:"| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 1 && performanceBraket ===1) {
            setGpuOptins({
                gpuOptionA: gpu06,
                gpuOptionB: gpu07,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 1 && performanceBraket ===2) {
            setGpuOptins({
                gpuOptionA: gpu08,
                gpuOptionB: gpu10,
                gpuOptionC: gpu09,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 1 && performanceBraket ===3) {
            setGpuOptins({
                gpuOptionA: gpu11,
                gpuOptionB: gpu12,
                gpuOptionC: gpu13,
                gpuOptionD: gpu14
            })
        } else if(gpuGeneration === 1 && performanceBraket <= 4) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }
        //RX 6000
        else if(gpuGeneration === 2 && performanceBraket === 0) {
            setGpuOptins({
                gpuOptionA: gpu15,
                gpuOptionB: gpu16,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 2 && performanceBraket === 1) {
            setGpuOptins({
                gpuOptionA: gpu17,
                gpuOptionB: gpu18,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 2 && performanceBraket === 2) {
            setGpuOptins({
                gpuOptionA: gpu19,
                gpuOptionB: gpu20,
                gpuOptionC: gpu21,
                gpuOptionD: gpu22
            })
        } else if(gpuGeneration === 2 && performanceBraket === 3) {
            setGpuOptins({
                gpuOptionA: gpu23,
                gpuOptionB: gpu24,
                gpuOptionC: gpu25,
                gpuOptionD: gpu26
            })
        } else if(gpuGeneration === 2 && performanceBraket === 4) {
            setGpuOptins({
                gpuOptionA: gpu27,
                gpuOptionB: gpu28,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 2 && performanceBraket === 5) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }
        //RX 5000
        else if(gpuGeneration === 3 && performanceBraket === 0 ) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 3 && performanceBraket === 1 ) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }else if(gpuGeneration === 3 && performanceBraket === 2) {
            setGpuOptins({
                gpuOptionA: gpu29,
                gpuOptionB: gpu30,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 3 && performanceBraket === 3) {
            setGpuOptins({
                gpuOptionA: gpu31,
                gpuOptionB: gpu32,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 3 && performanceBraket === 4 ) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 3 && performanceBraket === 5 ) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 4 && performanceBraket === 0 ) {
            setGpuOptins({
                gpuOptionA: "| none",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 4 && performanceBraket === 1 ) {
            setGpuOptins({
                gpuOptionA: gpu33,
                gpuOptionB: gpu34,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 4 && performanceBraket === 2 ) {
            setGpuOptins({
                gpuOptionA: gpu35,
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if(gpuGeneration === 4 && performanceBraket > 2) {
            setGpuOptins({
                gpuOptionA: "| Look for RX 500 series",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }
        //RX 500 series
        else if (gpuGeneration===5 && performanceBraket < 3) {
            setGpuOptins({
                gpuOptionA: "| Look for RX Vega series",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if (gpuGeneration === 5 && performanceBraket === 3) {
            setGpuOptins({
                gpuOptionA: gpu36,
                gpuOptionB: gpu37,
                gpuOptionC: gpu38,
                gpuOptionD: gpu39
            })
        } else if (gpuGeneration === 5 && performanceBraket === 4) {
            setGpuOptins({
                gpuOptionA: gpu40,
                gpuOptionB: gpu41,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if (gpuGeneration === 5 && performanceBraket === 5) {
            setGpuOptins({
                gpuOptionA: gpu42,
                gpuOptionB: gpu43,
                gpuOptionC: null,
                gpuOptionD: null
            })
        } else if (gpuGeneration === 6) {
            setGpuOptins({
                gpuOptionA: "| Older Radeon GPU's arent really worth it. Look for NVIDIA 900 / 700 series instead.",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }


    },[gpuGeneration, performanceBraket])
    return(
        <div>
            <p>Fitting GPU's are:</p>
            <p>{gpuOptions.gpuOptionA} {gpuOptions.gpuOptionB} {gpuOptions.gpuOptionC} {gpuOptions.gpuOptionD}|</p>
            <p className={`note ${darkMode ? 'dark' : ''}`}>Note: As of April 11th, 2025, not all RX 9000 series GPU's have been released / announced.</p>
        </div>
    )
}
