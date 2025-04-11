import { useState } from "react";
import IntelCPUDataBase from "./IntelCPUDataBase.jsx";
import AMDCPUDataBase from "./AMDCPUDataBase.jsx";
import NvidiaGPUDataBase from "./NvidiaGPUDataBase.jsx";
import AMDGPUDataBase from "./AMDGPUDataBase.jsx";
import IntelGPUDataBase from "./IntelGPUDataBase.jsx";

export default function PCConfig() {
    // CPU Vendor and Generation
    const [cpuVendor, setCpuVendor] = useState(0);  // 0 = Intel, 1 = AMD
    const [intelCpuGeneration, setIntelCpuGeneration] = useState(0); // 0 = Core Ultra 200 / Arrow Lake, 1 = Core i 14th Gen. / Raptor Lake Refresh, 2 = Core i 13th Gen / Raptor Lake, 3 = Core i 12th Gen / Alder Lake, 4 = older
    const [amdCpuGeneration, setAmdCpuGeneration] = useState(0); // 0 = Ryzen 9000 / Zen 5, 1 = Ryzen 7000 / 8000, 2= Ryzen 5000, 3 = older
    const [cpuPerformanceBracket, setCpuPerformanceBracket] = useState(0); // 0 = Core Ultra / Ryzen 9, 1 = Core Ultra / Ryzen 7, 2 = Core Ultra / Ryzen 5, 3 = Core Ultra / Ryzen 3
    const [threeDVCache, setThreeDVcache] = useState(0); // true = eg. Ryzen 7 9800X3D
    const [iGpu, setIGpu] = useState(0); // true = Integrated Graphics, false = No Integrated Graphics
    const [cpuGenerationName, setCpuGenerationName] = useState("Intel Core Ultra ")
    const [overclockable, setOverclockable] = useState(0)

    const [cpuIsAmd, setCpuIsAmd] = useState(false);
    const [cpuIsIntel, setCpuIsIntel] = useState(true);

    // GPU Vendor and Generation

    const [gpuVendor, setGpuVendor] = useState(0); // 0 = Nvidia, 1 = AMD, 2 = Intel
    const [nvidiaGpuGeneration, setNvidiaGpuGeneration] = useState(0); // 0 = RTX 5000, 1 = RTX 4000, 2 = RTX 3000, 3 = RTX 2000/GTX 1600, 4 = GTX 1000, 5 = older
    const [amdGpuGeneration, setAmdGpuGeneration] = useState(0); // 0 = RX 9000, 1 = RX 7000, 2 = RX 6000, 3 = RX 5000, 4 = RX 500, 5 = older
    const [intelGpuGeneration, setIntelGpuGeneration] = useState(0); // 0 = Arc Battlemage, 1 = Arc Alchemist
    const [gpuPerformanceBracket, setGpuPerformanceBracket] = useState(0); // 0 = 90 Class, 1 = 80 Class, 2 = 70 Class, 3 = 60 CLass, 4= 50 Class, 5 = worseconst [cpuIsAmd, setCpuIsAmd] = useState(false);
    const [gpuGenerationName, setGpuGenerationName] = useState("NVIDIA GeForce ")

    const [gpuIsNvidia, setGpuIsNvidia] = useState(true);
    const [gpuIsAmd, setGpuIsAmd] = useState(false);
    const [gpuIsIntel, setGpuIsIntel] = useState(false);

    const handleCpuVendorChange = (event) => {
        const vendor = parseInt(event.target.value);
        console.log('Selected CPU Vendor:', vendor);  // Log vendor selection
        setCpuVendor(vendor);
        if (vendor === 0) {
            setCpuIsIntel(true);
            setCpuIsAmd(false);
            setCpuGenerationName("Intel Core Ultra ");
        } else {
            setCpuIsIntel(false);
            setCpuIsAmd(true);
            setCpuGenerationName("AMD Ryzen ");
        }
    };
    const handleGpuVendorChange = (event) => {
        const vendor2 = parseInt(event.target.value);
        console.log('Selected GPU Vendor:', vendor2);  // Log vendor selection
        setGpuVendor(vendor2);
        if (vendor2 === 0) {
            setGpuIsNvidia(true)
            setGpuIsAmd(false)
            setGpuIsIntel(false)
            setGpuGenerationName("Nviida GeForce ")
        } else if (vendor2 === 1){
            setGpuIsNvidia(false)
            setGpuIsAmd(true)
            setGpuIsIntel(false)
            setGpuGenerationName("AMD Radeon ")
        } else if(vendor2===2){
            setGpuIsNvidia(false)
            setGpuIsAmd(false)
            setGpuIsIntel(true)
            setGpuGenerationName("Intel ARC ")
        }
    };

    const handleCpuPerformanceBraketChange = (event) => {
        setCpuPerformanceBracket(parseInt(event.target.value));
    };
    const handleGpuPerformanceBraketChange = (event) => {
        setGpuPerformanceBracket(parseInt(event.target.value));
    };

    const handleAmdCpuGenerationChange = (event) => {
        setAmdCpuGeneration(parseInt(event.target.value));
    };

    const handleAmdGpuGenerationChange = (event) => {
        setAmdGpuGeneration(parseInt(event.target.value));
    };
    const handleIntelGpuGenerationChange = (event) => {
        setIntelGpuGeneration(parseInt(event.target.value));
    };
    const handleNvidiaGpuGenerationChange = (event) => {
        setNvidiaGpuGeneration(parseInt(event.target.value));
    };

    const handleIntelCpuGenerationChange = (event) => {
        const generation = parseInt(event.target.value);
        setIntelCpuGeneration(generation);
        if (generation === 0) {
            setCpuGenerationName("Intel Core Ultra ");
        } else if (generation === 1) {
            setCpuGenerationName("Intel Core 14th Gen i");
        } else if (generation === 2) {
            setCpuGenerationName("Intel Core 13th Gen i");
        } else if (generation === 3) {
            setCpuGenerationName("Intel Core 12th Gen i");
        }else {
            setCpuGenerationName("Older Intel Core i");
        }
    };

    const handleIGpuChange = (event) => {
        setIGpu(parseInt(event.target.value, 10));
    };
    const handleOverclockableChange = (event) => {
        setOverclockable(parseInt(event.target.value, 10));
    };
    const handleThreeDVCacheChange = (event) => {
        setThreeDVcache(parseInt(event.target.value, 10));
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            cpuVendor,
            intelCpuGeneration,
            amdCpuGeneration,
            cpuPerformanceBracket,
            iGpu,
            overclockable,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>PC Configurator</h1>
                <h2>CPU Selection</h2>
                <p>Select your Processor Brand</p>
                <label>
                    <input
                        type="radio"
                        name="cpuVendor"
                        checked={cpuVendor === 0}
                        value="0"
                        onChange={handleCpuVendorChange}
                    />Intel
                </label>
                <label>
                    <input
                        type="radio"
                        name="cpuVendor"
                        checked={cpuVendor === 1}
                        value="1"
                        onChange={handleCpuVendorChange}
                    />AMD
                </label>

                <p>Select your CPU Generation</p>
                {cpuIsIntel && (
                    <select name="intelCpuGeneration" value={intelCpuGeneration}
                            onChange={handleIntelCpuGenerationChange}>
                        <option value="0">Core Ultra 200 / Arrow Lake</option>
                        <option value="1">Core 14th Gen / Raptor Lake Refresh</option>
                        <option value="2">Core 13th Gen / Raptor Lake</option>
                        <option value="3">Core 12th Gen / Alder Lake</option>
                        <option value="4">Older Intel CPU</option>
                    </select>
                )}
                {cpuIsAmd && (
                    <select name="amdCpuGeneration" value={amdCpuGeneration} onChange={handleAmdCpuGenerationChange}>
                        <option value="0">Ryzen 9000 Series</option>
                        <option value="1">Ryzen 7000 or 8000 Series</option>
                        <option value="2">Ryzen 5000 Series</option>
                        <option value="3">Older AMD CPU</option>
                    </select>
                )}
                <p>Select your CPU Performance Tier</p>
                <select
                    name="cpuPerformanceBraket"
                    value={cpuPerformanceBracket}
                    onChange={handleCpuPerformanceBraketChange}
                >
                    <option value="0">{cpuGenerationName}9</option>
                    <option value="1">{cpuGenerationName}7</option>
                    <option value="2">{cpuGenerationName}5</option>
                    <option
                        value="3"
                    >
                        {cpuGenerationName}3
                    </option>

                </select>



                <p></p>

                {cpuIsIntel && (
                    <>
                        <label>
                            <input
                                type="radio"
                                name="iGpu"
                                checked={iGpu === 1}
                                value="1"
                                onChange={handleIGpuChange}
                            />With Integrated Graphics
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="iGpu"
                                checked={iGpu === 0}
                                value="0"
                                onChange={handleIGpuChange}
                            />Without Integrated Graphics
                        </label>
                        <p></p>
                        <label>
                            <input
                                type="radio"
                                name="overclock"
                                checked={overclockable === 1}
                                value="1"
                                onChange={handleOverclockableChange}
                            />Overclockable
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="overclock"
                                checked={overclockable === 0}
                                value="0"
                                onChange={handleOverclockableChange}
                            />Non-Overclockable
                        </label>
                    </>
                )}
                {cpuIsAmd && (
                    <>
                        <label>
                            <input
                                type="radio"
                                name="3DVCache"
                                checked={threeDVCache === 1}
                                value="1"
                                onChange={handleThreeDVCacheChange}
                            />With 3D VCache
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="3DVCache"
                                checked={threeDVCache === 0}
                                value="0"
                                onChange={handleThreeDVCacheChange}
                            />Without 3D VCache
                        </label>
                    </>
                )}


                <p></p>
            </form>
            {cpuIsIntel &&(
                <IntelCPUDataBase generation={intelCpuGeneration} performance={cpuPerformanceBracket} iGpu={iGpu} unlocked={overclockable}/>
            )}
            {cpuIsAmd && (
                <AMDCPUDataBase generation={amdCpuGeneration} performance={cpuPerformanceBracket} threeDVCache={threeDVCache}/>
            )}
            <p></p>
            <h2>GPU Selection</h2>
            <p>Select your GPU Brand</p>
            <label>
                <input
                    type="radio"
                    name="gpuVendor"
                    checked={gpuVendor === 0}
                    value="0"
                    onChange={handleGpuVendorChange}
                />NVIDIA
            </label>
            <label>
                <input
                    type="radio"
                    name="gpuVendor"
                    checked={gpuVendor === 1}
                    value="1"
                    onChange={handleGpuVendorChange}
                />AMD
            </label>
            <label>
                <input
                    type="radio"
                    name="gpuVendor"
                    checked={gpuVendor === 2}
                    value="2"
                    onChange={handleGpuVendorChange}
                />Intel
            </label>
            <p>Select your GPU Generation</p>
            {gpuIsIntel && (
            <select name="intelCpuGeneration" value={intelGpuGeneration}
                    onChange={handleIntelGpuGenerationChange}>
                <option value="0">ARC Battlemage</option>
                <option value="1">ARC Alchemist</option>
            </select>
        )}
            {gpuIsAmd && (
                <select name="amdCpuGeneration" value={amdGpuGeneration} onChange={handleAmdGpuGenerationChange}>
                    <option value="0">Radeon Rx 9000 Series</option>
                    <option value="1">Radeon Rx 7000 Series</option>
                    <option value="2">Radeon Rx 6000 Series</option>
                    <option value="3">Radeon Rx 5000 Series</option>
                    <option value="4">Radeon Rx 500 Series</option>
                    <option value="5">Older Radeon Series</option>
                </select>
            )}
            {gpuIsNvidia && (
                <select name="amdCpuGeneration" value={nvidiaGpuGeneration} onChange={handleNvidiaGpuGenerationChange}>
                <option value="0">RTX 5000 Series</option>
                <option value="1">RTX 4000 Series</option>
                <option value="2">RTX 3000 Series</option>
                <option value="3">RTX 2000 / GTX 1600 Series</option>
                <option value="4">GTX 1000 Series</option>
                <option value="5">Older GeForce Series</option>
                </select>
            )}
            <p>
            </p>
            <p>Select your GPU Performance Tier</p>
            <p>Note: This is going of NVIDIA's Numbering. So a Arc B580 is in the same Class as the RTX 4060</p>
            <select
                name="gpuPerformanceBraket"
                value={gpuPerformanceBracket}
                onChange={handleGpuPerformanceBraketChange}
            >
                <option value="0">{gpuGenerationName} 90 Class GPU</option>
                <option value="1">{gpuGenerationName} 80 Class GPU</option>
                <option value="2">{gpuGenerationName} 70 Class GPU</option>
                <option value="3">{gpuGenerationName} 60 Class GPU</option>
                <option value="4">{gpuGenerationName} 50 Class GPU</option>
                <option value="5">{gpuGenerationName} 30 Class GPU</option>
            </select>
            <p></p>
            {gpuIsNvidia && (
                <NvidiaGPUDataBase gpuGeneration={nvidiaGpuGeneration} performanceBraket={gpuPerformanceBracket}/>
                )}
            {gpuIsIntel && (
                <IntelGPUDataBase gpuGeneration={intelGpuGeneration} performanceBraket={gpuPerformanceBracket}/>
            )}
            {gpuIsNvidia && (
                <AMDGPUDataBase gpuGeneration={amdGpuGeneration} performanceBraket={gpuPerformanceBracket}/>
            )}
        </div>
    );
}
