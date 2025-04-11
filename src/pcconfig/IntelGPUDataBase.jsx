import {useEffect, useState} from "react";

export default function IntelGPUDataBase({gpuGeneration, performanceBraket}) {
    const [gpuOptions, setGpuOptins] = useState({
        gpuOptionA: null,
        gpuOptionB: null,
        gpuOptionC: null
    })
    useEffect(()=>{
        //GPU LIST

        //Battlemage
        const gpu01 = "Arc 5 B580"
        const gpu02 = "Arc 5 B570"

        //Alchemist
        const gpu03 = "Arc 7 A770 16GB"
        const gpu04 = "Arc 7 A770 08GB"
        const gpu05 = "Arc 7 A750"
        const gpu06 = "Arc 5 A580"
        const gpu07 = "Arc 3 A380"
        const gpu08 = "Arc 3 A310"
    })

    return(
        <div>
            <p>Fitting GPU's are:</p>
            <p>{gpuOptions.gpuOptionA} {gpuOptions.gpuOptionB} {gpuOptions.gpuOptionC}</p>
        </div>
    )
}