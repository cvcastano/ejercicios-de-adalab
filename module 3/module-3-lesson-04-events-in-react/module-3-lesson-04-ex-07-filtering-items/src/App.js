import React from 'react';

class App extends React.Component {
  render() {
    const items = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];
    return (
      <div className="page">
        <h1>Filtering lists with React:</h1>
        
        {items.map(item => {
          return (
            <li className="list">
              <h2>Name: {item.name}</h2>
              <p>Description: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;




// import React from 'react';

// const students = [
//   {
//     promo: 'A',
//     name: 'Sofía',
//     age: 20
//   },
//   {
//     promo: 'B',
//     name: 'María',
//     age: 21
//   },
//   {
//     promo: 'A',
//     name: 'Lucía',
//     age: 22
//   }
// ];
// const promoAstudents = students.filter(student => student.promo === 'A');

// class App extends React.Component {
//   render() {
   
//     return (
//       <div className="page">
//         <h1>Filtering lists with React:</h1>
//         {promoAstudents.map((promoAstudent, index) => {
//           return (
//             <li className="list" key={index}>
//               <h2>Name: {promoAstudent.name}</h2>
//               <p>Age: {promoAstudent.age}</p>
//             </li>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default App;

