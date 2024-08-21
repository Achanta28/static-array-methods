import './App.css';
import Tollywood from './classes/Tollywood';
function App() {
  console.log(Tollywood.studio);
  let tollyWood = new Tollywood("Chiranjeevi","1978-present")
  console.log(tollyWood.name)
  console.log(  tollyWood.activeYears)
  
  

  
  let tollywoodStars = [
     "Chittoor V. Nagaiah","N. T. Rama Rao","Akkineni Nageswara Rao","S. V. Ranga Rao","Krishna",
     "Shobhan","Chiranjeevi", "Nagarjuna",  "Venkatesh", "Balakrishna", "Jr. NTR", "Mahesh Babu", 
     "Pawan Kalyan", "Prabhas", "Allu Arjun", "Ram Charan", "Nani", "Vijay Deverakonda", "Sai Dharam Tej", 
     "Varun Tej",
  ];
return (
    <div className="App">
      <h1>Array Methods</h1>
      <button type='button'  onClick={()=>{
        console.log(tollywoodStars)
        console.log(tollywoodStars.length)
        console.log(tollywoodStars[0])
        console.log(tollywoodStars[1])
        console.log(tollywoodStars[2])
        console.log(tollywoodStars[3])
        console.log(tollywoodStars[4])
        for(let i=0;i<tollywoodStars.length;i++){
          console.log(tollywoodStars[i])
          
        }

      }}>Length</button>
      <button type='button' onClick={()=>{
        for(let i=0;i<tollywoodStars.length;i++){
          console.log(tollywoodStars.at(i))
          
        }

      }}>At</button>
       <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        console.log(tollywoodStars.toString())
}}>toString</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        console.log(tollywoodStars.join("-"))

       

      }}>Join</button>
      <button type='button' onClick={()=>{
         console.log(tollywoodStars)
        delete tollywoodStars[5];
        console.log(tollywoodStars)

        }}>Delete</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.pop())
         console.log(tollywoodStars)

        }}>Pop</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.shift())
         console.log(tollywoodStars)

        }}>Shift</button>
        <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.push("Rana"))
         console.log(tollywoodStars)

        }}>Push</button>
         <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.unshift("Savitri"))
         console.log(tollywoodStars)

        }}>UnShift</button>
         <button type='button' onClick={()=>{
         console.log(tollywoodStars)
         console.log(tollywoodStars.splice(2,0,"Kanchanamala","Santha Kumari","Pushpavalli"))
         
         console.log(tollywoodStars)

        }}>Splice</button>

    </div>
  );
}

export default App;
