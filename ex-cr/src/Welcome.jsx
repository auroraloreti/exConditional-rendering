import Age from './Age'; 

function Welcome({ name = "Matthew", age }) {
  return (
    <div>
      <p>Benvenuto, <strong>{name}</strong>!</p>
      
      {[1, 2, 3, 4, 5].map((iteration) => (
        <div key={iteration}>
          {age > 18 && <Age age={age} key={`age-${(iteration)} `} />} 
          {age !== undefined && <Age age={age} key={`age-${iteration}`} />}  
          {age > 18 && age < 65 && <Age age={age} key={`age-${iteration}`} />}  
          {age > 18 && age < 65 && name === "John" && <Age age={age} key={`age-${iteration}`} />}  
        </div>
      ))}
    </div>
  );
}

export default Welcome;