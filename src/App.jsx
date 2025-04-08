import React from 'react';

export function App() {
  let cards = [
    {
      id : 1,
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus officia, ',
      image : "public\\image.avif"
    },
    {
      id : 2,
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus officia, ',
      image : "public\\image.avif"
    },
    {
      id : 3,
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus officia, ',
      image : "public\\image.avif"
    }
  ]
  return (
    <div className="container">
      <Header />
      <div className="cards">
      {cards.map((card,index) => <Cards image = {card.image} description = {card.description} key={card.id}/>)}
      </div>
    </div>
    
  )
}
export function Header() {
  return (
    <header>
      <div className="text">
        <h2>Position And Transform</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque possimus officia, quia explicabo exercitationem officiis odio magni doloribus consectetur blanditiis voluptatem recusandae accusantium ex, ad sequi iusto facere! Soluta, possimus?</p>
      </div>
    </header>
  )
}
export function Cards({image,description}) {
   return (
    <div className = "card">
      <img src= {image} alt="" />
      <p>{description}</p>
    </div>
   )
}