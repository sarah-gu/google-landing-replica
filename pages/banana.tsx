import React from 'react'; 
import Image from 'next/image'

const Banana = () => {
    return (
        <div>
            <Image
                className="rounded-full"
                src="/images/banana.jpeg"
                fill
                alt="banana picture"
            />
        </div>
    );
};

export default Banana; 