import Header from "./Header"
import Footer from "./Footer"
import Card from "./PropsCard/Card"

function App() {

  return (
    <>
    {/* 3rd Components */}
    {/* //it allows to return only one component at one time so will wrap this in a parent component  */}
   <Header></Header>
   <Footer></Footer>




   {/* 4th Props */}
   <Card title={'jeans'} price={'20$'}></Card>
   <Card title={'shoes'} price={'19.9$'}></Card>
   <Card title={'hoodies'} price={'19.9$'}></Card>
   
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
