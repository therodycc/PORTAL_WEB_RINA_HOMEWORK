import React, { ReactNode } from 'react';

interface LandingLayoutProps {
    children: ReactNode;
}

export const LandingLayout = ({ children }: LandingLayoutProps) => {
    return <>{children}</>;
};