import React,{createContext,useState} from 'react'

export const CompanyContext =createContext()


export const CompanyProvider = ({children}) =>{
    const [company,setCompany]=useState({
        searchInput:""
    })

    return (
        <CompanyContext.Provider value={[company,setCompany]}>
            {children}
        </CompanyContext.Provider>
    )
}