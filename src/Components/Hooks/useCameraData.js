import { useEffect, useState } from "react"

const useCameraData = () => {
    const [cameras, setCameras] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cameras")
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return [cameras]
}
export default useCameraData;