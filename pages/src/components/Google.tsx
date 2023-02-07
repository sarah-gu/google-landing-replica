import Image from 'next/image'
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

const Button = (props: (DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {x ?: number})) => {
    const {x, ...htmlProps} = props; 
    return (
        
        <button {...htmlProps} className={`bg-primary p-2.5 m-3 text-sm hover:bg-gray-200 hover:border-zinc-600 border-transparent border hover:shadow-lg ${props.className ?? ""} `}>{htmlProps.children}{x}</button>
    );
}

const Header = (props: { name: string; }) => {
    return (
        <div className="flex flex-row flow-root w-screen">
            <div className="primary text-sm justify-start float-left flex flex-row p-3 m-2 gap-3">
                <div>About </div>
                <div>Store</div>
            </div>
            <div className=" text-sm justify-end float-right flex flex-row p-3 m-2 gap-2">
                <div>Gmail </div>
                <div>Images </div>
                <div></div>
                <div>Hi, {props.name} </div>
            </div>
        </div>
    );
}

const Body = () => {
    return (
        <div className="w-screen flex flex-grow justify-center ">
            <div className="flex sm:flex-col flex-row w-screen items-center">
                <div className="h-36"></div>
                <div>
                    <Image
                        src="/images/google.png"
                        width="275"
                        height="150"
                        alt="google picture"
                    />
                </div>
                <input className=" text-gray-500 border-2 rounded-full w-[600px] p-2 pl-4 m-1 " type="text" placeholder="Search">
                </input>
                <div className="mt-2">
                    <Button title="hi" className="ml-32" x={1}>Google Search</Button>
                    <Button> I&apos;m Feeling Lucky</Button>
                </div>
            </div>
        </div>
        
    ); 
};

const Footer = () => {
    return(
        <div className="w-screen flex flex-row bg-gray-200 gap-3 text-gray-500 items-center justify-center p-1">
            <div className="flex flex-row basis-1/4 gap-5 p-3 text-sm justify-start bottom-0">
                <div className="pl-4">Advertising</div>
                <div>Business</div>
                <div>How Search Works </div>
            </div>
            <div className="text-center text-sm top-0 p-3 basis-1/2 "> Carbon Neutral since 2007 </div>
            <div className="flex flex-row gap-5 p-2 text-sm justify-end bottom-0 basis-1/4">
                <div >Privacy</div>
                <div>Terms</div>
                <div className="pr-4">Settings </div>
            </div>

        </div>
    );
};

export const Google = (props: { name: string; }) => {
    return (
    <div className="flex flex-col h-screen">
        <Header name="Sarah"/>
        <Body />
        <Footer/>
    </div >
  );  

}