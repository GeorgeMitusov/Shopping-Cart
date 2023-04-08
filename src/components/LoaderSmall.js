import React from 'react';
import { MutatingDots } from 'react-loader-spinner'

const LoaderSmall = () => {

  const loaderStyles = {
    height: '15vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <MutatingDots 
        height="100"
        width="100"
        color='#33348e'
        secondaryColor='#33348e'
        radius='15'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={ loaderStyles }
        visible={true}
      />
    </>
  )
}

export default LoaderSmall;