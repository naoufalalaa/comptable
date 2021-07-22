import React, { useEffect }  from 'react';
function Sign() {

    useEffect( () => {
        document.title = 'Comptable — Sign UP'
        document.getElementById('about').classList.remove('uk-active')
        document.getElementById('home').classList.remove('uk-active')
    })

  return (
    <div>

    </div>
  );
}

export default Sign;
