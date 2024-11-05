import { createContext, useContext, useState, useEffect, ReactNode, FC, ReactElement } from 'react';

type RouterContextType = {
    currentPath: string;
    navigate: (to: string) => void;
};

// Define RouterContext with an initial type of `RouterContextType | null`
const RouterContext = createContext<RouterContextType | null>(null);

interface RouterProviderProps {
    children: ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => {
    const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

    const navigate = (to: string) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    };

    useEffect(() => {
        const handlePopState = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    return (
        <RouterContext.Provider value={{ currentPath, navigate }}>
            {children}
        </RouterContext.Provider>
    );
};

export const useRouter = (): RouterContextType => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error("useRouter must be used within a RouterProvider");
    }
    return context;
};

// Route
interface RouteProps {
    path: string,
    component: ReactElement<any , any> | null;
}
export const Route: FC<RouteProps> = ({ path, component }) => {
    const { currentPath } = useRouter();
    if (component !== undefined && currentPath === path) {
        return component;
    }
    return null;
};

// Link
interface LinkProps {
    to: string,
    component: ReactNode,
}

export const Link: FC<LinkProps> = ({ to, component }) => {
    const { navigate } = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a href={to} onClick={handleClick}>
            {component}
        </a>
    );
};



