import { useOutletContext } from 'react-router-dom'


export default function HostVanPhotos(props) {

    const van = useOutletContext()

    return (
        <>
            <img src={ van.imageUrl } alt="van" className="host-van-detail-image"/>
        </>
    )
}