import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from './components/Footer';

import './styles/Testing.scss';


function Test() {

  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="background-image-1" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.8}>
        <div className="background-image-2" />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1}>
        <div className="background-image-3" />
      </ParallaxLayer>
      <div className="content">
        <h1>Checkout Page</h1>
        <p>This is the checkout page content.</p>
      </div>
    </Parallax>
  )
}

export default Test;


// function Test() {

//   const alignCenter = { display: 'flex', alignItems: 'center' };

//   return (
//     <div>
//       <div className='background' />

//       <Parallax pages={2}>

//         <ParallaxLayer 
//           sticky={{ start: 0, end: .5 }} 
//           style={{ ...alignCenter, justifyContent: 'flex-end' }}
//           className="parallax-card-sticky"
//         >
//           <div className='card sticky'>
//             <h1> Order Summary </h1>
//           </div>
//         </ParallaxLayer>

//         <ParallaxLayer 
//           offset={0.4} 
//           speed={0.5} 
//           style={{ ...alignCenter, justifyContent: 'flex-start' }}
//         >
//           <div className='card parallax purple'>
//             <p>I'm not</p>
//           </div>
//         </ParallaxLayer>

//         <ParallaxLayer 
//           offset={1.45} 
//           speed={0.5} 
//           style={{ ...alignCenter, justifyContent: 'center' }}
//         >
//           <Footer />
//         </ParallaxLayer>
        
//       </Parallax>
//     </div>
//   )




//   // return (
//   //   <div>
//   //     <div className='background' />

//   //     <Parallax pages={4}>
//   //       <ParallaxLayer 
//   //         offset={0} 
//   //         speed={0.5} 
//   //         style={{ ...alignCenter, justifyContent: 'center' }}
//   //       >
//   //         <p className='scrollText'>Scroll down</p>
//   //       </ParallaxLayer>

//   //       <ParallaxLayer 
//   //         sticky={{ start: 0, end: 1.5 }} 
//   //         style={{ ...alignCenter, justifyContent: 'flex-end' }}
//   //         className="parallax-card-sticky"
//   //       >
//   //         <div className='card sticky'>
//   //           <h1> Order Summary </h1>
//   //         </div>
//   //       </ParallaxLayer>

//   //       <ParallaxLayer 
//   //         offset={1.5} 
//   //         speed={1.5} 
//   //         style={{ ...alignCenter, justifyContent: 'flex-start' }}
//   //       >
//   //         <div className='card parallax purple'>
//   //           <p>I'm not</p>
//   //         </div>
//   //       </ParallaxLayer>

//   //       {/* <ParallaxLayer 
//   //         offset={2.5} 
//   //         speed={1.5} 
//   //         style={{ ...alignCenter, justifyContent: 'flex-end' }}
//   //       >
//   //         <div className='card parallax blue'>
//   //           <p>Neither am I</p>
//   //         </div>
//   //       </ParallaxLayer> */}
//   //     </Parallax>
//   //   </div>
//   // )
// }

// export default Test;

















































// import './styles/Testing.scss';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// import First from './assets/1.jpg';
// import Second from './assets/2.jpg';

// function Test() {

//   return (
//     <div className="test">

//       <Parallax pages={5}>

//         <ParallaxLayer offset={0} speed={0.5} 
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <p className='scrollText'>Scroll down</p>
//         </ParallaxLayer>

//         <ParallaxLayer 
//           sticky={{ start: 0, end: 4 }} 
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
//           <div className='card sticky'>
//             <p>I'm a sticky layer</p>
//           </div>
//         </ParallaxLayer>

//         <ParallaxLayer offset={1.5} speed={1.5} 
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//           <div className='card parallax purple'>
//             <p>I'm not</p>
//           </div>
//         </ParallaxLayer>

//         <ParallaxLayer offset={2.5} speed={1.5} 
//           style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//           <div className='card parallax blue'>
//             <p>Neither am I</p>
//           </div>
//         </ParallaxLayer>

//       </Parallax>

//     </div>
//   );
// }

// export default Test;


// import './styles/Testing.scss';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// import First from './assets/1.jpg';
// import Second from './assets/2.jpg';

// function Test() {

//   return (
//     <div className="test">

//       <Parallax 
//         pages={3} 
//         className="test-container"
//         style={{ display: 'flex' }}
//       >

//         <ParallaxLayer
//           className="test-left"
//           offset={0}
//           speed={1}
//           factor={1}
//           style={{
//             backgroundImage: `url(${First})`,
//             backgroundSize: 'cover'
//           }}
//         >
//           <h1> WELCOME! </h1>
//         </ParallaxLayer>

//         <ParallaxLayer 
//           className="test-right"
//           offset={1}
//           speed={1}
//           factor={2}
//           style={{
//             backgroundImage: `url(${Second})`,
//             backgroundSize: 'cover'
//           }}

//         >
//           <h1> FAREWELL! </h1>
//         </ParallaxLayer>

//       </Parallax>

//     </div>
//   );
// }

// export default Test;
