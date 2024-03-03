import Image from "next/image";


export const Hero = () => {
    return (
        <>
            <section className="flex flex-row md:flex-row">
                <div>
                    <h2>I am Vinoth</h2>
                    <h4>Senior Technical Lead</h4>
                    <button>Contact me</button>
                </div>
                <div>
                    <Image
                        src="/images/logo/logo-dark.png"
                        alt="logo"
                        className="hidden w-full dark:block"
                    />
                </div>
            </section>
        </>
    );
};

