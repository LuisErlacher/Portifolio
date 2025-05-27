import { createContext, useContext, useEffect, useState, ReactNode  } from "react";

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
    children: ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,

}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (window.localStorage.getItem(storageKey) as Theme) || defaultTheme
    )
     useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
            root.classList.add(systemTheme)
            return;
        }

        root.classList.add(theme)
    }, [theme])
     
    const value = {
        theme,
        setTheme: (theme: Theme) => {
            setTheme(theme)
            window.localStorage.setItem(storageKey, theme)
            setTheme(theme)
        },
    }
    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children} 
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
    if (context === undefined) {
        throw new Error("usethema deve ser usado dentro do ThemeProvider")
    }
    return context
}