

export default function Footer() {
    return (
        <>
            <div className="flex flex-col text-white uppercase px-20 py-28">
                <div className="flex justify-start items-center gap-8 h-1/2 w-full font-medium">
                    <div>projects</div>
                    <div>about</div>
                    <div>contact</div>
                    <div>[fr]</div>
                </div>
                <div className="flex ">
                    <div className="mt-10 leading-[2.5rem]">
                        <div>made with 💞</div>
                        <div>harshgolyan308@gmail.com</div>
                        <div>789 654 123 </div>
                        <div className="mt-40 leading-[2.5rem]">
                            <div>Youtube</div>
                            <div>facebook</div>
                            <div>linkedin</div>
                            <div>github</div>
                        </div>
                    </div>
                    <div className="text-[25rem] tracking-20">mill3</div>
                </div>
            </div>
        </>
    )
}