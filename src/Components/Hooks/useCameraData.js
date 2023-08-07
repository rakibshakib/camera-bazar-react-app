import { useEffect, useState } from "react"

const useCameraData = () => {
    const [cameras, setCameras] = useState([])
    useEffect(() => {
        fetch("https://camera-bazar-node-server.onrender.com/cameras")
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return [cameras]
}
export default useCameraData;