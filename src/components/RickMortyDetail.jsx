import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"

const urlBaseRick = "https://rickandmortyapi.com/api/character"

export const RickMortyDetail = () => {
    const [characterDetail, setCharacterDetail] = useState({})

    const { store } = useGlobalReducer()
    const { deimianId } = useParams()

    const getDetailCharacter = () => {

        try {
            const resultFind = store.rickCharacters.find((item)=> deimianId == item.id)
        
            setCharacterDetail(resultFind)

        } catch (error) {
            console.log("error: ", error)
        }

    }


    useEffect(() => {
        getDetailCharacter()
    }, [store.rickCharacters])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-7">
                    <img
                        // src={characterDetail == undefined ? "": characterDetail.image }--> vieja escuela
                        src={characterDetail?.image}
                        alt={`Imagen del personaje ${characterDetail?.name}`}
                        className="w-100"
                    />
                    <div>
                        <h1>{characterDetail?.name}</h1>
                        <p>{characterDetail?.status}</p>
                        <p>{characterDetail?.gender}</p>
                        <Link
                            className="btn btn-success"
                            to={"/rick-and-morty"}>Go back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}