
import {Button} from './Button';

export const Bio = () => {
  return (
    <div className="h-screen">
        <header className="text-3xl font-bold justify-center items-center">Sarah&apos;s Bio Page</header>
        <div className="inline-flex flex-row justify-center  p-3 mx-5 shadow-md rounded-md">
            <div className="p-3 ml-3" style={{
                flex:1, backgroundColor:"pink"
            }}>
                Hi, my name is Sarah! <br></br>
                <Button count={3 } /> 
            </div>
            <div className="p-3 mr-3" style={{
                flex:1, backgroundColor:"yellow"
            }}>
                Hi, my name is Sarah also! 
            </div>
        </div>
    </div >
  );  
};