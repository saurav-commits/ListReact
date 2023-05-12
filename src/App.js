

function App() {
  
  const fruits = [
    { name: "Apple",
      price: 25,
      emoji: "🍏"
    },
    { name: "Banana",
      price: 40,
      emoji: "🍌"
    },
    { name: "Melon",
      price: 75,
      emoji: "🍉"
    },
    {
      name: "Mango",
      price:15,
      emoji: "🥭"
    },
    {
      name: "Pear",
      price: 20,
      emoji: "🍐"
    }
]


  return <>
  <div style={{ display: "flex", justifyContent: "center" }}>
  {fruits.map((fruit) => (
    <div key={fruit}>{fruit.emoji}<br/></div>
  ))}
</div>
  </>;

}

export default App;
