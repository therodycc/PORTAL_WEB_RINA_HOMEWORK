import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Section5 } from "@/components/Section5";
import { Section6 } from "@/components/Section6";
import { Section7 } from "@/components/Section7";
import { Section8 } from "@/components/Section8";
import { LandingLayout } from "@/layout";
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
                <Section1></Section1>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-700">
                <Section2></Section2>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-600">
                <Section3></Section3>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-500">
                <Section4></Section4>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-400">
                <Section5></Section5>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-300">
                <Section6></Section6>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-200">
                <Section7></Section7>
            </div>
            <div className="w-full h-screen flex justify-center items-center bg-slate-100">
                <Section8></Section8>
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