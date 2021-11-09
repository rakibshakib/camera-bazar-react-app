import { useEffect, useState } from "react"

const useCameraData = () => {
    const [cameras, setCameras] = useState([])
    useEffect(() => {
        fetch("https://frozen-beach-02774.herokuapp.com/cameras")
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])
    return [cameras]
}
export default useCameraData;