import {useEffect, useState} from "react";


export default function NvidiaGPUDataBase({gpuGeneration, performanceBraket}) {
    const [gpuOptions, setGpuOptins] = useState({
        gpuOptionA: null,
        gpuOptionB: null,
        gpuOptionC: null,
        gpuOptionD: null
    })

    useEffect(()=> {
        //GPU LIST

        //RTX 5000
        const gpu01 = "| RTX 5090 "
        const gpu02 = "| RTX 5080 "
        const gpu03 = "| RTX 5070 TI"
        const gpu04 = "| RTX 5070 "
        const gpu05 = "| RTX 5060 TI (TBA) "
        const gpu06 = "| RTX 5060 (TBA) "
        const gpu07 = "| RTX 5050 (TBA, Rumors) "

        //RTX 4000
        const gpu08 = "| RTX 4090 "
        const gpu09 = "| RTX 4080 Super "
        const gpu10 = "| RTX 4080 "
        const gpu11 = "| RTX 4070 TI Super "
        const gpu12 = "| RTX 4070 TI "
        const gpu13 = "| RTX 4070 Super "
        const gpu59 = "| RTX 4070 "
        const gpu14 = "| RTX 4060 TI 16GB "
        const gpu15 = "| RTX 4060 TI 8GB "
        const gpu16 = "| RTX 4060 "

        //RTX 3000
        const gpu17 = "| RTX 3090 TI"
        const gpu18 = "| RTX 3090"
        const gpu19 = "| RTX 3080 TI"
        const gpu20 = "| RTX 3080 12GB"
        const gpu21 = "| RTX 3080 10GB"
        const gpu22 = "| RTX 3070 TI"
        const gpu23 = "| RTX 3070"
        const gpu24 = "| RTX 3060 TI"
        const gpu25 = "| RTX 3060 12GB"
        const gpu26 = "| RTX 3060 08GB"
        const gpu27 = "| RTX 3050 08GB"
        const gpu28 = "| RTX 3050 06GB"

        //RTX 2000
        const gpu29 = "| TITAN RTX"
        const gpu30 = "| RTX 2080 TI"
        const gpu31 = "| RTX 2080 Super"
        const gpu32 = "| RTX 2080"
        const gpu33 = "| RTX 2070 Super"
        const gpu34 = "| RTX 2070"
        const gpu35 = "| RTX 2060 Super"
        const gpu36 = "| RTX 2060 12GB"
        const gpu37 = "| RTX 2060 06GB"
        //GTX 1600
        const gpu38 = "| GTX 1660 TI"
        const gpu39 = "| GTX 1660 Super"
        const gpu40 = "| GTX 1660"
        const gpu41 = "| GTX 1650 Super"
        const gpu42 = "| GTX 1650"
        const gpu43 = "| GTX 1650 (GDDR5 Variant)"
        const gpu44 = "| GTX 1630"

        //GTX 1000
        const gpu45 = "| TITAN Xp"
        const gpu46 = "| TITAN X"
        const gpu47 = "| GTX 1080 TI"
        const gpu48 = "| GTX 1080"
        const gpu49 = "| GTX 1070 TI"
        const gpu50 = "| GTX 1070"
        const gpu51 = "| GTX 1060 6GB (GDDR5X Variant)"
        const gpu52 = "| GTX 1060 6GB (GDDR5 Variant)"
        const gpu53 = "| GTX 1050 TI"
        const gpu54 = "| GTX 1050 3GB"
        const gpu55 = "| GTX 1050 2GB"
        const gpu56 = "| GT 1030 (GDDR5 Variant)"
        const gpu57 = "| GT 1030 (DDR4 Variant)"
        const gpu58 = "| GT 1010"

        //THE HELL OF IF STATEMENTS

        //RTX 5000
        if (gpuGeneration === 0 && performanceBraket === 0) {
            setGpuOptins({
                    gpuOptionA: gpu01,
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 0 && performanceBraket === 1) {
            setGpuOptins({
                    gpuOptionA: gpu02,
                    gpuOptionB: null,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 0 && performanceBraket === 2) {
            setGpuOptins({
                    gpuOptionA: gpu03,
                    gpuOptionB: gpu04,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 0 && performanceBraket === 3) {
            setGpuOptins({
                    gpuOptionA: gpu05,
                    gpuOptionB: gpu06,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 0 && performanceBraket === 4) {
            setGpuOptins({
                    gpuOptionA: gpu07,
                    gpuOptionB: null,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 0 && performanceBraket === 5) {
            setGpuOptins({
                    gpuOptionA: "| none ",
                    gpuOptionB: null,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        }
        //RTX 4000
        else if (gpuGeneration === 1 && performanceBraket === 0) {
            setGpuOptins({
                    gpuOptionA: gpu08,
                    gpuOptionB: null,
                    gpuOptionC: null,
                gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 1 && performanceBraket === 1) {
            setGpuOptins({
                    gpuOptionA: gpu09,
                    gpuOptionB: gpu10,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 1 && performanceBraket === 2) {
            setGpuOptins({
                    gpuOptionA: gpu11,
                    gpuOptionB: gpu12,
                    gpuOptionC: gpu13,
                    gpuOptionD: gpu59
                }
            )
        } else if (gpuGeneration === 1 && performanceBraket === 3) {
            setGpuOptins({
                    gpuOptionA: gpu14,
                    gpuOptionB: gpu15,
                    gpuOptionC: gpu16,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 1 && performanceBraket >= 3) {
            setGpuOptins({
                    gpuOptionA: "| none ",
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        }
        // RTX 3000
        else if (gpuGeneration === 2 && performanceBraket === 0) {
            setGpuOptins({
                    gpuOptionA: gpu17,
                    gpuOptionB: gpu18,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 2 && performanceBraket === 1) {
            setGpuOptins({
                    gpuOptionA: gpu19,
                    gpuOptionB: gpu20,
                    gpuOptionC: gpu21,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 2 && performanceBraket === 2) {
            setGpuOptins({
                    gpuOptionA: gpu22,
                    gpuOptionB: gpu23,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 2 && performanceBraket === 3) {
            setGpuOptins({
                    gpuOptionA: gpu24,
                    gpuOptionB: gpu25,
                    gpuOptionC: gpu26,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 2 && performanceBraket === 4) {
            setGpuOptins({
                    gpuOptionA: gpu27,
                    gpuOptionB: gpu28,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 2 && performanceBraket === 5) {
            setGpuOptins({
                    gpuOptionA: "| none ",
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        }
        //RTX 2000
        else if (gpuGeneration === 3 && performanceBraket === 0) {
            setGpuOptins({
                    gpuOptionA: gpu29,
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 3 && performanceBraket === 1) {
            setGpuOptins({
                    gpuOptionA: gpu30,
                    gpuOptionB: gpu31,
                    gpuOptionC: gpu32,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 3 && performanceBraket === 3) {
            setGpuOptins({
                    gpuOptionA: gpu35,
                    gpuOptionB: gpu36,
                    gpuOptionC: gpu37,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 3 && performanceBraket === 2) {
            setGpuOptins({
                    gpuOptionA: gpu33,
                    gpuOptionB: gpu34,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 3 && performanceBraket >= 3) {
            setGpuOptins({
                    gpuOptionA: "| Look for GTX 1600 Series GPU's ",
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
            //GTX 1600
        } else if (gpuGeneration === 4 && performanceBraket <= 2) {
            setGpuOptins({
                    gpuOptionA: "| Look for RTX 2000 Series GPU's ",
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 4 && performanceBraket === 3) {
            setGpuOptins({
                    gpuOptionA: gpu38,
                    gpuOptionB: gpu39,
                    gpuOptionC: gpu40,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 4 && performanceBraket === 4) {
            setGpuOptins({
                    gpuOptionA: gpu41,
                    gpuOptionB: gpu42,
                    gpuOptionC: gpu43,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 4 && performanceBraket === 5) {
            setGpuOptins({
                    gpuOptionA: gpu44,
                    gpuOptionB: null,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        }
        //GTX 1000
        else if (gpuGeneration === 5 && performanceBraket === 0) {
            setGpuOptins({
                    gpuOptionA: gpu45,
                    gpuOptionB: gpu46,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 5 && performanceBraket === 1) {
            setGpuOptins({
                    gpuOptionA: gpu47,
                    gpuOptionB: gpu48,
                    gpuOptionC: null,
                    gpuOptionD: null
                }
            )
        } else if (gpuGeneration === 5 && performanceBraket === 2) {
        setGpuOptins({
                gpuOptionA: gpu49,
                gpuOptionB: gpu50,
                gpuOptionC: null,
                gpuOptionD: null
            }
        )
    } else if (gpuGeneration === 5 && performanceBraket === 3) {
        setGpuOptins({
                gpuOptionA: gpu51,
                gpuOptionB: gpu52,
                gpuOptionC: null,
                gpuOptionD: null
            }
        )
    } else if (gpuGeneration === 5 && performanceBraket === 4) {
        setGpuOptins({
                gpuOptionA: gpu53,
                gpuOptionB: gpu54,
                gpuOptionC: gpu55,
                gpuOptionD: null
            }
        )
    } else if (gpuGeneration === 5 && performanceBraket === 5) {
            setGpuOptins({
                    gpuOptionA: gpu56,
                    gpuOptionB: gpu57,
                    gpuOptionC: gpu58,
                    gpuOptionD: null
                }
            )
        } else {
            setGpuOptins({
                gpuOptionA: "| Used GTX 900 / 700 Series cards",
                gpuOptionB: null,
                gpuOptionC: null,
                gpuOptionD: null
            })
        }
    }, [gpuGeneration, performanceBraket]);

    return(
        <div>
            <p>Fitting GPU's are:</p>
            <p>{gpuOptions.gpuOptionA} {gpuOptions.gpuOptionB} {gpuOptions.gpuOptionC} {gpuOptions.gpuOptionD}|</p>
            <p className="note">Note: As of April 11th, 2025, not all RTX 5000 series GPU's have been released yet.</p>
            <p className="note">Note: The RTX 5090 and 4090 have a slightly weaker "D" Variant</p>
            <p className="note">Note: The RTX 2000 and the GTX 1600 Series are based on the same architectue</p>
        </div>
    )
}