import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const RickAndMorty = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="container">
            <div className="row">
                {
                    store.rickCharacters.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="col-12 col-md-4 mb-3">
                                <div className="border">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-100"
                                    />
                                    <div className="p-2">
                                        <p>{item.name}</p>
                                        <Link
                                            className="btn btn-primary w-100"
                                            to={`/rick-and-morty/${item.id}`}
                                        > Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}