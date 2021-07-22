import React, { useEffect } from 'react'

 
const Home = ()=> {

    useEffect( () => {
        document.title = 'Comptable — About'
        document.getElementById('about').classList.add('uk-active')
        document.getElementById('home').classList.remove('uk-active')
    })
    let mytitle=document.title
    function title(){
        mytitle = document.title
        document.getElementById('title').innerText=mytitle
    }

    return (
        <div className="About" onLoad={title}>
            <div className="uk-child-width-1-2 uk-text-center uk-padding" data-uk-grid>
                <div>
                    <div id='title' className="uk-card uk-card-default uk-card-body">

                    </div>
                </div>
                <div>
                    <div className="uk-child-width-1-2 uk-text-center" data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-primary uk-card-body"></div>
                        </div>
                        <div>
                            <div className="uk-card uk-card-primary uk-card-body"></div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )

}

export default Home