








// // import React from 'react';
// // import ButtonLink from './ButtonLink';

// // const NavBar: React.FC = () => {
// //   const links = [
// //     { href: '/pages/page1', text: 'Page 1' },
// //     { href: '/pages/page2', text: 'Page 2' },
// //     { href: '/pages/page3', text: 'Page 3' },
// //     { href: '/pages/page4', text: 'Page 4' },
// //   ];

// //   return (
// //     <div>
// //       {links.map((link, index) => (
// //         <ButtonLink key={index} href={link.href} text={link.text} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default NavBar;




// import React from 'react';
// import ButtonLink from './ButtonLink';


// const NavBar: React.FC = () => {
//   const links = [
//     { href: '/pages/logIn', text: 'Log_in' },
//     { href: '/pages/signUp', text: 'SignUp' },
   
//   ];

//   return (
//     <div>
//     <nav className="w-full bg-pastel-purple py-4 shadow-md fixed top-0 left-0 z-10">
//       <div className="container mx-auto flex justify-center space-x-4">
//         {links.map((link, index) => (
//           <ButtonLink key={index} href={link.href} text={link.text} />
//         ))}
//       </div>
    
//     </nav>
    
     

//     </div>
//   );
// };

// export default NavBar;




import React from 'react';
import ButtonLink from './ButtonLink';

const NavBar: React.FC = () => {
  const links = [
    { href: '/pages/logIn', text: 'Log_in' },
    { href: '/pages/signUp', text: 'SignUp' },
  ];

  return (
    <div>
      <nav className="w-full bg-pastel-purple py-4 shadow-md fixed top-0 left-0 z-10">
        <div className="container mx-auto flex justify-center space-x-4">
          {links.map((link, index) => (
            <ButtonLink key={index} href={link.href} text={link.text} />
          ))}
        </div>
      </nav>

      {/* This creates space under the navbar */}
      <div className="pt-16"></div> {/* Adjust 16 to your nav bar's height */}
    </div>
  );
};

export default NavBar;
