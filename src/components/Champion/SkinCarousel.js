import React from 'react'

export const SkinCarousel = ({ champ }) => {
    return (<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">



            {champ.skins.map((skin, i) => {

                const skinUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_${skin.num}.jpg`
                return <>
                    {i === 0
                        ?
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={skinUrl} />
                            <div className="carousel-caption d-none d-md-block captionSkin">{skin.name}</div>
                        </div>
                        :
                        <div className="carousel-item">
                            <img className="d-block w-100" src={skinUrl} />
                            <div className="carousel-caption d-none d-md-block captionSkin">{skin.name}</div>
                        </div>}
                </>


                // return <div>
                //     <img className='img-thumbnail skinImage' src={skinUrl} />
                //     <p>{skin.name}</p>
                // </div>



            })}

        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only"></span>
        </a>
    </div>

    )
}
