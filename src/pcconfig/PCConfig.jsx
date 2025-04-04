import { useState } from "react";
import IntelCPUDataBase from "./IntelCPUDataBase.jsx";
import AMDCPUDataBase from "./AMDCPUDataBase.jsx";

export default function PCConfig() {
    // CPU Vendor and Generation
    const [cpuVendor, setCpuVendor] = useState(0);  // 0 = Intel, 1 = AMD
    const [intelCpuGeneration, setIntelCpuGeneration] = useState(0); // 0 = Core Ultra 200 / Arrow Lake
    const [amdCpuGeneration, setAmdCpuGeneration] = useState(0); // 0 = Ryzen 9000 / Zen 5
    const [cpuPerformanceBracket, setCpuPerformanceBracket] = useState(0); // 0 = Core Ultra / Ryzen 9
    const [threeDVCache, setThreeDVcache] = useState(0); // true = eg. Ryzen 7 9800X3D
    const [iGpu, setIGpu] = useState(0); // true = Integrated Graphics, false = No Integrated Graphics
    const [cpuGenerationName, setCpuGenerationName] = useState("Intel Core Ultra ")

    const [cpuIsAmd, setCpuIsAmd] = useState(false);
    const [cpuIsIntel, setCpuIsIntel] = useState(true);

    // GPU Vendor and Generation
    /*
    const [gpuVendor, setGpuVendor] = useState(0); // 0 = Nvidia, 1 = AMD, 2 = Intel
    const [nvidiaGpuGeneration, setNvidiaGpuGeneration] = useState(0); // 0 = RTX 5000
    const [amdGpuGeneration, setAmdGpuGeneration] = useState(0); // 0 = RX 9000
    const [intelGpuGeneration, setIntelGpuGeneration] = useState(0); // 0 = Arc Battlemage
    const [gpuPerformanceBracket, setGpuPerformanceBracket] = useState(0); // 0 = 90 Class
    */
    const handleCpuVendorChange = (event) => {
        const vendor = parseInt(event.target.value);
        console.log('Selected Vendor:', vendor);  // Log vendor selection
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

    const handleCpuPerformanceBraketChange = (event) => {
        setCpuPerformanceBracket(parseInt(event.target.value));
    };

    const handleAmdCpuGenerationChange = (event) => {
        setAmdCpuGeneration(parseInt(event.target.value));
    };

    const handleIntelCpuGenerationChange = (event) => {
        const generation = parseInt(event.target.value);
        setIntelCpuGeneration(generation);
        if (generation === 0) {
            setCpuGenerationName("Intel Core Ultra ");
        } else if (generation === 1) {
            setCpuGenerationName("Intel Core 14th Gen ");
        } else if (generation === 2) {
            setCpuGenerationName("Intel Core 13th Gen ");
        } else {
            setCpuGenerationName("Older Intel Core i");
        }
    };

    const handleIGpuChange = (event) => {
        setIGpu(parseInt(event.target.value, 10));
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
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>PC Configurator</h1>
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
                <input type="submit" value="Submit Configuration"/>
            </form>
            {cpuIsIntel &&(
                <IntelCPUDataBase generation={intelCpuGeneration} performance={cpuPerformanceBracket} iGpu={iGpu}/>
            )}
            {cpuIsAmd && (
                <AMDCPUDataBase generation={amdCpuGeneration} performance={cpuPerformanceBracket} threeDVCache={threeDVCache}/>
            )}
        </div>
    );
}
