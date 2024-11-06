import { LandingLayout } from "@/components/layout";
import React, { ReactElement, useEffect, useState } from "react";

const Home = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <p>Loading...</p>;

    return (
        <React.Fragment>
            <div className="w-full h-screen flex justify-center items-center bg-slate-800">
                <h3 className="text-slate-400 text-[5rem] font-bold italic">Rina Page</h3>
            </div>
        </React.Fragment>
    )
}

Home.getLayout = (page: ReactElement) => (
    <LandingLayout>
        {page}
    </LandingLayout >
)

export default Home