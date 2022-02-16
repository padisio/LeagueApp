import React from 'react'

export const StatsBar = ({ num }) => {

    let respuesta = null;
    switch (num) {
        case 0:
            respuesta = <>

                <div className='statBarCont'>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                </div>

            </>
            break;
        case 1:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                </div>
            </>
            break;

        case 2:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                </div>
            </>
            break;
        case 3:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                </div>
            </>
            break;
        case 4:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    
                </div>
            </>
            break;
        case 5:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                   
                </div>
            </>
            break;
        case 6:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                  
                </div>
            </>
            break;
        case 7:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                  
                </div>
            </>
            break;
        case 8:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
               
                </div>
            </>
            break;
        case 9:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>   
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='vacio'>&nbsp;&nbsp;</div>
                </div>
            </>
            break;
        case 10:
            respuesta = <>
                <div className='statBarCont'>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                    <div className='lleno'>&nbsp;&nbsp;</div>
                </div>
            </>
            break;
        default:
            break;
    }
    return respuesta;

}
