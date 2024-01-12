import Header from "./Header"
import Footer from "./Footer"
import Card from "./PropsCard/Card"
import Card2 from "./PropsCard/Card2";

function App() {
  // 5th maps and arrays 
//we can map array elements to
  let arr=[1, 3, 5, 12];
  arr.map((item)=>{
    return console.log(item)
  })

  let arraOfarrays = [[3,4,5], [23, 34, 54]]
  arraOfarrays.map((item)=>{
    return item.map((subItem)=>{
      console.log(subItem)
    })
  })

  let productArr=[
    {id:1001, title:"shoes", price:10, stock:20},
    {id:1002, title:"hoodies", price:20, stock:40},
    {id:1003, title:"jeans", price:50, stock:40},
    {id:1004, title:"tops", price:10, stock:12}
  ];

  productArr.map((item)=>{
    return console.log(item.id)
  })

  return (
    <>
    {/* 3rd Components */}
    {/* //it allows to return only one component at one time so will wrap this in a parent component  */}
   <Header></Header>
   <Footer></Footer>




   {/* 4th Props */}
   <Card  price={20}></Card>
   <Card title={'dress'} price={'19.9'}></Card> 
   <Card title={'T-shirt'} price={19.9}></Card>

    

    {/* 5th map and arrays  */}
    {/* for objs we need to use () instead of {} */}
    {
      productArr.map((product)=>(
        <Card key={product.id} title={product.title} price={product.price} stock={product.stock}></Card>
      ))
    }
  
  {/* 6th states  
  when we want to decrement the values but it can not desplay thats why we should use state variable
  for that we will add hook which is useState so we can update and replace the value*/}

{/* 7th class components
accessing props in class components
method in class components
states in class components  */}


{/* 8th class based props  
we requires constructor to initialise */}
<Card2 title={"saree"} price={20} stock={40}></Card2>
   </>
  )
}

// normal html vs jsx (javascript + xml)
// html          jsx 
// class         className
// for            html for 
// onclick          onClick camelCase
// style="color:'red';"   {{color: "red";
//                         fontSize:"12px"  camelCase always
//                         }} first brackate for js and second for css 
export default App
