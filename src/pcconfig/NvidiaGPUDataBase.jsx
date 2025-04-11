import {useEffect, useState} from "react";


export default function NvidiaGPUDataBase({gpuGeneration, performanceBraket}) {
    const [gpuOptions, setGpuOptins] = useState({
        gpuOptionA: null,
        gpuOptionB: null,
        gpuOptionC: null
    })

    useEffect(()=>{
        //GPU LIST

        //RTX 5000
        const gpu01 = "RTX 5090"
        const gpu02 = "RTX 5080"
        const gpu03 = "RTX 5070 TI"
        const gpu04 = "RTX 5070"
        const gpu05 = "RTX 5060 TI (TBA)"
        const gpu06 = "RTX 5060 (TBA)"
        const gpu07 = "RTX 5050 (TBA, unkown)"

        //RTX 4000
        const gpu08 = "RTX 4090"
        const gpu09 = "RTX 4080 Super"
        const gpu10 = "RTX 4080"
        const gpu11 = "RTX 4070 TI Super"
        const gpu12 = "RTX 4070 TI"
        const gpu13 = "RTX 4070 Super"
        const gpu14 = "RTX 4060 TI 16GB"
        const gpu15 = "RTX 4060 TI 8GB"
        const gpu16 = "RTX 4060"

        //RTX 3000
        const gpu17 = "RTX 3090 TI"
        const gpu18 = "RTX 3090"
        const gpu19 = "RTX 3080 TI"
        const gpu20 = "RTX 3080 12GB"
        const gpu21 = "RTX 3080 10GB"
        const gpu22 = "RTX 3070 TI"
        const gpu23 = "RTX 3070"
        const gpu24 = "RTX 3060 TI"
        const gpu25 = "RTX 3060 12GB"
        const gpu26 = "RTX 3060 08GB"
        const gpu27 = "RTX 3050 08GB"
        const gpu28 = "RTX 3050 06GB"

        //RTX 2000
        const gpu29 = "TITAN RTX"
        const gpu30 = "RTX 2080 TI"
        const gpu31 = "RTX 2080 Super"
        const gpu32 = "RTX 2080"
        const gpu33 = "RTX 2070 Super"
        const gpu34 = "RTX 2070"
        const gpu35 = "RTX 2060 Super"
        const gpu36 = "RTX 2060 12GB"
        const gpu37 = "RTX 2060 06GB"
        //GTX 1600
        const gpu38 = "GTX 1660 TI"
        const gpu39 = "GTX 1660 Super"
        const gpu40 = "GTX 1660"
        const gpu41 = "GTX 1650 Super"
        const gpu42 = "GTX 1650"
        const gpu43 = "GTX 1650 (GDDR5 Variant)"
        const gpu44 = "GTX 1630"

        //GTX 1000
        const gpu45 = "TIAN Xp"
        const gpu46 = "TIAN X"
        const gpu47 = "GTX 1080 TI"
        const gpu48 = "GTX 1080"
        const gpu49 = "GTX 1070 TI"
        const gpu50 = "GTX 1070"
        const gpu51 = "GTX 1060 6GB (GDDR5X Variant)"
        const gpu52 = "GTX 1060 6GB (GDDR5 Variant)"
        const gpu53 = "GTX 1050 TI"
        const gpu54 = "GTX 1050 3GB"
        const gpu55 = "GTX 1050 2GB"
        const gpu56 = "GT 1030 (GDDR5 Variant)"
        const gpu56 = "GT 1030 (DDR4 Variant)"
        const gpu56 = "GT 1010"

    })

    return(
        <div>
            <p>Fitting GPU's are:</p>
            <p>{gpuOptions.gpuOptionA} {gpuOptions.gpuOptionB} {gpuOptions.gpuOptionC}</p>
            <p>Note: As of April 11th, 202, not all RTX 5000 series GPU's have been released yet.</p>

        </div>
    )
}